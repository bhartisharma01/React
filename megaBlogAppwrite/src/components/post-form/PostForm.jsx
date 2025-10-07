import React, { useCallback, useEffect, useState, } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import appWriteBlogService from '../../auth/blog_service';
import { Input, RTE, Select, Button } from '../index'
import { useForm } from 'react-hook-form';
const PostForm = ({ post }) => {
    console.log("checkin post after editing post...", post)
    const {slug} = useParams()
    const [posts, setPosts] = useState()
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await appWriteBlogService.uploadFile(data.image[0]) : null;

            if (file) {
                appWriteBlogService.deleteFile(post.featuredImage);
            }

            const dbPost = await appWriteBlogService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = await appWriteBlogService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appWriteBlogService.createPost({ ...data, userId: userData.$id });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/\s+/g, "_") // Replace spaces with underscores (allowed)
                .replace(/[^a-zA-Z0-9_]/g, "") // Remove invalid characters
                .replace(/^_+/, ""); // Remove leading underscores

        return "";
    }, []);

    useEffect(() => {
        if (slug) {
            appWriteBlogService.getPost(slug).then((post) => {
                console.log("Fetched post:", post); // Check if data is correct
                if (post) setPosts(post);
            }).catch((error) => {
                console.error("Error fetching post:", error); // Handle errors
                navigate('/');
            });
        } else {
            navigate('/');
        }
    }, [slug, navigate]);

    
    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                    value={post && post?.title}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                    value={post && post?.slug}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} value={post && post?.content}/>
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appWriteBlogService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                    value={post && post?.status}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}
export default PostForm
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import appWriteBlogService from '../auth/blog_service';
import { Container, PostForm } from '../components';
const EditPost = () => {
    const [post, setPosts] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate()
    console.log("checking slug inside edit post...", slug)
    useEffect(() => {
        if (slug) {
            appWriteBlogService.getPost(slug).then((post) => {
                console.log("checking post inside edit post...", post)
                if (post) setPosts(post)
            })
        } else {
            navigate('/')
        }

    }, [slug, navigate])

    return (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    )
}

export default EditPost
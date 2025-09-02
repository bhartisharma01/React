import { Client, Databases, ID } from "appwrite";
import config from "../config/config";
export class BlogService {
    client = new Client();
    databases;
    storage;
    constructor() {
        this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client)
    }
    async createPost(slug, { title, content, featuredImage, status, userId }) {
        try {
            const createPost = await this.databases.createDocument(config.appwriteDatabaseId, config.apperiteCollectionId, slug, {
                title,
                content,
                featuredImage,
                status, userId
            })
            return createPost;
        } catch (error) {
            console.log("error", error)
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(config.appwriteDatabaseId, config.apperiteCollectionId, slug);

        } catch (error) {
            console.log("error", error)
            return false;
        }
    }
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.getDocument(config.appwriteDatabaseId, config.apperiteCollectionId, queries);

        } catch (error) {
            console.log("error", error)
            return false;
        }
    }
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,

                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    async deletePost() {
        try {

        } catch (error) {
            console.log("error", error)
        }
    }

    // file upload services

    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId) {
        return this.storage.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const blogService = new BlogService();
export default blogService



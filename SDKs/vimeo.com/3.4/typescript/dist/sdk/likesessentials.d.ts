import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LikesEssentials {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * checkIfUserLikedVideo - Check if a user has liked a video
    **/
    checkIfUserLikedVideo(req: operations.CheckIfUserLikedVideoRequest, config?: AxiosRequestConfig): Promise<operations.CheckIfUserLikedVideoResponse>;
    /**
     * checkIfUserLikedVideoAlt1 - Check if a user has liked a video
    **/
    checkIfUserLikedVideoAlt1(req: operations.CheckIfUserLikedVideoAlt1Request, config?: AxiosRequestConfig): Promise<operations.CheckIfUserLikedVideoAlt1Response>;
    /**
     * getLikes - Get all the videos that a user has liked
    **/
    getLikes(req: operations.GetLikesRequest, config?: AxiosRequestConfig): Promise<operations.GetLikesResponse>;
    /**
     * getLikesAlt1 - Get all the videos that a user has liked
    **/
    getLikesAlt1(req: operations.GetLikesAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetLikesAlt1Response>;
    /**
     * getVideoLikes - Get all the users who have liked a video
    **/
    getVideoLikes(req: operations.GetVideoLikesRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoLikesResponse>;
    /**
     * getVideoLikesAlt1 - Get all the users who have liked a video
    **/
    getVideoLikesAlt1(req: operations.GetVideoLikesAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetVideoLikesAlt1Response>;
    /**
     * getVodLikes - Get all the users who have liked a video on an On Demand page
     *
     * This method gets all the users who have liked a particular video on an On Demand page.
    **/
    getVodLikes(req: operations.GetVodLikesRequest, config?: AxiosRequestConfig): Promise<operations.GetVodLikesResponse>;
    /**
     * likeVideo - Cause a user to like a video
    **/
    likeVideo(req: operations.LikeVideoRequest, config?: AxiosRequestConfig): Promise<operations.LikeVideoResponse>;
    /**
     * likeVideoAlt1 - Cause a user to like a video
    **/
    likeVideoAlt1(req: operations.LikeVideoAlt1Request, config?: AxiosRequestConfig): Promise<operations.LikeVideoAlt1Response>;
    /**
     * unlikeVideo - Cause a user to unlike a video
    **/
    unlikeVideo(req: operations.UnlikeVideoRequest, config?: AxiosRequestConfig): Promise<operations.UnlikeVideoResponse>;
    /**
     * unlikeVideoAlt1 - Cause a user to unlike a video
    **/
    unlikeVideoAlt1(req: operations.UnlikeVideoAlt1Request, config?: AxiosRequestConfig): Promise<operations.UnlikeVideoAlt1Response>;
}

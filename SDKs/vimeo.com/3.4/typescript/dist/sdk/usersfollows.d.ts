import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UsersFollows {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * checkIfUserIsFollowing - Check if a user is following another user
    **/
    checkIfUserIsFollowing(req: operations.CheckIfUserIsFollowingRequest, config?: AxiosRequestConfig): Promise<operations.CheckIfUserIsFollowingResponse>;
    /**
     * checkIfUserIsFollowingAlt1 - Check if a user is following another user
    **/
    checkIfUserIsFollowingAlt1(req: operations.CheckIfUserIsFollowingAlt1Request, config?: AxiosRequestConfig): Promise<operations.CheckIfUserIsFollowingAlt1Response>;
    /**
     * followUser - Follow a specific user
    **/
    followUser(req: operations.FollowUserRequest, config?: AxiosRequestConfig): Promise<operations.FollowUserResponse>;
    /**
     * followUserAlt1 - Follow a specific user
    **/
    followUserAlt1(req: operations.FollowUserAlt1Request, config?: AxiosRequestConfig): Promise<operations.FollowUserAlt1Response>;
    /**
     * followUsers - Follow a list of users
    **/
    followUsers(req: operations.FollowUsersRequest, config?: AxiosRequestConfig): Promise<operations.FollowUsersResponse>;
    /**
     * followUsersAlt1 - Follow a list of users
    **/
    followUsersAlt1(req: operations.FollowUsersAlt1Request, config?: AxiosRequestConfig): Promise<operations.FollowUsersAlt1Response>;
    /**
     * getFollowers - Get all the followers of a user
    **/
    getFollowers(req: operations.GetFollowersRequest, config?: AxiosRequestConfig): Promise<operations.GetFollowersResponse>;
    /**
     * getFollowersAlt1 - Get all the followers of a user
    **/
    getFollowersAlt1(req: operations.GetFollowersAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetFollowersAlt1Response>;
    /**
     * getUserFollowing - Get all the users that a user is following
    **/
    getUserFollowing(req: operations.GetUserFollowingRequest, config?: AxiosRequestConfig): Promise<operations.GetUserFollowingResponse>;
    /**
     * getUserFollowingAlt1 - Get all the users that a user is following
    **/
    getUserFollowingAlt1(req: operations.GetUserFollowingAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetUserFollowingAlt1Response>;
    /**
     * unfollowUser - Unfollow a user
    **/
    unfollowUser(req: operations.UnfollowUserRequest, config?: AxiosRequestConfig): Promise<operations.UnfollowUserResponse>;
    /**
     * unfollowUserAlt1 - Unfollow a user
    **/
    unfollowUserAlt1(req: operations.UnfollowUserAlt1Request, config?: AxiosRequestConfig): Promise<operations.UnfollowUserAlt1Response>;
}

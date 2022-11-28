import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ProjectsVideos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addVideoToProject - Add a specific video to a project
     *
     * This method adds a single video to the specified project.
    **/
    addVideoToProject(req: operations.AddVideoToProjectRequest, config?: AxiosRequestConfig): Promise<operations.AddVideoToProjectResponse>;
    /**
     * addVideoToProjectAlt1 - Add a specific video to a project
     *
     * This method adds a single video to the specified project.
    **/
    addVideoToProjectAlt1(req: operations.AddVideoToProjectAlt1Request, config?: AxiosRequestConfig): Promise<operations.AddVideoToProjectAlt1Response>;
    /**
     * addVideosToProject - Add a list of videos to a project
     *
     * This method adds multiple videos to the specified project.
    **/
    addVideosToProject(req: operations.AddVideosToProjectRequest, config?: AxiosRequestConfig): Promise<operations.AddVideosToProjectResponse>;
    /**
     * addVideosToProjectAlt1 - Add a list of videos to a project
     *
     * This method adds multiple videos to the specified project.
    **/
    addVideosToProjectAlt1(req: operations.AddVideosToProjectAlt1Request, config?: AxiosRequestConfig): Promise<operations.AddVideosToProjectAlt1Response>;
    /**
     * getProjectVideos - Get all the videos in a project
     *
     * This method gets all the videos that belong to the specified project.
    **/
    getProjectVideos(req: operations.GetProjectVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectVideosResponse>;
    /**
     * getProjectVideosAlt1 - Get all the videos in a project
     *
     * This method gets all the videos that belong to the specified project.
    **/
    getProjectVideosAlt1(req: operations.GetProjectVideosAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetProjectVideosAlt1Response>;
    /**
     * removeVideoFromProject - Remove a specific video from a project
     *
     * This method removes a single video from the specified project.
    **/
    removeVideoFromProject(req: operations.RemoveVideoFromProjectRequest, config?: AxiosRequestConfig): Promise<operations.RemoveVideoFromProjectResponse>;
    /**
     * removeVideoFromProjectAlt1 - Remove a specific video from a project
     *
     * This method removes a single video from the specified project.
    **/
    removeVideoFromProjectAlt1(req: operations.RemoveVideoFromProjectAlt1Request, config?: AxiosRequestConfig): Promise<operations.RemoveVideoFromProjectAlt1Response>;
    /**
     * removeVideosFromProject - Remove a list of videos from a project
     *
     * This method removed multiple videos from the specified project.
    **/
    removeVideosFromProject(req: operations.RemoveVideosFromProjectRequest, config?: AxiosRequestConfig): Promise<operations.RemoveVideosFromProjectResponse>;
    /**
     * removeVideosFromProjectAlt1 - Remove a list of videos from a project
     *
     * This method removed multiple videos from the specified project.
    **/
    removeVideosFromProjectAlt1(req: operations.RemoveVideosFromProjectAlt1Request, config?: AxiosRequestConfig): Promise<operations.RemoveVideosFromProjectAlt1Response>;
}

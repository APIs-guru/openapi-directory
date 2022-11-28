import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ProjectsEssentials {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createProject - Create a project
     *
     * This method creates a new project for the specified user.
    **/
    createProject(req: operations.CreateProjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectResponse>;
    /**
     * createProjectAlt1 - Create a project
     *
     * This method creates a new project for the specified user.
    **/
    createProjectAlt1(req: operations.CreateProjectAlt1Request, config?: AxiosRequestConfig): Promise<operations.CreateProjectAlt1Response>;
    /**
     * deleteProject - Delete a project
     *
     * This method deletes a project and optionally also the videos that it contains.
    **/
    deleteProject(req: operations.DeleteProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectResponse>;
    /**
     * deleteProjectAlt1 - Delete a project
     *
     * This method deletes a project and optionally also the videos that it contains.
    **/
    deleteProjectAlt1(req: operations.DeleteProjectAlt1Request, config?: AxiosRequestConfig): Promise<operations.DeleteProjectAlt1Response>;
    /**
     * editProject - Edit a project
     *
     * This method edits an existing project.
    **/
    editProject(req: operations.EditProjectRequest, config?: AxiosRequestConfig): Promise<operations.EditProjectResponse>;
    /**
     * editProjectAlt1 - Edit a project
     *
     * This method edits an existing project.
    **/
    editProjectAlt1(req: operations.EditProjectAlt1Request, config?: AxiosRequestConfig): Promise<operations.EditProjectAlt1Response>;
    /**
     * getProject - Get a specific project
     *
     * This method gets a single project that belongs to the specified user.
    **/
    getProject(req: operations.GetProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectResponse>;
    /**
     * getProjectAlt1 - Get a specific project
     *
     * This method gets a single project that belongs to the specified user.
    **/
    getProjectAlt1(req: operations.GetProjectAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetProjectAlt1Response>;
    /**
     * getProjects - Get all the projects that belong to a user
     *
     * This method gets all the projects that belong to the specified user.
    **/
    getProjects(req: operations.GetProjectsRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectsResponse>;
    /**
     * getProjectsAlt1 - Get all the projects that belong to a user
     *
     * This method gets all the projects that belong to the specified user.
    **/
    getProjectsAlt1(req: operations.GetProjectsAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetProjectsAlt1Response>;
}

import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * An endpoint for broswer retreive html documents that were cached durin the rendering process via a nonce (token)
    **/
    CacheNonceGet(req: operations.CacheNonceGetRequest, config?: AxiosRequestConfig): Promise<operations.CacheNonceGetResponse>;
    /**
     * An endpoint for Presalytics Renderers to cache html subdocuments for subsequent retrieval by the browser.  Documents Are retrieved via token expire after 1 minute.
    **/
    CachePost(req: operations.CachePostRequest, config?: AxiosRequestConfig): Promise<operations.CachePostResponse>;
    /**
     * Allows for bulk updates on collaborator metadata.  Restricted to internal admins
    **/
    CollaboratorsPost(req: operations.CollaboratorsPostRequest, config?: AxiosRequestConfig): Promise<operations.CollaboratorsPostResponse>;
    /**
     * pass rendering metadata to the client-side scripts
    **/
    GetEnvironment(config?: AxiosRequestConfig): Promise<operations.GetEnvironmentResponse>;
    /**
     * Remove a session and dependant data.
    **/
    SessionIdDelete(req: operations.SessionIdDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SessionIdDeleteResponse>;
    /**
     * Get session metadata
    **/
    SessionIdGet(req: operations.SessionIdGetRequest, config?: AxiosRequestConfig): Promise<operations.SessionIdGetResponse>;
    /**
     * Get data for all views in a session
    **/
    SessionsIdViewsGet(req: operations.SessionsIdViewsGetRequest, config?: AxiosRequestConfig): Promise<operations.SessionsIdViewsGetResponse>;
    /**
     * Create a page view object for a viewing session
    **/
    SessionsIdViewsPost(req: operations.SessionsIdViewsPostRequest, config?: AxiosRequestConfig): Promise<operations.SessionsIdViewsPostResponse>;
    /**
     * json-formatted version of this spec with the tags removed to help with codegen processes
    **/
    SpecNoTags(config?: AxiosRequestConfig): Promise<operations.SpecNoTagsResponse>;
    /**
     * Returns a list of stories for this user identifie via the access token presentated to the api
    **/
    StoryGet(req: operations.StoryGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryGetResponse>;
    /**
     * returns an html document containing session and event metrics for the story
    **/
    StoryIdAnalytics(req: operations.StoryIdAnalyticsRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdAnalyticsResponse>;
    /**
     * Gets a list users that can read or edit this story
    **/
    StoryIdCollaboratorsGet(req: operations.StoryIdCollaboratorsGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdCollaboratorsGetResponse>;
    /**
     * Edit story permissions for inactive users.  Requires admin rights.
    **/
    StoryIdCollaboratorsInactivePost(req: operations.StoryIdCollaboratorsInactivePostRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdCollaboratorsInactivePostResponse>;
    /**
     * Add a colloborator to this story
    **/
    StoryIdCollaboratorsPost(req: operations.StoryIdCollaboratorsPostRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdCollaboratorsPostResponse>;
    /**
     * Remove a collaborator from this story
    **/
    StoryIdCollaboratorsUseridDelete(req: operations.StoryIdCollaboratorsUseridDeleteRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdCollaboratorsUseridDeleteResponse>;
    /**
     * Data to help you understand the access rights of a particular collaborator on this story
    **/
    StoryIdCollaboratorsUseridGet(req: operations.StoryIdCollaboratorsUseridGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdCollaboratorsUseridGetResponse>;
    /**
     * Check whether user have certain types of permissions.  Use http status codes to understand if permission is granted - 204 = Granted, 403 = Forbidden
    **/
    StoryIdCollaboratorsUseridPermissiontypeGet(req: operations.StoryIdCollaboratorsUseridPermissiontypeGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdCollaboratorsUseridPermissiontypeGetResponse>;
    /**
     * Modify a user's access right to this story (e.g., grant edit permissions)
    **/
    StoryIdCollaboratorsUseridPut(req: operations.StoryIdCollaboratorsUseridPutRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdCollaboratorsUseridPutResponse>;
    /**
     * Remove a story and dependant data.
    **/
    StoryIdDelete(req: operations.StoryIdDeleteRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdDeleteResponse>;
    /**
     * Get a list of Events available to users of this story
    **/
    StoryIdEventsGet(req: operations.StoryIdEventsGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdEventsGetResponse>;
    /**
     * Add a message to the Story's conversation
    **/
    StoryIdEventsPost(req: operations.StoryIdEventsPostRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdEventsPostResponse>;
    /**
     * Deletes a subdcoument of this story (e.g., .pptx, .docx, .xlsx)
    **/
    StoryIdFileOoxmlautomationidDelete(req: operations.StoryIdFileOoxmlautomationidDeleteRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdFileOoxmlautomationidDeleteResponse>;
    /**
     * Redtreives updated story as open office xml file (e.g., .pptx, .docx, .xlsx)
    **/
    StoryIdFileOoxmlautomationidGet(req: operations.StoryIdFileOoxmlautomationidGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdFileOoxmlautomationidGetResponse>;
    /**
     * Upload a file to an existing story
    **/
    StoryIdFilePost(req: operations.StoryIdFilePostRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdFilePostResponse>;
    /**
     * Returns story metadata, inlcuding json object with story outline
    **/
    StoryIdGet(req: operations.StoryIdGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdGetResponse>;
    /**
     * Get a list of messages that have been send in this story
    **/
    StoryIdMessagesGet(req: operations.StoryIdMessagesGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdMessagesGetResponse>;
    /**
     * Add a message to the Story's conversation
    **/
    StoryIdMessagesPost(req: operations.StoryIdMessagesPostRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdMessagesPostResponse>;
    /**
     * Returns Story's outline
    **/
    StoryIdOutlineGet(req: operations.StoryIdOutlineGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdOutlineGetResponse>;
    /**
     * Update a story outline.
    **/
    StoryIdOutlinePost(req: operations.StoryIdOutlinePostRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdOutlinePostResponse>;
    /**
     * returns an html document containing a reveal.js epresentation of the story, if the story if set to is_public = True
    **/
    StoryIdPublic(req: operations.StoryIdPublicRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdPublicResponse>;
    /**
     * Update story metadata, including story outline
    **/
    StoryIdPut(req: operations.StoryIdPutRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdPutResponse>;
    /**
     * returns an html document containing a reveal.js epresentation of the story
    **/
    StoryIdReveal(req: operations.StoryIdRevealRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdRevealResponse>;
    /**
     * Create a new session
    **/
    StoryIdSessionPost(req: operations.StoryIdSessionPostRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdSessionPostResponse>;
    /**
     * Get a list of sessions asscoaited with this story
    **/
    StoryIdSessionsGet(req: operations.StoryIdSessionsGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdSessionsGetResponse>;
    /**
     * Returns code indicating whether story has active running background and is healthy (e.g., the latest outline is valid)
    **/
    StoryIdStatusGet(req: operations.StoryIdStatusGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdStatusGetResponse>;
    /**
     * Json Schema for validating Story Outline objects
    **/
    StoryOutlineSchema(req: operations.StoryOutlineSchemaRequest, config?: AxiosRequestConfig): Promise<operations.StoryOutlineSchemaResponse>;
    /**
     * Returns a list of possible user permission types
    **/
    StoryPermissionTypesGet(config?: AxiosRequestConfig): Promise<operations.StoryPermissionTypesGetResponse>;
    /**
     * Upload new story to presalytics api
    **/
    StoryPost(req: operations.StoryPostRequest, config?: AxiosRequestConfig): Promise<operations.StoryPostResponse>;
    /**
     * Upload new story to presalytics api via an Open Office Xml file
    **/
    StoryPostFile(req: operations.StoryPostFileRequest, config?: AxiosRequestConfig): Promise<operations.StoryPostFileResponse>;
    /**
     * Upload new story to presalytics api via an Open Office Xml file
    **/
    StoryPostFileJson(req: operations.StoryPostFileJsonRequest, config?: AxiosRequestConfig): Promise<operations.StoryPostFileJsonResponse>;
    /**
     * Remove a view and dependant data.
    **/
    ViewsIdDelete(req: operations.ViewsIdDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ViewsIdDeleteResponse>;
    /**
     * Get view meta data
    **/
    ViewsIdGet(req: operations.ViewsIdGetRequest, config?: AxiosRequestConfig): Promise<operations.ViewsIdGetResponse>;
}
export {};

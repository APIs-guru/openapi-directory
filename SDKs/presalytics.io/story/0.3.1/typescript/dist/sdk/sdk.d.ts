import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://presalytics.io/story"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * cacheNonceGet - Cache: Get Subdocument
     *
     * An endpoint for broswer retreive html documents that were cached durin the rendering process via a nonce (token)
    **/
    cacheNonceGet(req: operations.CacheNonceGetRequest, config?: AxiosRequestConfig): Promise<operations.CacheNonceGetResponse>;
    /**
     * cachePost - Cache: Store Subdocument
     *
     * An endpoint for Presalytics Renderers to cache html subdocuments for subsequent retrieval by the browser.  Documents Are retrieved via token expire after 1 minute.
    **/
    cachePost(req: operations.CachePostRequest, config?: AxiosRequestConfig): Promise<operations.CachePostResponse>;
    /**
     * collaboratorsPost - Collborators: Bulk Update (Admin Only)
     *
     * Allows for bulk updates on collaborator metadata.  Restricted to internal admins
    **/
    collaboratorsPost(req: operations.CollaboratorsPostRequest, config?: AxiosRequestConfig): Promise<operations.CollaboratorsPostResponse>;
    /**
     * getEnvironment - Environment: Get
     *
     * pass rendering metadata to the client-side scripts
    **/
    getEnvironment(config?: AxiosRequestConfig): Promise<operations.GetEnvironmentResponse>;
    /**
     * sessionIdDelete - Sessions: Delete by Id
     *
     * Remove a session and dependant data.
    **/
    sessionIdDelete(req: operations.SessionIdDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SessionIdDeleteResponse>;
    /**
     * sessionIdGet - Sessions: Get
     *
     * Get session metadata
    **/
    sessionIdGet(req: operations.SessionIdGetRequest, config?: AxiosRequestConfig): Promise<operations.SessionIdGetResponse>;
    /**
     * sessionsIdViewsGet - Views: List Session Views
     *
     * Get data for all views in a session
    **/
    sessionsIdViewsGet(req: operations.SessionsIdViewsGetRequest, config?: AxiosRequestConfig): Promise<operations.SessionsIdViewsGetResponse>;
    /**
     * sessionsIdViewsPost - Views: Create A Session View
     *
     * Create a page view object for a viewing session
    **/
    sessionsIdViewsPost(req: operations.SessionsIdViewsPostRequest, config?: AxiosRequestConfig): Promise<operations.SessionsIdViewsPostResponse>;
    /**
     * specNoTags - Specification: No tags
     *
     * json-formatted version of this spec with the tags removed to help with codegen processes
    **/
    specNoTags(config?: AxiosRequestConfig): Promise<operations.SpecNoTagsResponse>;
    /**
     * storyGet - Story: Get List of User Stories
     *
     * Returns a list of stories for this user identifie via the access token presentated to the api
    **/
    storyGet(req: operations.StoryGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryGetResponse>;
    /**
     * storyIdAnalytics - Story: View Analytics
     *
     * returns an html document containing session and event metrics for the story
    **/
    storyIdAnalytics(req: operations.StoryIdAnalyticsRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdAnalyticsResponse>;
    /**
     * storyIdCollaboratorsGet - Story Collaborators: List
     *
     * Gets a list users that can read or edit this story
    **/
    storyIdCollaboratorsGet(req: operations.StoryIdCollaboratorsGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdCollaboratorsGetResponse>;
    /**
     * storyIdCollaboratorsInactivePost - Story Collaborators: Edit Inactive User Permission
     *
     * Edit story permissions for inactive users.  Requires admin rights.
    **/
    storyIdCollaboratorsInactivePost(req: operations.StoryIdCollaboratorsInactivePostRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdCollaboratorsInactivePostResponse>;
    /**
     * storyIdCollaboratorsPost - Story Collaborators: Add New User
     *
     * Add a colloborator to this story
    **/
    storyIdCollaboratorsPost(req: operations.StoryIdCollaboratorsPostRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdCollaboratorsPostResponse>;
    /**
     * storyIdCollaboratorsUseridDelete - Story Collaborators: Remove User
     *
     * Remove a collaborator from this story
    **/
    storyIdCollaboratorsUseridDelete(req: operations.StoryIdCollaboratorsUseridDeleteRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdCollaboratorsUseridDeleteResponse>;
    /**
     * storyIdCollaboratorsUseridGet - Story Collaborators: Access Permissions
     *
     * Data to help you understand the access rights of a particular collaborator on this story
    **/
    storyIdCollaboratorsUseridGet(req: operations.StoryIdCollaboratorsUseridGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdCollaboratorsUseridGetResponse>;
    /**
     * storyIdCollaboratorsUseridPermissiontypeGet - Permissions: Story Authorization for a User
     *
     * Check whether user have certain types of permissions.  Use http status codes to understand if permission is granted - 204 = Granted, 403 = Forbidden
    **/
    storyIdCollaboratorsUseridPermissiontypeGet(req: operations.StoryIdCollaboratorsUseridPermissiontypeGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdCollaboratorsUseridPermissiontypeGetResponse>;
    /**
     * storyIdCollaboratorsUseridPut - Story Collaborators: Edit Access Rights
     *
     * Modify a user's access right to this story (e.g., grant edit permissions)
    **/
    storyIdCollaboratorsUseridPut(req: operations.StoryIdCollaboratorsUseridPutRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdCollaboratorsUseridPutResponse>;
    /**
     * storyIdDelete - Story: Delete by Id
     *
     * Remove a story and dependant data.
    **/
    storyIdDelete(req: operations.StoryIdDeleteRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdDeleteResponse>;
    /**
     * storyIdEventsGet - Events: List Events
     *
     * Get a list of Events available to users of this story
    **/
    storyIdEventsGet(req: operations.StoryIdEventsGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdEventsGetResponse>;
    /**
     * storyIdEventsPost - Events: Manage Events
     *
     * Add a message to the Story's conversation
    **/
    storyIdEventsPost(req: operations.StoryIdEventsPostRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdEventsPostResponse>;
    /**
     * storyIdFileOoxmlautomationidDelete - Story: Delete Subdocument
     *
     * Deletes a subdcoument of this story (e.g., .pptx, .docx, .xlsx)
    **/
    storyIdFileOoxmlautomationidDelete(req: operations.StoryIdFileOoxmlautomationidDeleteRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdFileOoxmlautomationidDeleteResponse>;
    /**
     * storyIdFileOoxmlautomationidGet - Story: Download Updated File
     *
     * Redtreives updated story as open office xml file (e.g., .pptx, .docx, .xlsx)
    **/
    storyIdFileOoxmlautomationidGet(req: operations.StoryIdFileOoxmlautomationidGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdFileOoxmlautomationidGetResponse>;
    /**
     * storyIdFilePost - Story: Upload a File To Existing Story
     *
     * Upload a file to an existing story
    **/
    storyIdFilePost(req: operations.StoryIdFilePostRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdFilePostResponse>;
    /**
     * storyIdGet - Story: Get by Id
     *
     * Returns story metadata, inlcuding json object with story outline
    **/
    storyIdGet(req: operations.StoryIdGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdGetResponse>;
    /**
     * storyIdMessagesGet - Conversation: List Conversation Messages
     *
     * Get a list of messages that have been send in this story
    **/
    storyIdMessagesGet(req: operations.StoryIdMessagesGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdMessagesGetResponse>;
    /**
     * storyIdMessagesPost - Conversation: Send a Message
     *
     * Add a message to the Story's conversation
    **/
    storyIdMessagesPost(req: operations.StoryIdMessagesPostRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdMessagesPostResponse>;
    /**
     * storyIdOutlineGet - Story: Get Story Outline
     *
     * Returns Story's outline
    **/
    storyIdOutlineGet(req: operations.StoryIdOutlineGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdOutlineGetResponse>;
    /**
     * storyIdOutlinePost - Story: Post Story Outline
     *
     * Update a story outline.
    **/
    storyIdOutlinePost(req: operations.StoryIdOutlinePostRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdOutlinePostResponse>;
    /**
     * storyIdPublic - Story: Public Link to Story Reveal.js Document
     *
     * returns an html document containing a reveal.js epresentation of the story, if the story if set to is_public = True
    **/
    storyIdPublic(req: operations.StoryIdPublicRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdPublicResponse>;
    /**
     * storyIdPut - Story: Modify
     *
     * Update story metadata, including story outline
    **/
    storyIdPut(req: operations.StoryIdPutRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdPutResponse>;
    /**
     * storyIdReveal - Story: Get Story at Reveal.js Document
     *
     * returns an html document containing a reveal.js epresentation of the story
    **/
    storyIdReveal(req: operations.StoryIdRevealRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdRevealResponse>;
    /**
     * storyIdSessionPost - Sessions: Create a Session
     *
     * Create a new session
    **/
    storyIdSessionPost(req: operations.StoryIdSessionPostRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdSessionPostResponse>;
    /**
     * storyIdSessionsGet - Sessions: List Story Sessions
     *
     * Get a list of sessions asscoaited with this story
    **/
    storyIdSessionsGet(req: operations.StoryIdSessionsGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdSessionsGetResponse>;
    /**
     * storyIdStatusGet - Story: Get Story Status
     *
     * Returns code indicating whether story has active running background and is healthy (e.g., the latest outline is valid)
    **/
    storyIdStatusGet(req: operations.StoryIdStatusGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdStatusGetResponse>;
    /**
     * storyOutlineSchema - Story Outline Schema
     *
     * Json Schema for validating Story Outline objects
    **/
    storyOutlineSchema(req: operations.StoryOutlineSchemaRequest, config?: AxiosRequestConfig): Promise<operations.StoryOutlineSchemaResponse>;
    /**
     * storyPermissionTypesGet - Permissions: List Permission Types
     *
     * Returns a list of possible user permission types
    **/
    storyPermissionTypesGet(config?: AxiosRequestConfig): Promise<operations.StoryPermissionTypesGetResponse>;
    /**
     * storyPost - Story: Upload
     *
     * Upload new story to presalytics api
    **/
    storyPost(req: operations.StoryPostRequest, config?: AxiosRequestConfig): Promise<operations.StoryPostResponse>;
    /**
     * storyPostFile - Story: Upload a File
     *
     * Upload new story to presalytics api via an Open Office Xml file
    **/
    storyPostFile(req: operations.StoryPostFileRequest, config?: AxiosRequestConfig): Promise<operations.StoryPostFileResponse>;
    /**
     * storyPostFileJson - Story: Upload a File (base64)
     *
     * Upload new story to presalytics api via an Open Office Xml file
    **/
    storyPostFileJson(req: operations.StoryPostFileJsonRequest, config?: AxiosRequestConfig): Promise<operations.StoryPostFileJsonResponse>;
    /**
     * viewsIdDelete - Views: Delete by Id
     *
     * Remove a view and dependant data.
    **/
    viewsIdDelete(req: operations.ViewsIdDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ViewsIdDeleteResponse>;
    /**
     * viewsIdGet - Views: Get View
     *
     * Get view meta data
    **/
    viewsIdGet(req: operations.ViewsIdGetRequest, config?: AxiosRequestConfig): Promise<operations.ViewsIdGetResponse>;
}
export {};

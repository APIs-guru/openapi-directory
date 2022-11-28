import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * changeEmail - Change email address
     *
     * Change the users' current email address.  A verification link will be emailed to the new email address to verify that the email account belongs to the user.  The email change will not take effect until the user clicks the link in the verification email.
     *
    **/
    changeEmail(req: operations.ChangeEmailRequest, config?: AxiosRequestConfig): Promise<operations.ChangeEmailResponse>;
    /**
     * createAlert - Create an email alert
    **/
    createAlert(req: operations.CreateAlertRequest, config?: AxiosRequestConfig): Promise<operations.CreateAlertResponse>;
    /**
     * deleteAlert - Delete an email alert
    **/
    deleteAlert(req: operations.DeleteAlertRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAlertResponse>;
    /**
     * getAlerts - List current users' email alerts
    **/
    getAlerts(config?: AxiosRequestConfig): Promise<operations.GetAlertsResponse>;
    /**
     * getCurrentUser - Retrieve current user
    **/
    getCurrentUser(config?: AxiosRequestConfig): Promise<operations.GetCurrentUserResponse>;
    /**
     * getCurrentUserGroups - List current users' groups
    **/
    getCurrentUserGroups(req: operations.GetCurrentUserGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetCurrentUserGroupsResponse>;
    /**
     * getCurrentUserPosts - List current users' posts
     *
     * NOTE: In order to make it easier to see all a users&#39; posts, the current users&#39; location preferences are not applied when listing or searching posts from a single user.  If location based filtering of the posts is needed, the latitude, longitude and radius parameters may be used.
     *
    **/
    getCurrentUserPosts(req: operations.GetCurrentUserPostsRequest, config?: AxiosRequestConfig): Promise<operations.GetCurrentUserPostsResponse>;
    /**
     * getPostLocations - List current users' post locations
     *
     * Only the most recent 3 post locations are returned.
    **/
    getPostLocations(config?: AxiosRequestConfig): Promise<operations.GetPostLocationsResponse>;
    /**
     * getProfileImageFile - Retrieve a users' profile image
     *
     * This is designed to be used as the src attribute of an HTML &lt;img&gt; tag to show the profile image of the given user.
     *
    **/
    getProfileImageFile(req: operations.GetProfileImageFileRequest, config?: AxiosRequestConfig): Promise<operations.GetProfileImageFileResponse>;
    /**
     * getProfileImages - List current users' profile images
    **/
    getProfileImages(config?: AxiosRequestConfig): Promise<operations.GetProfileImagesResponse>;
    /**
     * getUser - Retrieve a user
    **/
    getUser(req: operations.GetUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * getUserAndRelatedData - Retrieve user display info
     *
     * Retrieve a user and information related to the user (eg. recent posts) that is useful for displaying a more detailed view of the user.
     *
    **/
    getUserAndRelatedData(req: operations.GetUserAndRelatedDataRequest, config?: AxiosRequestConfig): Promise<operations.GetUserAndRelatedDataResponse>;
    /**
     * getUserGroupNotices - List current users' group notices
    **/
    getUserGroupNotices(req: operations.GetUserGroupNoticesRequest, config?: AxiosRequestConfig): Promise<operations.GetUserGroupNoticesResponse>;
    /**
     * getUserPosts - List posts by a user
     *
     * NOTE: In order to make it easier to see all a users&#39; posts, the current users&#39; location preferences are not applied when listing or searching posts from a single user.  If location based filtering of the posts is needed, the latitude, longitude and radius parameters may be used.
     *
    **/
    getUserPosts(req: operations.GetUserPostsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserPostsResponse>;
    /**
     * reportUser - Report a user
    **/
    reportUser(req: operations.ReportUserRequest, config?: AxiosRequestConfig): Promise<operations.ReportUserResponse>;
    /**
     * resendAccountVerificationEmail - Resend account verification email
    **/
    resendAccountVerificationEmail(config?: AxiosRequestConfig): Promise<operations.ResendAccountVerificationEmailResponse>;
    /**
     * savePostLocation - Save a post location for the current user
     *
     * Creates or updates a post location for the current user. Updates will happen when the name of the post location matches a previous post location.
     *
    **/
    savePostLocation(req: operations.SavePostLocationRequest, config?: AxiosRequestConfig): Promise<operations.SavePostLocationResponse>;
    /**
     * searchCurrentUserPosts - Search current users' posts
     *
     * Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.
     *
    **/
    searchCurrentUserPosts(req: operations.SearchCurrentUserPostsRequest, config?: AxiosRequestConfig): Promise<operations.SearchCurrentUserPostsResponse>;
    /**
     * searchUserPosts - Search posts by a user
     *
     * Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.
     *
    **/
    searchUserPosts(req: operations.SearchUserPostsRequest, config?: AxiosRequestConfig): Promise<operations.SearchUserPostsResponse>;
    /**
     * sendPasswordResetEmail - Send password reset email
    **/
    sendPasswordResetEmail(config?: AxiosRequestConfig): Promise<operations.SendPasswordResetEmailResponse>;
    /**
     * setEmailNotBouncing - Set users' email address as not bouncing
     *
     * Resets an email address bouncing state to false.  The users' email address may be automatically marked as bouncing again if further emails sent to it are bounced.
     *
    **/
    setEmailNotBouncing(config?: AxiosRequestConfig): Promise<operations.SetEmailNotBouncingResponse>;
    /**
     * setProfileImage - Set a profile image
     *
     * Profile images must be at least 90 pixels wide and tall.  And if the image used is not square it will be automatically cropped to be square.
     *
    **/
    setProfileImage(req: operations.SetProfileImageRequest, config?: AxiosRequestConfig): Promise<operations.SetProfileImageResponse>;
    /**
     * submitUserFeedback - Submit feedback on a user
     *
     * Allows the current user to submit feedback on a user.  The current user can only leave feedback on a user if the feedback allowed property on that user is set to true (see User definition for more details). And the system will only store the most recent feedback submission that the current user has submitted on a user. If the current user submits feedback multiple times, the newest feedback will overwrite the older feedback. This allows users to update their feedback as long as the feedback allowed property allows it.
     *
    **/
    submitUserFeedback(req: operations.SubmitUserFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.SubmitUserFeedbackResponse>;
    /**
     * updateCurrentUser - Update current user
     *
     * Update the current user.  All fields are optional so requests can update just one or multiple user properties at a time.
     *
    **/
    updateCurrentUser(req: operations.UpdateCurrentUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCurrentUserResponse>;
    /**
     * updateLocation - Update location
     *
     * Update the current users' location. The location is used to determine which posts are shown to the user (both public posts and group posts).
     *
    **/
    updateLocation(req: operations.UpdateLocationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLocationResponse>;
}

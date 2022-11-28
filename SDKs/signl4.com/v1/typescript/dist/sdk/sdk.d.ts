import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://connect.signl4.com/api"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * deleteCategoriesTeamIdCategoryId - Delete an existing category
     *
     * Sample Request:
     *
     *     DELETE /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e
    **/
    deleteCategoriesTeamIdCategoryId(req: operations.DeleteCategoriesTeamIdCategoryIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCategoriesTeamIdCategoryIdResponse>;
    /**
     * deleteScriptsInstancesInstanceId - Deletes a script instance.
     *
     * Gets the script instance specified by the passed instance id.
    **/
    deleteScriptsInstancesInstanceId(req: operations.DeleteScriptsInstancesInstanceIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteScriptsInstancesInstanceIdResponse>;
    /**
     * deleteTeamsTeamIdMembershipsUserId - Removes a user or invitation from a team, and may delete the user if he is not in any team.
    **/
    deleteTeamsTeamIdMembershipsUserId(req: operations.DeleteTeamsTeamIdMembershipsUserIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTeamsTeamIdMembershipsUserIdResponse>;
    /**
     * deleteTeamsTeamIdSchedulesDutyId - Delete a specific duty.
    **/
    deleteTeamsTeamIdSchedulesDutyId(req: operations.DeleteTeamsTeamIdSchedulesDutyIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTeamsTeamIdSchedulesDutyIdResponse>;
    /**
     * deleteWebhooksWebhookId - Delete Webhook by Id
     *
     * Deletes the specified webhook so that it will no longer be notified.
    **/
    deleteWebhooksWebhookId(req: operations.DeleteWebhooksWebhookIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebhooksWebhookIdResponse>;
    /**
     * getAlertsAlertId - Get Alert
     *
     * Gets an alert by id.
    **/
    getAlertsAlertId(req: operations.GetAlertsAlertIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAlertsAlertIdResponse>;
    /**
     * getAlertsAlertIdAnnotations - Get annotations of an alert
     *
     * Get annotations of an alert by id.
    **/
    getAlertsAlertIdAnnotations(req: operations.GetAlertsAlertIdAnnotationsRequest, config?: AxiosRequestConfig): Promise<operations.GetAlertsAlertIdAnnotationsResponse>;
    /**
     * getAlertsAlertIdAttachments - Get attachments of an alert
     *
     * Get attachments of an alert by id.
    **/
    getAlertsAlertIdAttachments(req: operations.GetAlertsAlertIdAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetAlertsAlertIdAttachmentsResponse>;
    /**
     * getAlertsAlertIdAttachmentsAttachmentId - Gets a specified attachment of a specified alert.
    **/
    getAlertsAlertIdAttachmentsAttachmentId(req: operations.GetAlertsAlertIdAttachmentsAttachmentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAlertsAlertIdAttachmentsAttachmentIdResponse>;
    /**
     * getAlertsAlertIdNotifications - Get alert notifications
     *
     * Get notifications of all users by alert id.
    **/
    getAlertsAlertIdNotifications(req: operations.GetAlertsAlertIdNotificationsRequest, config?: AxiosRequestConfig): Promise<operations.GetAlertsAlertIdNotificationsResponse>;
    /**
     * getAlertsAlertIdOverview - Get an overview alert.
     *
     * Get overview alert by id.
    **/
    getAlertsAlertIdOverview(req: operations.GetAlertsAlertIdOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetAlertsAlertIdOverviewResponse>;
    /**
     * getAlertsReport - Get Alert Report
     *
     * Returns information about the occurred alert volume in different time periods as well as information about the
     * response behaviour (amount of confirmed and unhandled alerts) of your team members.
    **/
    getAlertsReport(req: operations.GetAlertsReportRequest, config?: AxiosRequestConfig): Promise<operations.GetAlertsReportResponse>;
    /**
     * getCategoriesImages - Gets the names of all alert category images.
     * You can get the image by going to account.signl4.com/images/alerts/categoryImageName.svg
    **/
    getCategoriesImages(config?: AxiosRequestConfig): Promise<operations.GetCategoriesImagesResponse>;
    /**
     * getCategoriesTeamId - Get all categories
     *
     * Sample Request:
     *
     *     GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7
    **/
    getCategoriesTeamId(req: operations.GetCategoriesTeamIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesTeamIdResponse>;
    /**
     * getCategoriesTeamIdCategoryId - Get a specific category
     *
     * Sample Request:
     *
     *     GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e
    **/
    getCategoriesTeamIdCategoryId(req: operations.GetCategoriesTeamIdCategoryIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesTeamIdCategoryIdResponse>;
    /**
     * getCategoriesTeamIdCategoryIdMetrics - Get metrics for a specific category
     *
     * Sample Request:
     *
     *     GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e/metrics
    **/
    getCategoriesTeamIdCategoryIdMetrics(req: operations.GetCategoriesTeamIdCategoryIdMetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesTeamIdCategoryIdMetricsResponse>;
    /**
     * getCategoriesTeamIdCategoryIdSubscriptions - Get category subscriptions
     *
     * Sample Request:
     *
     *     GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e/subscriptions
     *     {
     *     }
    **/
    getCategoriesTeamIdCategoryIdSubscriptions(req: operations.GetCategoriesTeamIdCategoryIdSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesTeamIdCategoryIdSubscriptionsResponse>;
    /**
     * getCategoriesTeamIdMetrics - Get metrics for all categories
     *
     * Sample Request:
     *
     *     GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/metrics
    **/
    getCategoriesTeamIdMetrics(req: operations.GetCategoriesTeamIdMetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesTeamIdMetricsResponse>;
    /**
     * getEventsEventIdOverview - Get overview event
     *
     * Get overview event by id.
    **/
    getEventsEventIdOverview(req: operations.GetEventsEventIdOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsEventIdOverviewResponse>;
    /**
     * getEventsEventIdParameters - Get event parameters
     *
     * Get parameters of an event by id.
    **/
    getEventsEventIdParameters(req: operations.GetEventsEventIdParametersRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsEventIdParametersResponse>;
    /**
     * getPrepaidBalance - Get your subscription's current prepaid balance.
    **/
    getPrepaidBalance(config?: AxiosRequestConfig): Promise<operations.GetPrepaidBalanceResponse>;
    /**
     * getPrepaidSettings - Get your subscription's current prepaid settings.
    **/
    getPrepaidSettings(config?: AxiosRequestConfig): Promise<operations.GetPrepaidSettingsResponse>;
    /**
     * getPrepaidTransactions - Get your subscription's prepaid transactions.
    **/
    getPrepaidTransactions(config?: AxiosRequestConfig): Promise<operations.GetPrepaidTransactionsResponse>;
    /**
     * getScriptsInstances - Returns all script instances of the SIGNL4 team
     *
     * Returns all script instances in the subscription.
    **/
    getScriptsInstances(req: operations.GetScriptsInstancesRequest, config?: AxiosRequestConfig): Promise<operations.GetScriptsInstancesResponse>;
    /**
     * getScriptsInstancesInstanceId - Returns all information about a given script instance which includes its runtime status.
     *
     * Gets the script instance specified by the passed instance id.
    **/
    getScriptsInstancesInstanceId(req: operations.GetScriptsInstancesInstanceIdRequest, config?: AxiosRequestConfig): Promise<operations.GetScriptsInstancesInstanceIdResponse>;
    /**
     * getScriptsInventory - Returns all available inventory scripts which can be added to a SIGNL4 subscription.
     *
     * Returns all available inventory scripts which can be added to a SIGNL4 subscription.
    **/
    getScriptsInventory(config?: AxiosRequestConfig): Promise<operations.GetScriptsInventoryResponse>;
    /**
     * getScriptsInventoryParsed - Returns all inventory scripts.
    **/
    getScriptsInventoryParsed(req: operations.GetScriptsInventoryParsedRequest, config?: AxiosRequestConfig): Promise<operations.GetScriptsInventoryParsedResponse>;
    /**
     * getScriptsInventoryParsedScriptId - Returns an inventory script by its id.
     *
     * Gets the script specified by the passed script id.
    **/
    getScriptsInventoryParsedScriptId(req: operations.GetScriptsInventoryParsedScriptIdRequest, config?: AxiosRequestConfig): Promise<operations.GetScriptsInventoryParsedScriptIdResponse>;
    /**
     * getSubscriptions - Get infos of all available/managed subscriptions.
    **/
    getSubscriptions(config?: AxiosRequestConfig): Promise<operations.GetSubscriptionsResponse>;
    /**
     * getSubscriptionsSubscriptionId - Get infos of a specific subscription.
    **/
    getSubscriptionsSubscriptionId(req: operations.GetSubscriptionsSubscriptionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSubscriptionsSubscriptionIdResponse>;
    /**
     * getSubscriptionsSubscriptionIdChannelPrices - Returns the subscription's channel price information.
    **/
    getSubscriptionsSubscriptionIdChannelPrices(req: operations.GetSubscriptionsSubscriptionIdChannelPricesRequest, config?: AxiosRequestConfig): Promise<operations.GetSubscriptionsSubscriptionIdChannelPricesResponse>;
    /**
     * getSubscriptionsSubscriptionIdFeatures - Returns the features of a specified subscription.
    **/
    getSubscriptionsSubscriptionIdFeatures(req: operations.GetSubscriptionsSubscriptionIdFeaturesRequest, config?: AxiosRequestConfig): Promise<operations.GetSubscriptionsSubscriptionIdFeaturesResponse>;
    /**
     * getSubscriptionsSubscriptionIdPrepaidBalance - Get a subscription's current prepaid balance.
    **/
    getSubscriptionsSubscriptionIdPrepaidBalance(req: operations.GetSubscriptionsSubscriptionIdPrepaidBalanceRequest, config?: AxiosRequestConfig): Promise<operations.GetSubscriptionsSubscriptionIdPrepaidBalanceResponse>;
    /**
     * getSubscriptionsSubscriptionIdPrepaidSettings - Get a subscription's current prepaid settings.
    **/
    getSubscriptionsSubscriptionIdPrepaidSettings(req: operations.GetSubscriptionsSubscriptionIdPrepaidSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetSubscriptionsSubscriptionIdPrepaidSettingsResponse>;
    /**
     * getSubscriptionsSubscriptionIdPrepaidTransactions - Get a subscription's prepaid transactions.
    **/
    getSubscriptionsSubscriptionIdPrepaidTransactions(req: operations.GetSubscriptionsSubscriptionIdPrepaidTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetSubscriptionsSubscriptionIdPrepaidTransactionsResponse>;
    /**
     * getSubscriptionsSubscriptionIdTeams - Get infos for all teams of the subscription.
    **/
    getSubscriptionsSubscriptionIdTeams(req: operations.GetSubscriptionsSubscriptionIdTeamsRequest, config?: AxiosRequestConfig): Promise<operations.GetSubscriptionsSubscriptionIdTeamsResponse>;
    /**
     * getSubscriptionsSubscriptionIdUserLicenses - Gets a subscription's user licenses.
    **/
    getSubscriptionsSubscriptionIdUserLicenses(req: operations.GetSubscriptionsSubscriptionIdUserLicensesRequest, config?: AxiosRequestConfig): Promise<operations.GetSubscriptionsSubscriptionIdUserLicensesResponse>;
    /**
     * getTeams - Get infos of all teams.
    **/
    getTeams(config?: AxiosRequestConfig): Promise<operations.GetTeamsResponse>;
    /**
     * getTeamsTeamId - Gets infos of a specific team.
    **/
    getTeamsTeamId(req: operations.GetTeamsTeamIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsTeamIdResponse>;
    /**
     * getTeamsTeamIdAlertReports - Get information about downloadable alert reports
    **/
    getTeamsTeamIdAlertReports(req: operations.GetTeamsTeamIdAlertReportsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsTeamIdAlertReportsResponse>;
    /**
     * getTeamsTeamIdAlertReportsFileName - Returns Alert Report
    **/
    getTeamsTeamIdAlertReportsFileName(req: operations.GetTeamsTeamIdAlertReportsFileNameRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsTeamIdAlertReportsFileNameResponse>;
    /**
     * getTeamsTeamIdAlertSettings - Gets alert settings of a specific team.
    **/
    getTeamsTeamIdAlertSettings(req: operations.GetTeamsTeamIdAlertSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsTeamIdAlertSettingsResponse>;
    /**
     * getTeamsTeamIdDutyReports - Get Information about downloadable reports
    **/
    getTeamsTeamIdDutyReports(req: operations.GetTeamsTeamIdDutyReportsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsTeamIdDutyReportsResponse>;
    /**
     * getTeamsTeamIdDutyReportsFileName - Download duty report with a specific fileName
    **/
    getTeamsTeamIdDutyReportsFileName(req: operations.GetTeamsTeamIdDutyReportsFileNameRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsTeamIdDutyReportsFileNameResponse>;
    /**
     * getTeamsTeamIdDutysummary - Get duty assistant info for a team
    **/
    getTeamsTeamIdDutysummary(req: operations.GetTeamsTeamIdDutysummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsTeamIdDutysummaryResponse>;
    /**
     * getTeamsTeamIdEventSources - Gets event sources of a specific team.
    **/
    getTeamsTeamIdEventSources(req: operations.GetTeamsTeamIdEventSourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsTeamIdEventSourcesResponse>;
    /**
     * getTeamsTeamIdMemberships - Get all invites of a team.
    **/
    getTeamsTeamIdMemberships(req: operations.GetTeamsTeamIdMembershipsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsTeamIdMembershipsResponse>;
    /**
     * getTeamsTeamIdSchedules - Returns information about all duties that belong to the team.
    **/
    getTeamsTeamIdSchedules(req: operations.GetTeamsTeamIdSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsTeamIdSchedulesResponse>;
    /**
     * getTeamsTeamIdSchedulesScheduleId - Returns information of the duty schedule with the specified Id.
    **/
    getTeamsTeamIdSchedulesScheduleId(req: operations.GetTeamsTeamIdSchedulesScheduleIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsTeamIdSchedulesScheduleIdResponse>;
    /**
     * getTeamsTeamIdSetupProgress - Gets setup progress of a specific team.
    **/
    getTeamsTeamIdSetupProgress(req: operations.GetTeamsTeamIdSetupProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsTeamIdSetupProgressResponse>;
    /**
     * getUsers - Get all Users
     *
     * Returns a list of user objects with details such as their email address and duty information. Only users who
     * are part of your team will be returned.
    **/
    getUsers(config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
    /**
     * getUsersUserId - Get User by Id
     *
     * Returns a user object with details such as his email address and duty information.
    **/
    getUsersUserId(req: operations.GetUsersUserIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdResponse>;
    /**
     * getUsersUserIdDutyStatus - Get duty status by user Id
     *
     * Returns a object with duty information.
    **/
    getUsersUserIdDutyStatus(req: operations.GetUsersUserIdDutyStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdDutyStatusResponse>;
    getUsersUserIdImage(req: operations.GetUsersUserIdImageRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdImageResponse>;
    /**
     * getUsersUserIdSetupProgress - Gets setup progress of a specific user.
    **/
    getUsersUserIdSetupProgress(req: operations.GetUsersUserIdSetupProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdSetupProgressResponse>;
    /**
     * getWebhooks - Get Webhooks
     *
     * Returns a collection of defined outbound webhooks in the system.
    **/
    getWebhooks(req: operations.GetWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhooksResponse>;
    /**
     * getWebhookById - Get Webhook by Id
     *
     * Returns information of the webhook specified by the passed id.
    **/
    getWebhookById(req: operations.GetWebhookByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhookByIdResponse>;
    /**
     * postAlerts - Trigger Alert
     *
     * Triggers a new alert for your team. All team members on duty will receive alert notifications.
    **/
    postAlerts(req: operations.PostAlertsRequest, config?: AxiosRequestConfig): Promise<operations.PostAlertsResponse>;
    /**
     * postAlertsAcknowledgeAll - Confirms all visible alerts
     *
     * This method confirms all unhandled alerts your team currently has by a specific user.
    **/
    postAlertsAcknowledgeAll(req: operations.PostAlertsAcknowledgeAllRequest, config?: AxiosRequestConfig): Promise<operations.PostAlertsAcknowledgeAllResponse>;
    /**
     * postAlertsAcknowledgeMultiple - Acknowlegde multiple alerts
     *
     * This method confirms all alerts provided.
    **/
    postAlertsAcknowledgeMultiple(req: operations.PostAlertsAcknowledgeMultipleRequest, config?: AxiosRequestConfig): Promise<operations.PostAlertsAcknowledgeMultipleResponse>;
    /**
     * postAlertsAlertIdAcknowledge - Acknowledge an alert
    **/
    postAlertsAlertIdAcknowledge(req: operations.PostAlertsAlertIdAcknowledgeRequest, config?: AxiosRequestConfig): Promise<operations.PostAlertsAlertIdAcknowledgeResponse>;
    /**
     * postAlertsAlertIdAnnotate - Annotate Alert
     *
     * Annotates an alert by given Annotation Info.
    **/
    postAlertsAlertIdAnnotate(req: operations.PostAlertsAlertIdAnnotateRequest, config?: AxiosRequestConfig): Promise<operations.PostAlertsAlertIdAnnotateResponse>;
    /**
     * postAlertsAlertIdClose - Close an alert
    **/
    postAlertsAlertIdClose(req: operations.PostAlertsAlertIdCloseRequest, config?: AxiosRequestConfig): Promise<operations.PostAlertsAlertIdCloseResponse>;
    /**
     * postAlertsAlertIdUndoAcknowledge - Undo the acknowledgement of an alert.
     *
     * This method tries to undo an alert acknowledgement.
    **/
    postAlertsAlertIdUndoAcknowledge(req: operations.PostAlertsAlertIdUndoAcknowledgeRequest, config?: AxiosRequestConfig): Promise<operations.PostAlertsAlertIdUndoAcknowledgeResponse>;
    /**
     * postAlertsAlertIdUndoClose - Undo the closure of an alert.
     *
     * This method tries to undo an alert close.
    **/
    postAlertsAlertIdUndoClose(req: operations.PostAlertsAlertIdUndoCloseRequest, config?: AxiosRequestConfig): Promise<operations.PostAlertsAlertIdUndoCloseResponse>;
    /**
     * postAlertsCloseAll - Close all acknowledged alerts.
     *
     * This method closes all acknowledged alerts your team currently has.
    **/
    postAlertsCloseAll(req: operations.PostAlertsCloseAllRequest, config?: AxiosRequestConfig): Promise<operations.PostAlertsCloseAllResponse>;
    /**
     * postAlertsCloseMultiple - Close multiple alerts
     *
     * This method closes all alerts provided.
    **/
    postAlertsCloseMultiple(req: operations.PostAlertsCloseMultipleRequest, config?: AxiosRequestConfig): Promise<operations.PostAlertsCloseMultipleResponse>;
    /**
     * postAlertsPaged - Gets alerts paged
    **/
    postAlertsPaged(req: operations.PostAlertsPagedRequest, config?: AxiosRequestConfig): Promise<operations.PostAlertsPagedResponse>;
    /**
     * postAlertsUndoAcknowledgeMultiple - Queue undo of multiple acknowledgments.
     *
     * This method tries to undo the acknowledgement of multiple alerts via a queue. The operation is handled in the background.
    **/
    postAlertsUndoAcknowledgeMultiple(req: operations.PostAlertsUndoAcknowledgeMultipleRequest, config?: AxiosRequestConfig): Promise<operations.PostAlertsUndoAcknowledgeMultipleResponse>;
    /**
     * postAlertsUndoCloseMultiple - Withdraw closure of multiple alerts
     *
     * This method tries to undo multiple alert closes. The operation is handled in the background.
    **/
    postAlertsUndoCloseMultiple(req: operations.PostAlertsUndoCloseMultipleRequest, config?: AxiosRequestConfig): Promise<operations.PostAlertsUndoCloseMultipleResponse>;
    /**
     * postCategoriesTeamId - Create a new category
     *
     * Sample Request:
     *
     *     POST /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7
     *     {
     *         "name": "Water",
     *         "imageName": "water.svg",
     *         "color": "#0000cc",
     *         "keywordMatching": "Any",
     *         "keywords": [
     *             {
     *                 "value": "H2O"
     *             },
     *             {
     *                 "value": "Water"
     *             }
     *         ]
     *     }
    **/
    postCategoriesTeamId(req: operations.PostCategoriesTeamIdRequest, config?: AxiosRequestConfig): Promise<operations.PostCategoriesTeamIdResponse>;
    /**
     * postCategoriesTeamIdCategoryIdSubscriptions - Set category subscriptions
     *
     * Sample Request:
     *
     *     POST /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e/subscriptions
     *     {
     *     }
    **/
    postCategoriesTeamIdCategoryIdSubscriptions(req: operations.PostCategoriesTeamIdCategoryIdSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.PostCategoriesTeamIdCategoryIdSubscriptionsResponse>;
    /**
     * postEventsPaged - Get overview event paged.
     *
     * Get overview event paged. If there are more results, you also get a continuation token which you can add to the event filter.
    **/
    postEventsPaged(req: operations.PostEventsPagedRequest, config?: AxiosRequestConfig): Promise<operations.PostEventsPagedResponse>;
    /**
     * postScriptsInstances - Creates a new script instance in the in the SIGNL4 team.
     *
     * Creates a new script instance of the script specified in the request body.
    **/
    postScriptsInstances(req: operations.PostScriptsInstancesRequest, config?: AxiosRequestConfig): Promise<operations.PostScriptsInstancesResponse>;
    /**
     * postScriptsInstancesInstanceIdDisable - Disables a given script instance.
    **/
    postScriptsInstancesInstanceIdDisable(req: operations.PostScriptsInstancesInstanceIdDisableRequest, config?: AxiosRequestConfig): Promise<operations.PostScriptsInstancesInstanceIdDisableResponse>;
    /**
     * postScriptsInstancesInstanceIdEnable - Enables a script instance.
    **/
    postScriptsInstancesInstanceIdEnable(req: operations.PostScriptsInstancesInstanceIdEnableRequest, config?: AxiosRequestConfig): Promise<operations.PostScriptsInstancesInstanceIdEnableResponse>;
    /**
     * postTeamsTeamIdAlertSettings - Sets alert settings of a specific team.
    **/
    postTeamsTeamIdAlertSettings(req: operations.PostTeamsTeamIdAlertSettingsRequest, config?: AxiosRequestConfig): Promise<operations.PostTeamsTeamIdAlertSettingsResponse>;
    /**
     * postTeamsTeamIdMemberships - Invite users to a team
    **/
    postTeamsTeamIdMemberships(req: operations.PostTeamsTeamIdMembershipsRequest, config?: AxiosRequestConfig): Promise<operations.PostTeamsTeamIdMembershipsResponse>;
    /**
     * postTeamsTeamIdMembershipsResendInviteMail - Sends invite email again if an invite exists
    **/
    postTeamsTeamIdMembershipsResendInviteMail(req: operations.PostTeamsTeamIdMembershipsResendInviteMailRequest, config?: AxiosRequestConfig): Promise<operations.PostTeamsTeamIdMembershipsResendInviteMailResponse>;
    /**
     * postTeamsTeamIdSchedules - Create/Update given duty schedule.
    **/
    postTeamsTeamIdSchedules(req: operations.PostTeamsTeamIdSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.PostTeamsTeamIdSchedulesResponse>;
    /**
     * postTeamsTeamIdSchedulesDeleteRange - Delete duty schedules in range
    **/
    postTeamsTeamIdSchedulesDeleteRange(req: operations.PostTeamsTeamIdSchedulesDeleteRangeRequest, config?: AxiosRequestConfig): Promise<operations.PostTeamsTeamIdSchedulesDeleteRangeResponse>;
    /**
     * postTeamsTeamIdSchedulesMultiple - Save multiple schedules. It is possible to override existing schedules if you wish
    **/
    postTeamsTeamIdSchedulesMultiple(req: operations.PostTeamsTeamIdSchedulesMultipleRequest, config?: AxiosRequestConfig): Promise<operations.PostTeamsTeamIdSchedulesMultipleResponse>;
    /**
     * postUsersUserIdCheckPermissions - Checks if a user has the provided permission.
    **/
    postUsersUserIdCheckPermissions(req: operations.PostUsersUserIdCheckPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersUserIdCheckPermissionsResponse>;
    /**
     * postUsersUserIdImage - Uploaded a profile image for a specified user.
    **/
    postUsersUserIdImage(req: operations.PostUsersUserIdImageRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersUserIdImageResponse>;
    /**
     * postUsersUserIdPunchIn - Punch User in
     *
     * The specified user will be punched in to duty.
    **/
    postUsersUserIdPunchIn(req: operations.PostUsersUserIdPunchInRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersUserIdPunchInResponse>;
    /**
     * postUsersUserIdPunchInAsManager - Punch User in as Manager
     *
     * The specified user will be punched in to duty as a manager.
    **/
    postUsersUserIdPunchInAsManager(req: operations.PostUsersUserIdPunchInAsManagerRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersUserIdPunchInAsManagerResponse>;
    /**
     * postUsersUserIdPunchOut - Punch User out
     *
     * The specified user will be punched out from duty.
    **/
    postUsersUserIdPunchOut(req: operations.PostUsersUserIdPunchOutRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersUserIdPunchOutResponse>;
    /**
     * postWebhooks - Create Webhook
     *
     * Creates a new outbound webhook that will be notified when certain events occur.
    **/
    postWebhooks(req: operations.PostWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.PostWebhooksResponse>;
    /**
     * postWebhooksWebhookIdDisable - Ability to enable a webHook.
    **/
    postWebhooksWebhookIdDisable(req: operations.PostWebhooksWebhookIdDisableRequest, config?: AxiosRequestConfig): Promise<operations.PostWebhooksWebhookIdDisableResponse>;
    /**
     * postWebhooksWebhookIdEnable - Ability to disable a webHook.
    **/
    postWebhooksWebhookIdEnable(req: operations.PostWebhooksWebhookIdEnableRequest, config?: AxiosRequestConfig): Promise<operations.PostWebhooksWebhookIdEnableResponse>;
    /**
     * putCategoriesTeamIdCategoryId - Update an existing category
     *
     * Sample Request:
     *
     *     PUT /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e
     *     {
     *         "name": "Water-Updated",
     *         "imageName": "water.svg",
     *         "color": "#0000cc",
     *         "keywordMatching": "All",
     *         "keywords": [
     *             {
     *                 "value": "H2O"
     *             },
     *             {
     *                 "value": "Water"
     *             },
     *             {
     *                 "value": "Wet"
     *             }
     *         ]
     *     }
    **/
    putCategoriesTeamIdCategoryId(req: operations.PutCategoriesTeamIdCategoryIdRequest, config?: AxiosRequestConfig): Promise<operations.PutCategoriesTeamIdCategoryIdResponse>;
    /**
     * putPrepaidSettings - Update your subscription's current prepaid settings.
    **/
    putPrepaidSettings(req: operations.PutPrepaidSettingsRequest, config?: AxiosRequestConfig): Promise<operations.PutPrepaidSettingsResponse>;
    /**
     * putScriptsInstancesInstanceId - Updates a given script instance, typically used for updating the configuration of a script.
     *
     * Updates the specified script instance.
    **/
    putScriptsInstancesInstanceId(req: operations.PutScriptsInstancesInstanceIdRequest, config?: AxiosRequestConfig): Promise<operations.PutScriptsInstancesInstanceIdResponse>;
    /**
     * putScriptsInstancesInstanceIdData - Updates custom data of a given script instance which includes its display name.
     *
     * Updates the specified script instance.
    **/
    putScriptsInstancesInstanceIdData(req: operations.PutScriptsInstancesInstanceIdDataRequest, config?: AxiosRequestConfig): Promise<operations.PutScriptsInstancesInstanceIdDataResponse>;
    /**
     * putSubscriptionsSubscriptionIdPrepaidSettings - Update a subscription's current prepaid settings.
    **/
    putSubscriptionsSubscriptionIdPrepaidSettings(req: operations.PutSubscriptionsSubscriptionIdPrepaidSettingsRequest, config?: AxiosRequestConfig): Promise<operations.PutSubscriptionsSubscriptionIdPrepaidSettingsResponse>;
    /**
     * putSubscriptionsSubscriptionIdProfile - Updates a subscriptions profile.
    **/
    putSubscriptionsSubscriptionIdProfile(req: operations.PutSubscriptionsSubscriptionIdProfileRequest, config?: AxiosRequestConfig): Promise<operations.PutSubscriptionsSubscriptionIdProfileResponse>;
    /**
     * putTeamsTeamIdMembershipsUserId - Update user's team membership.
     *
     * Updates the user's team membership. You can move the user to another team within the subscription
     * and/or change the user's role.
    **/
    putTeamsTeamIdMembershipsUserId(req: operations.PutTeamsTeamIdMembershipsUserIdRequest, config?: AxiosRequestConfig): Promise<operations.PutTeamsTeamIdMembershipsUserIdResponse>;
    /**
     * putTeamsTeamIdProfile - Updates team profile of a team
    **/
    putTeamsTeamIdProfile(req: operations.PutTeamsTeamIdProfileRequest, config?: AxiosRequestConfig): Promise<operations.PutTeamsTeamIdProfileResponse>;
    /**
     * putUsersUserIdChangePassword - Updates the password of a user
    **/
    putUsersUserIdChangePassword(req: operations.PutUsersUserIdChangePasswordRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersUserIdChangePasswordResponse>;
    /**
     * putUsersUserIdProfile - Updates user profile of an user
    **/
    putUsersUserIdProfile(req: operations.PutUsersUserIdProfileRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersUserIdProfileResponse>;
    /**
     * putWebhooksWebhookId - Update Webhook by Id
     *
     * Updates the specified webhook.
    **/
    putWebhooksWebhookId(req: operations.PutWebhooksWebhookIdRequest, config?: AxiosRequestConfig): Promise<operations.PutWebhooksWebhookIdResponse>;
}
export {};

# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.DeleteCategoriesTeamIDCategoryIDRequest{
        PathParams: operations.DeleteCategoriesTeamIDCategoryIDPathParams{
            CategoryID: "totam",
            TeamID: "error",
        },
    }
    
    res, err := s.Sdk.DeleteCategoriesTeamIDCategoryID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `DeleteCategoriesTeamIDCategoryID` - Delete an existing category
* `DeleteScriptsInstancesInstanceID` - Deletes a script instance.
* `DeleteTeamsTeamIDMembershipsUserID` - Removes a user or invitation from a team, and may delete the user if he is not in any team.
* `DeleteTeamsTeamIDSchedulesDutyID` - Delete a specific duty.
* `DeleteWebhooksWebhookID` - Delete Webhook by Id
* `GetAlertsAlertID` - Get Alert
* `GetAlertsAlertIDAnnotations` - Get annotations of an alert
* `GetAlertsAlertIDAttachments` - Get attachments of an alert
* `GetAlertsAlertIDAttachmentsAttachmentID` - Gets a specified attachment of a specified alert.
* `GetAlertsAlertIDNotifications` - Get alert notifications
* `GetAlertsAlertIDOverview` - Get an overview alert.
* `GetAlertsReport` - Get Alert Report
* `GetCategoriesImages` - Gets the names of all alert category images.
You can get the image by going to account.signl4.com/images/alerts/categoryImageName.svg
* `GetCategoriesTeamID` - Get all categories
* `GetCategoriesTeamIDCategoryID` - Get a specific category
* `GetCategoriesTeamIDCategoryIDMetrics` - Get metrics for a specific category
* `GetCategoriesTeamIDCategoryIDSubscriptions` - Get category subscriptions
* `GetCategoriesTeamIDMetrics` - Get metrics for all categories
* `GetEventsEventIDOverview` - Get overview event
* `GetEventsEventIDParameters` - Get event parameters
* `GetPrepaidBalance` - Get your subscription's current prepaid balance.
* `GetPrepaidSettings` - Get your subscription's current prepaid settings.
* `GetPrepaidTransactions` - Get your subscription's prepaid transactions.
* `GetScriptsInstances` - Returns all script instances of the SIGNL4 team
* `GetScriptsInstancesInstanceID` - Returns all information about a given script instance which includes its runtime status.
* `GetScriptsInventory` - Returns all available inventory scripts which can be added to a SIGNL4 subscription.
* `GetScriptsInventoryParsed` - Returns all inventory scripts.
* `GetScriptsInventoryParsedScriptID` - Returns an inventory script by its id.
* `GetSubscriptions` - Get infos of all available/managed subscriptions.
* `GetSubscriptionsSubscriptionID` - Get infos of a specific subscription.
* `GetSubscriptionsSubscriptionIDChannelPrices` - Returns the subscription's channel price information.
* `GetSubscriptionsSubscriptionIDFeatures` - Returns the features of a specified subscription.
* `GetSubscriptionsSubscriptionIDPrepaidBalance` - Get a subscription's current prepaid balance.
* `GetSubscriptionsSubscriptionIDPrepaidSettings` - Get a subscription's current prepaid settings.
* `GetSubscriptionsSubscriptionIDPrepaidTransactions` - Get a subscription's prepaid transactions.
* `GetSubscriptionsSubscriptionIDTeams` - Get infos for all teams of the subscription.
* `GetSubscriptionsSubscriptionIDUserLicenses` - Gets a subscription's user licenses.
* `GetTeams` - Get infos of all teams.
* `GetTeamsTeamID` - Gets infos of a specific team.
* `GetTeamsTeamIDAlertReports` - Get information about downloadable alert reports
* `GetTeamsTeamIDAlertReportsFileName` - Returns Alert Report
* `GetTeamsTeamIDAlertSettings` - Gets alert settings of a specific team.
* `GetTeamsTeamIDDutyReports` - Get Information about downloadable reports
* `GetTeamsTeamIDDutyReportsFileName` - Download duty report with a specific fileName
* `GetTeamsTeamIDDutysummary` - Get duty assistant info for a team
* `GetTeamsTeamIDEventSources` - Gets event sources of a specific team.
* `GetTeamsTeamIDMemberships` - Get all invites of a team.
* `GetTeamsTeamIDSchedules` - Returns information about all duties that belong to the team.
* `GetTeamsTeamIDSchedulesScheduleID` - Returns information of the duty schedule with the specified Id.
* `GetTeamsTeamIDSetupProgress` - Gets setup progress of a specific team.
* `GetUsers` - Get all Users
* `GetUsersUserID` - Get User by Id
* `GetUsersUserIDDutyStatus` - Get duty status by user Id
* `GetUsersUserIDImage`
* `GetUsersUserIDSetupProgress` - Gets setup progress of a specific user.
* `GetWebhooks` - Get Webhooks
* `GetWebhookByID` - Get Webhook by Id
* `PostAlerts` - Trigger Alert
* `PostAlertsAcknowledgeAll` - Confirms all visible alerts
* `PostAlertsAcknowledgeMultiple` - Acknowlegde multiple alerts
* `PostAlertsAlertIDAcknowledge` - Acknowledge an alert
* `PostAlertsAlertIDAnnotate` - Annotate Alert
* `PostAlertsAlertIDClose` - Close an alert
* `PostAlertsAlertIDUndoAcknowledge` - Undo the acknowledgement of an alert.
* `PostAlertsAlertIDUndoClose` - Undo the closure of an alert.
* `PostAlertsCloseAll` - Close all acknowledged alerts.
* `PostAlertsCloseMultiple` - Close multiple alerts
* `PostAlertsPaged` - Gets alerts paged
* `PostAlertsUndoAcknowledgeMultiple` - Queue undo of multiple acknowledgments.
* `PostAlertsUndoCloseMultiple` - Withdraw closure of multiple alerts
* `PostCategoriesTeamID` - Create a new category
* `PostCategoriesTeamIDCategoryIDSubscriptions` - Set category subscriptions
* `PostEventsPaged` - Get overview event paged.
* `PostScriptsInstances` - Creates a new script instance in the in the SIGNL4 team.
* `PostScriptsInstancesInstanceIDDisable` - Disables a given script instance.
* `PostScriptsInstancesInstanceIDEnable` - Enables a script instance.
* `PostTeamsTeamIDAlertSettings` - Sets alert settings of a specific team.
* `PostTeamsTeamIDMemberships` - Invite users to a team
* `PostTeamsTeamIDMembershipsResendInviteMail` - Sends invite email again if an invite exists
* `PostTeamsTeamIDSchedules` - Create/Update given duty schedule.
* `PostTeamsTeamIDSchedulesDeleteRange` - Delete duty schedules in range
* `PostTeamsTeamIDSchedulesMultiple` - Save multiple schedules. It is possible to override existing schedules if you wish
* `PostUsersUserIDCheckPermissions` - Checks if a user has the provided permission.
* `PostUsersUserIDImage` - Uploaded a profile image for a specified user.
* `PostUsersUserIDPunchIn` - Punch User in
* `PostUsersUserIDPunchInAsManager` - Punch User in as Manager
* `PostUsersUserIDPunchOut` - Punch User out
* `PostWebhooks` - Create Webhook
* `PostWebhooksWebhookIDDisable` - Ability to enable a webHook.
* `PostWebhooksWebhookIDEnable` - Ability to disable a webHook.
* `PutCategoriesTeamIDCategoryID` - Update an existing category
* `PutPrepaidSettings` - Update your subscription's current prepaid settings.
* `PutScriptsInstancesInstanceID` - Updates a given script instance, typically used for updating the configuration of a script.
* `PutScriptsInstancesInstanceIDData` - Updates custom data of a given script instance which includes its display name.
* `PutSubscriptionsSubscriptionIDPrepaidSettings` - Update a subscription's current prepaid settings.
* `PutSubscriptionsSubscriptionIDProfile` - Updates a subscriptions profile.
* `PutTeamsTeamIDMembershipsUserID` - Update user's team membership.
* `PutTeamsTeamIDProfile` - Updates team profile of a team
* `PutUsersUserIDChangePassword` - Updates the password of a user
* `PutUsersUserIDProfile` - Updates user profile of an user
* `PutWebhooksWebhookID` - Update Webhook by Id

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

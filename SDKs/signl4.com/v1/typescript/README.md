# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { DeleteCategoriesTeamIdCategoryIdRequest, DeleteCategoriesTeamIdCategoryIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  }
));
    
const req: DeleteCategoriesTeamIdCategoryIdRequest = {
  pathParams: {
    categoryId: "totam",
    teamId: "error",
  },
};

sdk.sdk.deleteCategoriesTeamIdCategoryId(req).then((res: DeleteCategoriesTeamIdCategoryIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `deleteCategoriesTeamIdCategoryId` - Delete an existing category
* `deleteScriptsInstancesInstanceId` - Deletes a script instance.
* `deleteTeamsTeamIdMembershipsUserId` - Removes a user or invitation from a team, and may delete the user if he is not in any team.
* `deleteTeamsTeamIdSchedulesDutyId` - Delete a specific duty.
* `deleteWebhooksWebhookId` - Delete Webhook by Id
* `getAlertsAlertId` - Get Alert
* `getAlertsAlertIdAnnotations` - Get annotations of an alert
* `getAlertsAlertIdAttachments` - Get attachments of an alert
* `getAlertsAlertIdAttachmentsAttachmentId` - Gets a specified attachment of a specified alert.
* `getAlertsAlertIdNotifications` - Get alert notifications
* `getAlertsAlertIdOverview` - Get an overview alert.
* `getAlertsReport` - Get Alert Report
* `getCategoriesImages` - Gets the names of all alert category images.
You can get the image by going to account.signl4.com/images/alerts/categoryImageName.svg
* `getCategoriesTeamId` - Get all categories
* `getCategoriesTeamIdCategoryId` - Get a specific category
* `getCategoriesTeamIdCategoryIdMetrics` - Get metrics for a specific category
* `getCategoriesTeamIdCategoryIdSubscriptions` - Get category subscriptions
* `getCategoriesTeamIdMetrics` - Get metrics for all categories
* `getEventsEventIdOverview` - Get overview event
* `getEventsEventIdParameters` - Get event parameters
* `getPrepaidBalance` - Get your subscription's current prepaid balance.
* `getPrepaidSettings` - Get your subscription's current prepaid settings.
* `getPrepaidTransactions` - Get your subscription's prepaid transactions.
* `getScriptsInstances` - Returns all script instances of the SIGNL4 team
* `getScriptsInstancesInstanceId` - Returns all information about a given script instance which includes its runtime status.
* `getScriptsInventory` - Returns all available inventory scripts which can be added to a SIGNL4 subscription.
* `getScriptsInventoryParsed` - Returns all inventory scripts.
* `getScriptsInventoryParsedScriptId` - Returns an inventory script by its id.
* `getSubscriptions` - Get infos of all available/managed subscriptions.
* `getSubscriptionsSubscriptionId` - Get infos of a specific subscription.
* `getSubscriptionsSubscriptionIdChannelPrices` - Returns the subscription's channel price information.
* `getSubscriptionsSubscriptionIdFeatures` - Returns the features of a specified subscription.
* `getSubscriptionsSubscriptionIdPrepaidBalance` - Get a subscription's current prepaid balance.
* `getSubscriptionsSubscriptionIdPrepaidSettings` - Get a subscription's current prepaid settings.
* `getSubscriptionsSubscriptionIdPrepaidTransactions` - Get a subscription's prepaid transactions.
* `getSubscriptionsSubscriptionIdTeams` - Get infos for all teams of the subscription.
* `getSubscriptionsSubscriptionIdUserLicenses` - Gets a subscription's user licenses.
* `getTeams` - Get infos of all teams.
* `getTeamsTeamId` - Gets infos of a specific team.
* `getTeamsTeamIdAlertReports` - Get information about downloadable alert reports
* `getTeamsTeamIdAlertReportsFileName` - Returns Alert Report
* `getTeamsTeamIdAlertSettings` - Gets alert settings of a specific team.
* `getTeamsTeamIdDutyReports` - Get Information about downloadable reports
* `getTeamsTeamIdDutyReportsFileName` - Download duty report with a specific fileName
* `getTeamsTeamIdDutysummary` - Get duty assistant info for a team
* `getTeamsTeamIdEventSources` - Gets event sources of a specific team.
* `getTeamsTeamIdMemberships` - Get all invites of a team.
* `getTeamsTeamIdSchedules` - Returns information about all duties that belong to the team.
* `getTeamsTeamIdSchedulesScheduleId` - Returns information of the duty schedule with the specified Id.
* `getTeamsTeamIdSetupProgress` - Gets setup progress of a specific team.
* `getUsers` - Get all Users
* `getUsersUserId` - Get User by Id
* `getUsersUserIdDutyStatus` - Get duty status by user Id
* `getUsersUserIdImage`
* `getUsersUserIdSetupProgress` - Gets setup progress of a specific user.
* `getWebhooks` - Get Webhooks
* `getWebhookById` - Get Webhook by Id
* `postAlerts` - Trigger Alert
* `postAlertsAcknowledgeAll` - Confirms all visible alerts
* `postAlertsAcknowledgeMultiple` - Acknowlegde multiple alerts
* `postAlertsAlertIdAcknowledge` - Acknowledge an alert
* `postAlertsAlertIdAnnotate` - Annotate Alert
* `postAlertsAlertIdClose` - Close an alert
* `postAlertsAlertIdUndoAcknowledge` - Undo the acknowledgement of an alert.
* `postAlertsAlertIdUndoClose` - Undo the closure of an alert.
* `postAlertsCloseAll` - Close all acknowledged alerts.
* `postAlertsCloseMultiple` - Close multiple alerts
* `postAlertsPaged` - Gets alerts paged
* `postAlertsUndoAcknowledgeMultiple` - Queue undo of multiple acknowledgments.
* `postAlertsUndoCloseMultiple` - Withdraw closure of multiple alerts
* `postCategoriesTeamId` - Create a new category
* `postCategoriesTeamIdCategoryIdSubscriptions` - Set category subscriptions
* `postEventsPaged` - Get overview event paged.
* `postScriptsInstances` - Creates a new script instance in the in the SIGNL4 team.
* `postScriptsInstancesInstanceIdDisable` - Disables a given script instance.
* `postScriptsInstancesInstanceIdEnable` - Enables a script instance.
* `postTeamsTeamIdAlertSettings` - Sets alert settings of a specific team.
* `postTeamsTeamIdMemberships` - Invite users to a team
* `postTeamsTeamIdMembershipsResendInviteMail` - Sends invite email again if an invite exists
* `postTeamsTeamIdSchedules` - Create/Update given duty schedule.
* `postTeamsTeamIdSchedulesDeleteRange` - Delete duty schedules in range
* `postTeamsTeamIdSchedulesMultiple` - Save multiple schedules. It is possible to override existing schedules if you wish
* `postUsersUserIdCheckPermissions` - Checks if a user has the provided permission.
* `postUsersUserIdImage` - Uploaded a profile image for a specified user.
* `postUsersUserIdPunchIn` - Punch User in
* `postUsersUserIdPunchInAsManager` - Punch User in as Manager
* `postUsersUserIdPunchOut` - Punch User out
* `postWebhooks` - Create Webhook
* `postWebhooksWebhookIdDisable` - Ability to enable a webHook.
* `postWebhooksWebhookIdEnable` - Ability to disable a webHook.
* `putCategoriesTeamIdCategoryId` - Update an existing category
* `putPrepaidSettings` - Update your subscription's current prepaid settings.
* `putScriptsInstancesInstanceId` - Updates a given script instance, typically used for updating the configuration of a script.
* `putScriptsInstancesInstanceIdData` - Updates custom data of a given script instance which includes its display name.
* `putSubscriptionsSubscriptionIdPrepaidSettings` - Update a subscription's current prepaid settings.
* `putSubscriptionsSubscriptionIdProfile` - Updates a subscriptions profile.
* `putTeamsTeamIdMembershipsUserId` - Update user's team membership.
* `putTeamsTeamIdProfile` - Updates team profile of a team
* `putUsersUserIdChangePassword` - Updates the password of a user
* `putUsersUserIdProfile` - Updates user profile of an user
* `putWebhooksWebhookId` - Update Webhook by Id

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

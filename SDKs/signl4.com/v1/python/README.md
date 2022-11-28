# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    )
)
    
req = operations.DeleteCategoriesTeamIDCategoryIDRequest(
    path_params=operations.DeleteCategoriesTeamIDCategoryIDPathParams(
        category_id="totam",
        team_id="error",
    ),
)
    
res = s.sdk.delete_categories_team_id_category_id_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `delete_categories_team_id_category_id_` - Delete an existing category
* `delete_scripts_instances_instance_id_` - Deletes a script instance.
* `delete_teams_team_id_memberships_user_id_` - Removes a user or invitation from a team, and may delete the user if he is not in any team.
* `delete_teams_team_id_schedules_duty_id_` - Delete a specific duty.
* `delete_webhooks_webhook_id_` - Delete Webhook by Id
* `get_alerts_alert_id_` - Get Alert
* `get_alerts_alert_id_annotations` - Get annotations of an alert
* `get_alerts_alert_id_attachments` - Get attachments of an alert
* `get_alerts_alert_id_attachments_attachment_id_` - Gets a specified attachment of a specified alert.
* `get_alerts_alert_id_notifications` - Get alert notifications
* `get_alerts_alert_id_overview` - Get an overview alert.
* `get_alerts_report` - Get Alert Report
* `get_categories_images` - Gets the names of all alert category images.
You can get the image by going to account.signl4.com/images/alerts/categoryImageName.svg
* `get_categories_team_id_` - Get all categories
* `get_categories_team_id_category_id_` - Get a specific category
* `get_categories_team_id_category_id_metrics` - Get metrics for a specific category
* `get_categories_team_id_category_id_subscriptions` - Get category subscriptions
* `get_categories_team_id_metrics` - Get metrics for all categories
* `get_events_event_id_overview` - Get overview event
* `get_events_event_id_parameters` - Get event parameters
* `get_prepaid_balance` - Get your subscription's current prepaid balance.
* `get_prepaid_settings` - Get your subscription's current prepaid settings.
* `get_prepaid_transactions` - Get your subscription's prepaid transactions.
* `get_scripts_instances` - Returns all script instances of the SIGNL4 team
* `get_scripts_instances_instance_id_` - Returns all information about a given script instance which includes its runtime status.
* `get_scripts_inventory` - Returns all available inventory scripts which can be added to a SIGNL4 subscription.
* `get_scripts_inventory_parsed` - Returns all inventory scripts.
* `get_scripts_inventory_parsed_script_id_` - Returns an inventory script by its id.
* `get_subscriptions` - Get infos of all available/managed subscriptions.
* `get_subscriptions_subscription_id_` - Get infos of a specific subscription.
* `get_subscriptions_subscription_id_channel_prices` - Returns the subscription's channel price information.
* `get_subscriptions_subscription_id_features` - Returns the features of a specified subscription.
* `get_subscriptions_subscription_id_prepaid_balance` - Get a subscription's current prepaid balance.
* `get_subscriptions_subscription_id_prepaid_settings` - Get a subscription's current prepaid settings.
* `get_subscriptions_subscription_id_prepaid_transactions` - Get a subscription's prepaid transactions.
* `get_subscriptions_subscription_id_teams` - Get infos for all teams of the subscription.
* `get_subscriptions_subscription_id_user_licenses` - Gets a subscription's user licenses.
* `get_teams` - Get infos of all teams.
* `get_teams_team_id_` - Gets infos of a specific team.
* `get_teams_team_id_alert_reports` - Get information about downloadable alert reports
* `get_teams_team_id_alert_reports_file_name_` - Returns Alert Report
* `get_teams_team_id_alert_settings` - Gets alert settings of a specific team.
* `get_teams_team_id_duty_reports` - Get Information about downloadable reports
* `get_teams_team_id_duty_reports_file_name_` - Download duty report with a specific fileName
* `get_teams_team_id_dutysummary` - Get duty assistant info for a team
* `get_teams_team_id_event_sources` - Gets event sources of a specific team.
* `get_teams_team_id_memberships` - Get all invites of a team.
* `get_teams_team_id_schedules` - Returns information about all duties that belong to the team.
* `get_teams_team_id_schedules_schedule_id_` - Returns information of the duty schedule with the specified Id.
* `get_teams_team_id_setup_progress` - Gets setup progress of a specific team.
* `get_users` - Get all Users
* `get_users_user_id_` - Get User by Id
* `get_users_user_id_duty_status` - Get duty status by user Id
* `get_users_user_id_image`
* `get_users_user_id_setup_progress` - Gets setup progress of a specific user.
* `get_webhooks` - Get Webhooks
* `get_webhook_by_id` - Get Webhook by Id
* `post_alerts` - Trigger Alert
* `post_alerts_acknowledge_all` - Confirms all visible alerts
* `post_alerts_acknowledge_multiple` - Acknowlegde multiple alerts
* `post_alerts_alert_id_acknowledge` - Acknowledge an alert
* `post_alerts_alert_id_annotate` - Annotate Alert
* `post_alerts_alert_id_close` - Close an alert
* `post_alerts_alert_id_undo_acknowledge` - Undo the acknowledgement of an alert.
* `post_alerts_alert_id_undo_close` - Undo the closure of an alert.
* `post_alerts_close_all` - Close all acknowledged alerts.
* `post_alerts_close_multiple` - Close multiple alerts
* `post_alerts_paged` - Gets alerts paged
* `post_alerts_undo_acknowledge_multiple` - Queue undo of multiple acknowledgments.
* `post_alerts_undo_close_multiple` - Withdraw closure of multiple alerts
* `post_categories_team_id_` - Create a new category
* `post_categories_team_id_category_id_subscriptions` - Set category subscriptions
* `post_events_paged` - Get overview event paged.
* `post_scripts_instances` - Creates a new script instance in the in the SIGNL4 team.
* `post_scripts_instances_instance_id_disable` - Disables a given script instance.
* `post_scripts_instances_instance_id_enable` - Enables a script instance.
* `post_teams_team_id_alert_settings` - Sets alert settings of a specific team.
* `post_teams_team_id_memberships` - Invite users to a team
* `post_teams_team_id_memberships_resend_invite_mail` - Sends invite email again if an invite exists
* `post_teams_team_id_schedules` - Create/Update given duty schedule.
* `post_teams_team_id_schedules_delete_range` - Delete duty schedules in range
* `post_teams_team_id_schedules_multiple` - Save multiple schedules. It is possible to override existing schedules if you wish
* `post_users_user_id_check_permissions` - Checks if a user has the provided permission.
* `post_users_user_id_image` - Uploaded a profile image for a specified user.
* `post_users_user_id_punch_in` - Punch User in
* `post_users_user_id_punch_in_as_manager` - Punch User in as Manager
* `post_users_user_id_punch_out` - Punch User out
* `post_webhooks` - Create Webhook
* `post_webhooks_webhook_id_disable` - Ability to enable a webHook.
* `post_webhooks_webhook_id_enable` - Ability to disable a webHook.
* `put_categories_team_id_category_id_` - Update an existing category
* `put_prepaid_settings` - Update your subscription's current prepaid settings.
* `put_scripts_instances_instance_id_` - Updates a given script instance, typically used for updating the configuration of a script.
* `put_scripts_instances_instance_id_data` - Updates custom data of a given script instance which includes its display name.
* `put_subscriptions_subscription_id_prepaid_settings` - Update a subscription's current prepaid settings.
* `put_subscriptions_subscription_id_profile` - Updates a subscriptions profile.
* `put_teams_team_id_memberships_user_id_` - Update user's team membership.
* `put_teams_team_id_profile` - Updates team profile of a team
* `put_users_user_id_change_password` - Updates the password of a user
* `put_users_user_id_profile` - Updates user profile of an user
* `put_webhooks_webhook_id_` - Update Webhook by Id

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

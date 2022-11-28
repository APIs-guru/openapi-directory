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
        azure_auth=shared.SchemeAzureAuth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    )
)
    
req = operations.ApplicationsAddOwnerRequest(
    path_params=operations.ApplicationsAddOwnerPathParams(
        application_object_id="non",
        tenant_id="necessitatibus",
    ),
    query_params=operations.ApplicationsAddOwnerQueryParams(
        api_version="dolorem",
    ),
    request=operations.ApplicationsAddOwnerRequests(
        add_owner_parameters={
            "sit": {
                "veritatis": "quam",
                "eum": "non",
                "aut": "aut",
            },
            "amet": {
                "ut": "ullam",
                "neque": "aut",
            },
            "quo": {
                "reprehenderit": "quo",
                "sit": "accusamus",
            },
        },
        add_owner_parameters1={
            "et": {
                "in": "natus",
                "dolor": "eos",
                "accusamus": "id",
            },
        },
    ),
)
    
res = s.sdk.applications_add_owner(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `applications_add_owner` - Add an owner to an application.
* `applications_create` - Create a new application.
* `applications_delete` - Delete an application.
* `applications_get` - Get an application by object ID.
* `applications_get_service_principals_id_by_app_id` - Gets an object id for a given application id from the current tenant.
* `applications_list` - Lists applications by filter parameters.
* `applications_list_key_credentials` - Get the keyCredentials associated with an application.
* `applications_list_owners` - Directory objects that are owners of the application.
* `applications_list_password_credentials` - Get the passwordCredentials associated with an application.
* `applications_patch` - Update an existing application.
* `applications_remove_owner` - Remove a member from owners.
* `applications_update_key_credentials` - Update the keyCredentials associated with an application.
* `applications_update_password_credentials` - Update passwordCredentials associated with an application.
* `deleted_applications_hard_delete` - Hard-delete an application.
* `deleted_applications_list` - Gets a list of deleted applications in the directory.
* `deleted_applications_restore` - Restores the deleted application in the directory.
* `domains_get` - Gets a specific domain in the current tenant.
* `domains_list` - Gets a list of domains for the current tenant.
* `groups_add_member` - Add a member to a group.
* `groups_add_owner` - Add an owner to a group.
* `groups_create` - Create a group in the directory.
* `groups_delete` - Delete a group from the directory.
* `groups_get` - Gets group information from the directory.
* `groups_get_group_members` - Gets the members of a group.
* `groups_get_member_groups` - Gets a collection of object IDs of groups of which the specified group is a member.
* `groups_is_member_of` - Checks whether the specified user, group, contact, or service principal is a direct or transitive member of the specified group.
* `groups_list` - Gets list of groups for the current tenant.
* `groups_list_owners` - Directory objects that are owners of the group.
* `groups_remove_member` - Remove a member from a group.
* `groups_remove_owner` - Remove a member from owners.
* `o_auth2_permission_grant_create` - Grants OAuth2 permissions for the relevant resource Ids of an app.
* `o_auth2_permission_grant_delete` - Delete a OAuth2 permission grant for the relevant resource Ids of an app.
* `o_auth2_permission_grant_list` - Queries OAuth2 permissions grants for the relevant SP ObjectId of an app.
* `objects_get_objects_by_object_ids` - Gets the directory objects specified in a list of object IDs. You can also specify which resource collections (users, groups, etc.) should be searched by specifying the optional types parameter.
* `service_principals_add_owner` - Add an owner to a service principal.
* `service_principals_create` - Creates a service principal in the directory.
* `service_principals_delete` - Deletes a service principal from the directory.
* `service_principals_get` - Gets service principal information from the directory. Query by objectId or pass a filter to query by appId
* `service_principals_list` - Gets a list of service principals from the current tenant.
* `service_principals_list_app_role_assigned_to` - Principals (users, groups, and service principals) that are assigned to this service principal.
* `service_principals_list_app_role_assignments` - Applications that the service principal is assigned to.
* `service_principals_list_key_credentials` - Get the keyCredentials associated with the specified service principal.
* `service_principals_list_owners` - Directory objects that are owners of this service principal.
* `service_principals_list_password_credentials` - Gets the passwordCredentials associated with a service principal.
* `service_principals_remove_owner` - Remove a member from owners.
* `service_principals_update` - Updates a service principal in the directory.
* `service_principals_update_key_credentials` - Update the keyCredentials associated with a service principal.
* `service_principals_update_password_credentials` - Updates the passwordCredentials associated with a service principal.
* `signed_in_user_get` - Gets the details for the currently logged-in user.
* `signed_in_user_list_owned_objects` - Get the list of directory objects that are owned by the user.
* `users_create` - Create a new user.
* `users_delete` - Delete a user.
* `users_get` - Gets user information from the directory.
* `users_get_member_groups` - Gets a collection that contains the object IDs of the groups of which the user is a member.
* `users_list` - Gets list of users for the current tenant.
* `users_update` - Updates a user.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

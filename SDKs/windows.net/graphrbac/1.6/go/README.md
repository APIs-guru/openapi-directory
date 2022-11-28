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
                AzureAuth: shared.SchemeAzureAuth{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.ApplicationsAddOwnerRequest{
        PathParams: operations.ApplicationsAddOwnerPathParams{
            ApplicationObjectID: "non",
            TenantID: "necessitatibus",
        },
        QueryParams: operations.ApplicationsAddOwnerQueryParams{
            APIVersion: "dolorem",
        },
        Request: operations.ApplicationsAddOwnerRequests{
            AddOwnerParameters: map[string]map[string]interface{}{
                "sit": map[string]interface{}{
                    "veritatis": "quam",
                    "eum": "non",
                    "aut": "aut",
                },
                "amet": map[string]interface{}{
                    "ut": "ullam",
                    "neque": "aut",
                },
                "quo": map[string]interface{}{
                    "reprehenderit": "quo",
                    "sit": "accusamus",
                },
            },
            AddOwnerParameters1: map[string]map[string]interface{}{
                "et": map[string]interface{}{
                    "in": "natus",
                    "dolor": "eos",
                    "accusamus": "id",
                },
            },
        },
    }
    
    res, err := s.Sdk.ApplicationsAddOwner(ctx, req)
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

* `ApplicationsAddOwner` - Add an owner to an application.
* `ApplicationsCreate` - Create a new application.
* `ApplicationsDelete` - Delete an application.
* `ApplicationsGet` - Get an application by object ID.
* `ApplicationsGetServicePrincipalsIDByAppID` - Gets an object id for a given application id from the current tenant.
* `ApplicationsList` - Lists applications by filter parameters.
* `ApplicationsListKeyCredentials` - Get the keyCredentials associated with an application.
* `ApplicationsListOwners` - Directory objects that are owners of the application.
* `ApplicationsListPasswordCredentials` - Get the passwordCredentials associated with an application.
* `ApplicationsPatch` - Update an existing application.
* `ApplicationsRemoveOwner` - Remove a member from owners.
* `ApplicationsUpdateKeyCredentials` - Update the keyCredentials associated with an application.
* `ApplicationsUpdatePasswordCredentials` - Update passwordCredentials associated with an application.
* `DeletedApplicationsHardDelete` - Hard-delete an application.
* `DeletedApplicationsList` - Gets a list of deleted applications in the directory.
* `DeletedApplicationsRestore` - Restores the deleted application in the directory.
* `DomainsGet` - Gets a specific domain in the current tenant.
* `DomainsList` - Gets a list of domains for the current tenant.
* `GroupsAddMember` - Add a member to a group.
* `GroupsAddOwner` - Add an owner to a group.
* `GroupsCreate` - Create a group in the directory.
* `GroupsDelete` - Delete a group from the directory.
* `GroupsGet` - Gets group information from the directory.
* `GroupsGetGroupMembers` - Gets the members of a group.
* `GroupsGetMemberGroups` - Gets a collection of object IDs of groups of which the specified group is a member.
* `GroupsIsMemberOf` - Checks whether the specified user, group, contact, or service principal is a direct or transitive member of the specified group.
* `GroupsList` - Gets list of groups for the current tenant.
* `GroupsListOwners` - Directory objects that are owners of the group.
* `GroupsRemoveMember` - Remove a member from a group.
* `GroupsRemoveOwner` - Remove a member from owners.
* `OAuth2PermissionGrantCreate` - Grants OAuth2 permissions for the relevant resource Ids of an app.
* `OAuth2PermissionGrantDelete` - Delete a OAuth2 permission grant for the relevant resource Ids of an app.
* `OAuth2PermissionGrantList` - Queries OAuth2 permissions grants for the relevant SP ObjectId of an app.
* `ObjectsGetObjectsByObjectIds` - Gets the directory objects specified in a list of object IDs. You can also specify which resource collections (users, groups, etc.) should be searched by specifying the optional types parameter.
* `ServicePrincipalsAddOwner` - Add an owner to a service principal.
* `ServicePrincipalsCreate` - Creates a service principal in the directory.
* `ServicePrincipalsDelete` - Deletes a service principal from the directory.
* `ServicePrincipalsGet` - Gets service principal information from the directory. Query by objectId or pass a filter to query by appId
* `ServicePrincipalsList` - Gets a list of service principals from the current tenant.
* `ServicePrincipalsListAppRoleAssignedTo` - Principals (users, groups, and service principals) that are assigned to this service principal.
* `ServicePrincipalsListAppRoleAssignments` - Applications that the service principal is assigned to.
* `ServicePrincipalsListKeyCredentials` - Get the keyCredentials associated with the specified service principal.
* `ServicePrincipalsListOwners` - Directory objects that are owners of this service principal.
* `ServicePrincipalsListPasswordCredentials` - Gets the passwordCredentials associated with a service principal.
* `ServicePrincipalsRemoveOwner` - Remove a member from owners.
* `ServicePrincipalsUpdate` - Updates a service principal in the directory.
* `ServicePrincipalsUpdateKeyCredentials` - Update the keyCredentials associated with a service principal.
* `ServicePrincipalsUpdatePasswordCredentials` - Updates the passwordCredentials associated with a service principal.
* `SignedInUserGet` - Gets the details for the currently logged-in user.
* `SignedInUserListOwnedObjects` - Get the list of directory objects that are owned by the user.
* `UsersCreate` - Create a new user.
* `UsersDelete` - Delete a user.
* `UsersGet` - Gets user information from the directory.
* `UsersGetMemberGroups` - Gets a collection that contains the object IDs of the groups of which the user is a member.
* `UsersList` - Gets list of users for the current tenant.
* `UsersUpdate` - Updates a user.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

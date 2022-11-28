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
import { ApplicationsAddOwnerRequest, ApplicationsAddOwnerResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    azureAuth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  }
));
    
const req: ApplicationsAddOwnerRequest = {
  pathParams: {
    applicationObjectId: "non",
    tenantId: "necessitatibus",
  },
  queryParams: {
    apiVersion: "dolorem",
  },
  request: {
    addOwnerParameters: {
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
    addOwnerParameters1: {
      "et": {
        "in": "natus",
        "dolor": "eos",
        "accusamus": "id",
      },
    },
  },
};

sdk.sdk.applicationsAddOwner(req).then((res: ApplicationsAddOwnerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `applicationsAddOwner` - Add an owner to an application.
* `applicationsCreate` - Create a new application.
* `applicationsDelete` - Delete an application.
* `applicationsGet` - Get an application by object ID.
* `applicationsGetServicePrincipalsIdByAppId` - Gets an object id for a given application id from the current tenant.
* `applicationsList` - Lists applications by filter parameters.
* `applicationsListKeyCredentials` - Get the keyCredentials associated with an application.
* `applicationsListOwners` - Directory objects that are owners of the application.
* `applicationsListPasswordCredentials` - Get the passwordCredentials associated with an application.
* `applicationsPatch` - Update an existing application.
* `applicationsRemoveOwner` - Remove a member from owners.
* `applicationsUpdateKeyCredentials` - Update the keyCredentials associated with an application.
* `applicationsUpdatePasswordCredentials` - Update passwordCredentials associated with an application.
* `deletedApplicationsHardDelete` - Hard-delete an application.
* `deletedApplicationsList` - Gets a list of deleted applications in the directory.
* `deletedApplicationsRestore` - Restores the deleted application in the directory.
* `domainsGet` - Gets a specific domain in the current tenant.
* `domainsList` - Gets a list of domains for the current tenant.
* `groupsAddMember` - Add a member to a group.
* `groupsAddOwner` - Add an owner to a group.
* `groupsCreate` - Create a group in the directory.
* `groupsDelete` - Delete a group from the directory.
* `groupsGet` - Gets group information from the directory.
* `groupsGetGroupMembers` - Gets the members of a group.
* `groupsGetMemberGroups` - Gets a collection of object IDs of groups of which the specified group is a member.
* `groupsIsMemberOf` - Checks whether the specified user, group, contact, or service principal is a direct or transitive member of the specified group.
* `groupsList` - Gets list of groups for the current tenant.
* `groupsListOwners` - Directory objects that are owners of the group.
* `groupsRemoveMember` - Remove a member from a group.
* `groupsRemoveOwner` - Remove a member from owners.
* `oAuth2PermissionGrantCreate` - Grants OAuth2 permissions for the relevant resource Ids of an app.
* `oAuth2PermissionGrantDelete` - Delete a OAuth2 permission grant for the relevant resource Ids of an app.
* `oAuth2PermissionGrantList` - Queries OAuth2 permissions grants for the relevant SP ObjectId of an app.
* `objectsGetObjectsByObjectIds` - Gets the directory objects specified in a list of object IDs. You can also specify which resource collections (users, groups, etc.) should be searched by specifying the optional types parameter.
* `servicePrincipalsAddOwner` - Add an owner to a service principal.
* `servicePrincipalsCreate` - Creates a service principal in the directory.
* `servicePrincipalsDelete` - Deletes a service principal from the directory.
* `servicePrincipalsGet` - Gets service principal information from the directory. Query by objectId or pass a filter to query by appId
* `servicePrincipalsList` - Gets a list of service principals from the current tenant.
* `servicePrincipalsListAppRoleAssignedTo` - Principals (users, groups, and service principals) that are assigned to this service principal.
* `servicePrincipalsListAppRoleAssignments` - Applications that the service principal is assigned to.
* `servicePrincipalsListKeyCredentials` - Get the keyCredentials associated with the specified service principal.
* `servicePrincipalsListOwners` - Directory objects that are owners of this service principal.
* `servicePrincipalsListPasswordCredentials` - Gets the passwordCredentials associated with a service principal.
* `servicePrincipalsRemoveOwner` - Remove a member from owners.
* `servicePrincipalsUpdate` - Updates a service principal in the directory.
* `servicePrincipalsUpdateKeyCredentials` - Update the keyCredentials associated with a service principal.
* `servicePrincipalsUpdatePasswordCredentials` - Updates the passwordCredentials associated with a service principal.
* `signedInUserGet` - Gets the details for the currently logged-in user.
* `signedInUserListOwnedObjects` - Get the list of directory objects that are owned by the user.
* `usersCreate` - Create a new user.
* `usersDelete` - Delete a user.
* `usersGet` - Gets user information from the directory.
* `usersGetMemberGroups` - Gets a collection that contains the object IDs of the groups of which the user is a member.
* `usersList` - Gets list of users for the current tenant.
* `usersUpdate` - Updates a user.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://graph.windows.net"];
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
     * applicationsAddOwner - Add an owner to an application.
    **/
    applicationsAddOwner(req: operations.ApplicationsAddOwnerRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationsAddOwnerResponse>;
    /**
     * applicationsCreate - Create a new application.
    **/
    applicationsCreate(req: operations.ApplicationsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationsCreateResponse>;
    /**
     * applicationsDelete - Delete an application.
    **/
    applicationsDelete(req: operations.ApplicationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationsDeleteResponse>;
    /**
     * applicationsGet - Get an application by object ID.
    **/
    applicationsGet(req: operations.ApplicationsGetRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationsGetResponse>;
    /**
     * applicationsGetServicePrincipalsIdByAppId - Gets an object id for a given application id from the current tenant.
    **/
    applicationsGetServicePrincipalsIdByAppId(req: operations.ApplicationsGetServicePrincipalsIdByAppIdRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationsGetServicePrincipalsIdByAppIdResponse>;
    /**
     * applicationsList - Lists applications by filter parameters.
    **/
    applicationsList(req: operations.ApplicationsListRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationsListResponse>;
    /**
     * applicationsListKeyCredentials - Get the keyCredentials associated with an application.
    **/
    applicationsListKeyCredentials(req: operations.ApplicationsListKeyCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationsListKeyCredentialsResponse>;
    /**
     * applicationsListOwners - Directory objects that are owners of the application.
     *
     * The owners are a set of non-admin users who are allowed to modify this object.
    **/
    applicationsListOwners(req: operations.ApplicationsListOwnersRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationsListOwnersResponse>;
    /**
     * applicationsListPasswordCredentials - Get the passwordCredentials associated with an application.
    **/
    applicationsListPasswordCredentials(req: operations.ApplicationsListPasswordCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationsListPasswordCredentialsResponse>;
    /**
     * applicationsPatch - Update an existing application.
    **/
    applicationsPatch(req: operations.ApplicationsPatchRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationsPatchResponse>;
    /**
     * applicationsRemoveOwner - Remove a member from owners.
    **/
    applicationsRemoveOwner(req: operations.ApplicationsRemoveOwnerRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationsRemoveOwnerResponse>;
    /**
     * applicationsUpdateKeyCredentials - Update the keyCredentials associated with an application.
    **/
    applicationsUpdateKeyCredentials(req: operations.ApplicationsUpdateKeyCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationsUpdateKeyCredentialsResponse>;
    /**
     * applicationsUpdatePasswordCredentials - Update passwordCredentials associated with an application.
    **/
    applicationsUpdatePasswordCredentials(req: operations.ApplicationsUpdatePasswordCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationsUpdatePasswordCredentialsResponse>;
    /**
     * deletedApplicationsHardDelete - Hard-delete an application.
    **/
    deletedApplicationsHardDelete(req: operations.DeletedApplicationsHardDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DeletedApplicationsHardDeleteResponse>;
    /**
     * deletedApplicationsList - Gets a list of deleted applications in the directory.
    **/
    deletedApplicationsList(req: operations.DeletedApplicationsListRequest, config?: AxiosRequestConfig): Promise<operations.DeletedApplicationsListResponse>;
    /**
     * deletedApplicationsRestore - Restores the deleted application in the directory.
    **/
    deletedApplicationsRestore(req: operations.DeletedApplicationsRestoreRequest, config?: AxiosRequestConfig): Promise<operations.DeletedApplicationsRestoreResponse>;
    /**
     * domainsGet - Gets a specific domain in the current tenant.
    **/
    domainsGet(req: operations.DomainsGetRequest, config?: AxiosRequestConfig): Promise<operations.DomainsGetResponse>;
    /**
     * domainsList - Gets a list of domains for the current tenant.
    **/
    domainsList(req: operations.DomainsListRequest, config?: AxiosRequestConfig): Promise<operations.DomainsListResponse>;
    /**
     * groupsAddMember - Add a member to a group.
    **/
    groupsAddMember(req: operations.GroupsAddMemberRequest, config?: AxiosRequestConfig): Promise<operations.GroupsAddMemberResponse>;
    /**
     * groupsAddOwner - Add an owner to a group.
    **/
    groupsAddOwner(req: operations.GroupsAddOwnerRequest, config?: AxiosRequestConfig): Promise<operations.GroupsAddOwnerResponse>;
    /**
     * groupsCreate - Create a group in the directory.
    **/
    groupsCreate(req: operations.GroupsCreateRequest, config?: AxiosRequestConfig): Promise<operations.GroupsCreateResponse>;
    /**
     * groupsDelete - Delete a group from the directory.
    **/
    groupsDelete(req: operations.GroupsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.GroupsDeleteResponse>;
    /**
     * groupsGet - Gets group information from the directory.
    **/
    groupsGet(req: operations.GroupsGetRequest, config?: AxiosRequestConfig): Promise<operations.GroupsGetResponse>;
    /**
     * groupsGetGroupMembers - Gets the members of a group.
    **/
    groupsGetGroupMembers(req: operations.GroupsGetGroupMembersRequest, config?: AxiosRequestConfig): Promise<operations.GroupsGetGroupMembersResponse>;
    /**
     * groupsGetMemberGroups - Gets a collection of object IDs of groups of which the specified group is a member.
    **/
    groupsGetMemberGroups(req: operations.GroupsGetMemberGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GroupsGetMemberGroupsResponse>;
    /**
     * groupsIsMemberOf - Checks whether the specified user, group, contact, or service principal is a direct or transitive member of the specified group.
    **/
    groupsIsMemberOf(req: operations.GroupsIsMemberOfRequest, config?: AxiosRequestConfig): Promise<operations.GroupsIsMemberOfResponse>;
    /**
     * groupsList - Gets list of groups for the current tenant.
    **/
    groupsList(req: operations.GroupsListRequest, config?: AxiosRequestConfig): Promise<operations.GroupsListResponse>;
    /**
     * groupsListOwners - Directory objects that are owners of the group.
     *
     * The owners are a set of non-admin users who are allowed to modify this object.
    **/
    groupsListOwners(req: operations.GroupsListOwnersRequest, config?: AxiosRequestConfig): Promise<operations.GroupsListOwnersResponse>;
    /**
     * groupsRemoveMember - Remove a member from a group.
    **/
    groupsRemoveMember(req: operations.GroupsRemoveMemberRequest, config?: AxiosRequestConfig): Promise<operations.GroupsRemoveMemberResponse>;
    /**
     * groupsRemoveOwner - Remove a member from owners.
    **/
    groupsRemoveOwner(req: operations.GroupsRemoveOwnerRequest, config?: AxiosRequestConfig): Promise<operations.GroupsRemoveOwnerResponse>;
    /**
     * oAuth2PermissionGrantCreate - Grants OAuth2 permissions for the relevant resource Ids of an app.
    **/
    oAuth2PermissionGrantCreate(req: operations.OAuth2PermissionGrantCreateRequest, config?: AxiosRequestConfig): Promise<operations.OAuth2PermissionGrantCreateResponse>;
    /**
     * oAuth2PermissionGrantDelete - Delete a OAuth2 permission grant for the relevant resource Ids of an app.
    **/
    oAuth2PermissionGrantDelete(req: operations.OAuth2PermissionGrantDeleteRequest, config?: AxiosRequestConfig): Promise<operations.OAuth2PermissionGrantDeleteResponse>;
    /**
     * oAuth2PermissionGrantList - Queries OAuth2 permissions grants for the relevant SP ObjectId of an app.
    **/
    oAuth2PermissionGrantList(req: operations.OAuth2PermissionGrantListRequest, config?: AxiosRequestConfig): Promise<operations.OAuth2PermissionGrantListResponse>;
    /**
     * objectsGetObjectsByObjectIds - Gets the directory objects specified in a list of object IDs. You can also specify which resource collections (users, groups, etc.) should be searched by specifying the optional types parameter.
    **/
    objectsGetObjectsByObjectIds(req: operations.ObjectsGetObjectsByObjectIdsRequest, config?: AxiosRequestConfig): Promise<operations.ObjectsGetObjectsByObjectIdsResponse>;
    /**
     * servicePrincipalsAddOwner - Add an owner to a service principal.
    **/
    servicePrincipalsAddOwner(req: operations.ServicePrincipalsAddOwnerRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsAddOwnerResponse>;
    /**
     * servicePrincipalsCreate - Creates a service principal in the directory.
    **/
    servicePrincipalsCreate(req: operations.ServicePrincipalsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsCreateResponse>;
    /**
     * servicePrincipalsDelete - Deletes a service principal from the directory.
    **/
    servicePrincipalsDelete(req: operations.ServicePrincipalsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsDeleteResponse>;
    /**
     * servicePrincipalsGet - Gets service principal information from the directory. Query by objectId or pass a filter to query by appId
    **/
    servicePrincipalsGet(req: operations.ServicePrincipalsGetRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsGetResponse>;
    /**
     * servicePrincipalsList - Gets a list of service principals from the current tenant.
    **/
    servicePrincipalsList(req: operations.ServicePrincipalsListRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsListResponse>;
    /**
     * servicePrincipalsListAppRoleAssignedTo - Principals (users, groups, and service principals) that are assigned to this service principal.
    **/
    servicePrincipalsListAppRoleAssignedTo(req: operations.ServicePrincipalsListAppRoleAssignedToRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsListAppRoleAssignedToResponse>;
    /**
     * servicePrincipalsListAppRoleAssignments - Applications that the service principal is assigned to.
    **/
    servicePrincipalsListAppRoleAssignments(req: operations.ServicePrincipalsListAppRoleAssignmentsRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsListAppRoleAssignmentsResponse>;
    /**
     * servicePrincipalsListKeyCredentials - Get the keyCredentials associated with the specified service principal.
    **/
    servicePrincipalsListKeyCredentials(req: operations.ServicePrincipalsListKeyCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsListKeyCredentialsResponse>;
    /**
     * servicePrincipalsListOwners - Directory objects that are owners of this service principal.
     *
     * The owners are a set of non-admin users who are allowed to modify this object.
    **/
    servicePrincipalsListOwners(req: operations.ServicePrincipalsListOwnersRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsListOwnersResponse>;
    /**
     * servicePrincipalsListPasswordCredentials - Gets the passwordCredentials associated with a service principal.
    **/
    servicePrincipalsListPasswordCredentials(req: operations.ServicePrincipalsListPasswordCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsListPasswordCredentialsResponse>;
    /**
     * servicePrincipalsRemoveOwner - Remove a member from owners.
    **/
    servicePrincipalsRemoveOwner(req: operations.ServicePrincipalsRemoveOwnerRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsRemoveOwnerResponse>;
    /**
     * servicePrincipalsUpdate - Updates a service principal in the directory.
    **/
    servicePrincipalsUpdate(req: operations.ServicePrincipalsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsUpdateResponse>;
    /**
     * servicePrincipalsUpdateKeyCredentials - Update the keyCredentials associated with a service principal.
    **/
    servicePrincipalsUpdateKeyCredentials(req: operations.ServicePrincipalsUpdateKeyCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsUpdateKeyCredentialsResponse>;
    /**
     * servicePrincipalsUpdatePasswordCredentials - Updates the passwordCredentials associated with a service principal.
    **/
    servicePrincipalsUpdatePasswordCredentials(req: operations.ServicePrincipalsUpdatePasswordCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsUpdatePasswordCredentialsResponse>;
    /**
     * signedInUserGet - Gets the details for the currently logged-in user.
    **/
    signedInUserGet(req: operations.SignedInUserGetRequest, config?: AxiosRequestConfig): Promise<operations.SignedInUserGetResponse>;
    /**
     * signedInUserListOwnedObjects - Get the list of directory objects that are owned by the user.
    **/
    signedInUserListOwnedObjects(req: operations.SignedInUserListOwnedObjectsRequest, config?: AxiosRequestConfig): Promise<operations.SignedInUserListOwnedObjectsResponse>;
    /**
     * usersCreate - Create a new user.
    **/
    usersCreate(req: operations.UsersCreateRequest, config?: AxiosRequestConfig): Promise<operations.UsersCreateResponse>;
    /**
     * usersDelete - Delete a user.
    **/
    usersDelete(req: operations.UsersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.UsersDeleteResponse>;
    /**
     * usersGet - Gets user information from the directory.
    **/
    usersGet(req: operations.UsersGetRequest, config?: AxiosRequestConfig): Promise<operations.UsersGetResponse>;
    /**
     * usersGetMemberGroups - Gets a collection that contains the object IDs of the groups of which the user is a member.
    **/
    usersGetMemberGroups(req: operations.UsersGetMemberGroupsRequest, config?: AxiosRequestConfig): Promise<operations.UsersGetMemberGroupsResponse>;
    /**
     * usersList - Gets list of users for the current tenant.
    **/
    usersList(req: operations.UsersListRequest, config?: AxiosRequestConfig): Promise<operations.UsersListResponse>;
    /**
     * usersUpdate - Updates a user.
    **/
    usersUpdate(req: operations.UsersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.UsersUpdateResponse>;
}
export {};

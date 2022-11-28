

import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://graph.windows.net",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def applications_add_owner(self, request: operations.ApplicationsAddOwnerRequest) -> operations.ApplicationsAddOwnerResponse:
        r"""Add an owner to an application.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/applications/{applicationObjectId}/$links/owners", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApplicationsAddOwnerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def applications_create(self, request: operations.ApplicationsCreateRequest) -> operations.ApplicationsCreateResponse:
        r"""Create a new application.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/applications", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApplicationsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.application = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.application = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def applications_delete(self, request: operations.ApplicationsDeleteRequest) -> operations.ApplicationsDeleteResponse:
        r"""Delete an application.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/applications/{applicationObjectId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApplicationsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def applications_get(self, request: operations.ApplicationsGetRequest) -> operations.ApplicationsGetResponse:
        r"""Get an application by object ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/applications/{applicationObjectId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApplicationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.application = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.application = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def applications_get_service_principals_id_by_app_id(self, request: operations.ApplicationsGetServicePrincipalsIDByAppIDRequest) -> operations.ApplicationsGetServicePrincipalsIDByAppIDResponse:
        r"""Gets an object id for a given application id from the current tenant.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/servicePrincipalsByAppId/{applicationID}/objectId", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApplicationsGetServicePrincipalsIDByAppIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServicePrincipalObjectResult])
                res.service_principal_object_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServicePrincipalObjectResult])
                res.service_principal_object_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def applications_list(self, request: operations.ApplicationsListRequest) -> operations.ApplicationsListResponse:
        r"""Lists applications by filter parameters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/applications", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApplicationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ApplicationListResult])
                res.application_list_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ApplicationListResult])
                res.application_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def applications_list_key_credentials(self, request: operations.ApplicationsListKeyCredentialsRequest) -> operations.ApplicationsListKeyCredentialsResponse:
        r"""Get the keyCredentials associated with an application.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/applications/{applicationObjectId}/keyCredentials", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApplicationsListKeyCredentialsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.KeyCredentialListResult])
                res.key_credential_list_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.KeyCredentialListResult])
                res.key_credential_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def applications_list_owners(self, request: operations.ApplicationsListOwnersRequest) -> operations.ApplicationsListOwnersResponse:
        r"""Directory objects that are owners of the application.
        The owners are a set of non-admin users who are allowed to modify this object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/applications/{applicationObjectId}/owners", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApplicationsListOwnersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DirectoryObjectListResult])
                res.directory_object_list_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DirectoryObjectListResult])
                res.directory_object_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def applications_list_password_credentials(self, request: operations.ApplicationsListPasswordCredentialsRequest) -> operations.ApplicationsListPasswordCredentialsResponse:
        r"""Get the passwordCredentials associated with an application.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/applications/{applicationObjectId}/passwordCredentials", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApplicationsListPasswordCredentialsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PasswordCredentialListResult])
                res.password_credential_list_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PasswordCredentialListResult])
                res.password_credential_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def applications_patch(self, request: operations.ApplicationsPatchRequest) -> operations.ApplicationsPatchResponse:
        r"""Update an existing application.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/applications/{applicationObjectId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApplicationsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def applications_remove_owner(self, request: operations.ApplicationsRemoveOwnerRequest) -> operations.ApplicationsRemoveOwnerResponse:
        r"""Remove a member from owners.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/applications/{applicationObjectId}/$links/owners/{ownerObjectId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApplicationsRemoveOwnerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def applications_update_key_credentials(self, request: operations.ApplicationsUpdateKeyCredentialsRequest) -> operations.ApplicationsUpdateKeyCredentialsResponse:
        r"""Update the keyCredentials associated with an application.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/applications/{applicationObjectId}/keyCredentials", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApplicationsUpdateKeyCredentialsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def applications_update_password_credentials(self, request: operations.ApplicationsUpdatePasswordCredentialsRequest) -> operations.ApplicationsUpdatePasswordCredentialsResponse:
        r"""Update passwordCredentials associated with an application.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/applications/{applicationObjectId}/passwordCredentials", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApplicationsUpdatePasswordCredentialsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def deleted_applications_hard_delete(self, request: operations.DeletedApplicationsHardDeleteRequest) -> operations.DeletedApplicationsHardDeleteResponse:
        r"""Hard-delete an application.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/deletedApplications/{applicationObjectId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletedApplicationsHardDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def deleted_applications_list(self, request: operations.DeletedApplicationsListRequest) -> operations.DeletedApplicationsListResponse:
        r"""Gets a list of deleted applications in the directory.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/deletedApplications", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletedApplicationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ApplicationListResult])
                res.application_list_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ApplicationListResult])
                res.application_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def deleted_applications_restore(self, request: operations.DeletedApplicationsRestoreRequest) -> operations.DeletedApplicationsRestoreResponse:
        r"""Restores the deleted application in the directory.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/deletedApplications/{objectId}/restore", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletedApplicationsRestoreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.application = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.application = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def domains_get(self, request: operations.DomainsGetRequest) -> operations.DomainsGetResponse:
        r"""Gets a specific domain in the current tenant.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/domains/{domainName}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DomainsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.domain = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.domain = out

        return res

    
    def domains_list(self, request: operations.DomainsListRequest) -> operations.DomainsListResponse:
        r"""Gets a list of domains for the current tenant.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/domains", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DomainsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DomainListResult])
                res.domain_list_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DomainListResult])
                res.domain_list_result = out

        return res

    
    def groups_add_member(self, request: operations.GroupsAddMemberRequest) -> operations.GroupsAddMemberResponse:
        r"""Add a member to a group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/groups/{groupObjectId}/$links/members", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupsAddMemberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def groups_add_owner(self, request: operations.GroupsAddOwnerRequest) -> operations.GroupsAddOwnerResponse:
        r"""Add an owner to a group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/groups/{objectId}/$links/owners", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupsAddOwnerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def groups_create(self, request: operations.GroupsCreateRequest) -> operations.GroupsCreateResponse:
        r"""Create a group in the directory.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/groups", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.ad_group = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.ad_group = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def groups_delete(self, request: operations.GroupsDeleteRequest) -> operations.GroupsDeleteResponse:
        r"""Delete a group from the directory.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/groups/{objectId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def groups_get(self, request: operations.GroupsGetRequest) -> operations.GroupsGetResponse:
        r"""Gets group information from the directory.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/groups/{objectId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.ad_group = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.ad_group = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def groups_get_group_members(self, request: operations.GroupsGetGroupMembersRequest) -> operations.GroupsGetGroupMembersResponse:
        r"""Gets the members of a group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/groups/{objectId}/members", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupsGetGroupMembersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DirectoryObjectListResult])
                res.directory_object_list_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DirectoryObjectListResult])
                res.directory_object_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def groups_get_member_groups(self, request: operations.GroupsGetMemberGroupsRequest) -> operations.GroupsGetMemberGroupsResponse:
        r"""Gets a collection of object IDs of groups of which the specified group is a member.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/groups/{objectId}/getMemberGroups", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupsGetMemberGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GroupGetMemberGroupsResult])
                res.group_get_member_groups_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GroupGetMemberGroupsResult])
                res.group_get_member_groups_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def groups_is_member_of(self, request: operations.GroupsIsMemberOfRequest) -> operations.GroupsIsMemberOfResponse:
        r"""Checks whether the specified user, group, contact, or service principal is a direct or transitive member of the specified group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/isMemberOf", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupsIsMemberOfResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.check_group_membership_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.check_group_membership_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def groups_list(self, request: operations.GroupsListRequest) -> operations.GroupsListResponse:
        r"""Gets list of groups for the current tenant.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/groups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GroupListResult])
                res.group_list_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GroupListResult])
                res.group_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def groups_list_owners(self, request: operations.GroupsListOwnersRequest) -> operations.GroupsListOwnersResponse:
        r"""Directory objects that are owners of the group.
        The owners are a set of non-admin users who are allowed to modify this object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/groups/{objectId}/owners", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupsListOwnersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DirectoryObjectListResult])
                res.directory_object_list_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DirectoryObjectListResult])
                res.directory_object_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def groups_remove_member(self, request: operations.GroupsRemoveMemberRequest) -> operations.GroupsRemoveMemberResponse:
        r"""Remove a member from a group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/groups/{groupObjectId}/$links/members/{memberObjectId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupsRemoveMemberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def groups_remove_owner(self, request: operations.GroupsRemoveOwnerRequest) -> operations.GroupsRemoveOwnerResponse:
        r"""Remove a member from owners.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/groups/{objectId}/$links/owners/{ownerObjectId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupsRemoveOwnerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def o_auth2_permission_grant_create(self, request: operations.OAuth2PermissionGrantCreateRequest) -> operations.OAuth2PermissionGrantCreateResponse:
        r"""Grants OAuth2 permissions for the relevant resource Ids of an app.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/oauth2PermissionGrants", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OAuth2PermissionGrantCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.o_auth2_permission_grant = out

        return res

    
    def o_auth2_permission_grant_delete(self, request: operations.OAuth2PermissionGrantDeleteRequest) -> operations.OAuth2PermissionGrantDeleteResponse:
        r"""Delete a OAuth2 permission grant for the relevant resource Ids of an app.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/oauth2PermissionGrants/{objectId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OAuth2PermissionGrantDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def o_auth2_permission_grant_list(self, request: operations.OAuth2PermissionGrantListRequest) -> operations.OAuth2PermissionGrantListResponse:
        r"""Queries OAuth2 permissions grants for the relevant SP ObjectId of an app.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/oauth2PermissionGrants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OAuth2PermissionGrantListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OAuth2PermissionGrantListResult])
                res.o_auth2_permission_grant_list_result = out

        return res

    
    def objects_get_objects_by_object_ids(self, request: operations.ObjectsGetObjectsByObjectIdsRequest) -> operations.ObjectsGetObjectsByObjectIdsResponse:
        r"""Gets the directory objects specified in a list of object IDs. You can also specify which resource collections (users, groups, etc.) should be searched by specifying the optional types parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/getObjectsByObjectIds", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ObjectsGetObjectsByObjectIdsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DirectoryObjectListResult])
                res.directory_object_list_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DirectoryObjectListResult])
                res.directory_object_list_result = out

        return res

    
    def service_principals_add_owner(self, request: operations.ServicePrincipalsAddOwnerRequest) -> operations.ServicePrincipalsAddOwnerResponse:
        r"""Add an owner to a service principal.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/servicePrincipals/{objectId}/$links/owners", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicePrincipalsAddOwnerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def service_principals_create(self, request: operations.ServicePrincipalsCreateRequest) -> operations.ServicePrincipalsCreateResponse:
        r"""Creates a service principal in the directory.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/servicePrincipals", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicePrincipalsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.service_principal = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.service_principal = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def service_principals_delete(self, request: operations.ServicePrincipalsDeleteRequest) -> operations.ServicePrincipalsDeleteResponse:
        r"""Deletes a service principal from the directory.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/servicePrincipals/{objectId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicePrincipalsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def service_principals_get(self, request: operations.ServicePrincipalsGetRequest) -> operations.ServicePrincipalsGetResponse:
        r"""Gets service principal information from the directory. Query by objectId or pass a filter to query by appId
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/servicePrincipals/{objectId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicePrincipalsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.service_principal = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.service_principal = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def service_principals_list(self, request: operations.ServicePrincipalsListRequest) -> operations.ServicePrincipalsListResponse:
        r"""Gets a list of service principals from the current tenant.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/servicePrincipals", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicePrincipalsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServicePrincipalListResult])
                res.service_principal_list_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServicePrincipalListResult])
                res.service_principal_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def service_principals_list_app_role_assigned_to(self, request: operations.ServicePrincipalsListAppRoleAssignedToRequest) -> operations.ServicePrincipalsListAppRoleAssignedToResponse:
        r"""Principals (users, groups, and service principals) that are assigned to this service principal.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/servicePrincipals/{objectId}/appRoleAssignedTo", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicePrincipalsListAppRoleAssignedToResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppRoleAssignmentListResult])
                res.app_role_assignment_list_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppRoleAssignmentListResult])
                res.app_role_assignment_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def service_principals_list_app_role_assignments(self, request: operations.ServicePrincipalsListAppRoleAssignmentsRequest) -> operations.ServicePrincipalsListAppRoleAssignmentsResponse:
        r"""Applications that the service principal is assigned to.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/servicePrincipals/{objectId}/appRoleAssignments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicePrincipalsListAppRoleAssignmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppRoleAssignmentListResult])
                res.app_role_assignment_list_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppRoleAssignmentListResult])
                res.app_role_assignment_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def service_principals_list_key_credentials(self, request: operations.ServicePrincipalsListKeyCredentialsRequest) -> operations.ServicePrincipalsListKeyCredentialsResponse:
        r"""Get the keyCredentials associated with the specified service principal.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/servicePrincipals/{objectId}/keyCredentials", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicePrincipalsListKeyCredentialsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.KeyCredentialListResult])
                res.key_credential_list_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.KeyCredentialListResult])
                res.key_credential_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def service_principals_list_owners(self, request: operations.ServicePrincipalsListOwnersRequest) -> operations.ServicePrincipalsListOwnersResponse:
        r"""Directory objects that are owners of this service principal.
        The owners are a set of non-admin users who are allowed to modify this object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/servicePrincipals/{objectId}/owners", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicePrincipalsListOwnersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DirectoryObjectListResult])
                res.directory_object_list_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DirectoryObjectListResult])
                res.directory_object_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def service_principals_list_password_credentials(self, request: operations.ServicePrincipalsListPasswordCredentialsRequest) -> operations.ServicePrincipalsListPasswordCredentialsResponse:
        r"""Gets the passwordCredentials associated with a service principal.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/servicePrincipals/{objectId}/passwordCredentials", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicePrincipalsListPasswordCredentialsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PasswordCredentialListResult])
                res.password_credential_list_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PasswordCredentialListResult])
                res.password_credential_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def service_principals_remove_owner(self, request: operations.ServicePrincipalsRemoveOwnerRequest) -> operations.ServicePrincipalsRemoveOwnerResponse:
        r"""Remove a member from owners.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/servicePrincipals/{objectId}/$links/owners/{ownerObjectId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicePrincipalsRemoveOwnerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def service_principals_update(self, request: operations.ServicePrincipalsUpdateRequest) -> operations.ServicePrincipalsUpdateResponse:
        r"""Updates a service principal in the directory.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/servicePrincipals/{objectId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicePrincipalsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def service_principals_update_key_credentials(self, request: operations.ServicePrincipalsUpdateKeyCredentialsRequest) -> operations.ServicePrincipalsUpdateKeyCredentialsResponse:
        r"""Update the keyCredentials associated with a service principal.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/servicePrincipals/{objectId}/keyCredentials", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicePrincipalsUpdateKeyCredentialsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def service_principals_update_password_credentials(self, request: operations.ServicePrincipalsUpdatePasswordCredentialsRequest) -> operations.ServicePrincipalsUpdatePasswordCredentialsResponse:
        r"""Updates the passwordCredentials associated with a service principal.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/servicePrincipals/{objectId}/passwordCredentials", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicePrincipalsUpdatePasswordCredentialsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def signed_in_user_get(self, request: operations.SignedInUserGetRequest) -> operations.SignedInUserGetResponse:
        r"""Gets the details for the currently logged-in user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/me", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SignedInUserGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.user = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.user = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def signed_in_user_list_owned_objects(self, request: operations.SignedInUserListOwnedObjectsRequest) -> operations.SignedInUserListOwnedObjectsResponse:
        r"""Get the list of directory objects that are owned by the user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/me/ownedObjects", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SignedInUserListOwnedObjectsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DirectoryObjectListResult])
                res.directory_object_list_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DirectoryObjectListResult])
                res.directory_object_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def users_create(self, request: operations.UsersCreateRequest) -> operations.UsersCreateResponse:
        r"""Create a new user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/users", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.user = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.user = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def users_delete(self, request: operations.UsersDeleteRequest) -> operations.UsersDeleteResponse:
        r"""Delete a user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/users/{upnOrObjectId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def users_get(self, request: operations.UsersGetRequest) -> operations.UsersGetResponse:
        r"""Gets user information from the directory.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/users/{upnOrObjectId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.user = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.user = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def users_get_member_groups(self, request: operations.UsersGetMemberGroupsRequest) -> operations.UsersGetMemberGroupsResponse:
        r"""Gets a collection that contains the object IDs of the groups of which the user is a member.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/users/{objectId}/getMemberGroups", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersGetMemberGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserGetMemberGroupsResult])
                res.user_get_member_groups_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserGetMemberGroupsResult])
                res.user_get_member_groups_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def users_list(self, request: operations.UsersListRequest) -> operations.UsersListResponse:
        r"""Gets list of users for the current tenant.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/users", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserListResult])
                res.user_list_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserListResult])
                res.user_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def users_update(self, request: operations.UsersUpdateRequest) -> operations.UsersUpdateResponse:
        r"""Updates a user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/users/{upnOrObjectId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
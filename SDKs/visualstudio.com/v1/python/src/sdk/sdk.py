

import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://online.visualstudio.com",
	"https://online.visualstudio.com",
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
        
    
    
    
    def delete_api_v1_environments_environment_id_(self, request: operations.DeleteAPIV1EnvironmentsEnvironmentIDRequest) -> operations.DeleteAPIV1EnvironmentsEnvironmentIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Environments/{environmentId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAPIV1EnvironmentsEnvironmentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def delete_api_v1_environments_environment_id_ports_port_(self, request: operations.DeleteAPIV1EnvironmentsEnvironmentIDPortsPortRequest) -> operations.DeleteAPIV1EnvironmentsEnvironmentIDPortsPortResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Environments/{environmentId}/ports/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAPIV1EnvironmentsEnvironmentIDPortsPortResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def delete_api_v1_geneva_actions_environments_environment_id_(self, request: operations.DeleteAPIV1GenevaActionsEnvironmentsEnvironmentIDRequest) -> operations.DeleteAPIV1GenevaActionsEnvironmentsEnvironmentIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/GenevaActions/Environments/{environmentId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAPIV1GenevaActionsEnvironmentsEnvironmentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def delete_api_v1_secrets_secret_id_(self, request: operations.DeleteAPIV1SecretsSecretIDRequest) -> operations.DeleteAPIV1SecretsSecretIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Secrets/{secretId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAPIV1SecretsSecretIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def delete_api_v1_tenant_tenant_id_(self, request: operations.DeleteAPIV1TenantTenantIDRequest) -> operations.DeleteAPIV1TenantTenantIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Tenant/{tenantId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAPIV1TenantTenantIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def delete_api_v1_user_subscriptions(self, request: operations.DeleteAPIV1UserSubscriptionsRequest) -> operations.DeleteAPIV1UserSubscriptionsResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/UserSubscriptions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAPIV1UserSubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_api_v1_tenant_tenant_id_pool_group_pool_group_name_(self, request: operations.DeleteAPIV1TenantTenantIDPoolGroupPoolGroupNameRequest) -> operations.DeleteAPIV1TenantTenantIDPoolGroupPoolGroupNameResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/tenant/{tenantId}/PoolGroup/{poolGroupName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAPIV1TenantTenantIDPoolGroupPoolGroupNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def delete_api_v1_tenant_tenant_id_pool_pool_name_(self, request: operations.DeleteAPIV1TenantTenantIDPoolPoolNameRequest) -> operations.DeleteAPIV1TenantTenantIDPoolPoolNameResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/tenant/{tenantId}/Pool/{poolName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAPIV1TenantTenantIDPoolPoolNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def delete_api_v1_tenant_tenant_id_pool_pool_name_vm_vm_name_(self, request: operations.DeleteAPIV1TenantTenantIDPoolPoolNameVMVMNameRequest) -> operations.DeleteAPIV1TenantTenantIDPoolPoolNameVMVMNameResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAPIV1TenantTenantIDPoolPoolNameVMVMNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_api_v1_agents_family_(self, request: operations.GetAPIV1AgentsFamilyRequest) -> operations.GetAPIV1AgentsFamilyResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Agents/{family}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1AgentsFamilyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AgentResponse])
                res.agent_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AgentResponse])
                res.agent_response = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v1_environments(self, request: operations.GetAPIV1EnvironmentsRequest) -> operations.GetAPIV1EnvironmentsResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/Environments"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1EnvironmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CloudEnvironmentResult]])
                res.cloud_environment_results = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CloudEnvironmentResult]])
                res.cloud_environment_results = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v1_environments_environment_id_archive(self, request: operations.GetAPIV1EnvironmentsEnvironmentIDArchiveRequest) -> operations.GetAPIV1EnvironmentsEnvironmentIDArchiveResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Environments/{environmentId}/archive", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1EnvironmentsEnvironmentIDArchiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnfilteredCloudEnvironmentResult])
                res.unfiltered_cloud_environment_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnfilteredCloudEnvironmentResult])
                res.unfiltered_cloud_environment_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out

        return res

    
    def get_api_v1_environments_environment_id_heartbeattoken(self, request: operations.GetAPIV1EnvironmentsEnvironmentIDHeartbeattokenRequest) -> operations.GetAPIV1EnvironmentsEnvironmentIDHeartbeattokenResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Environments/{environmentId}/heartbeattoken", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1EnvironmentsEnvironmentIDHeartbeattokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v1_environments_environment_id_logs(self, request: operations.GetAPIV1EnvironmentsEnvironmentIDLogsRequest) -> operations.GetAPIV1EnvironmentsEnvironmentIDLogsResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Environments/{environmentId}/logs", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1EnvironmentsEnvironmentIDLogsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_api_v1_environments_environment_id_logs_200_application_json_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.get_api_v1_environments_environment_id_logs_200_text_json_string = r.content
            if utils.match_content_type(content_type, "text/plain"):
                res.get_api_v1_environments_environment_id_logs_200_text_plain_string = r.content
        elif r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_api_v1_environments_environment_id_state(self, request: operations.GetAPIV1EnvironmentsEnvironmentIDStateRequest) -> operations.GetAPIV1EnvironmentsEnvironmentIDStateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Environments/{environmentId}/state", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1EnvironmentsEnvironmentIDStateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_api_v1_environments_environment_id_updates(self, request: operations.GetAPIV1EnvironmentsEnvironmentIDUpdatesRequest) -> operations.GetAPIV1EnvironmentsEnvironmentIDUpdatesResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Environments/{environmentId}/updates", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1EnvironmentsEnvironmentIDUpdatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v1_geneva_actions_billing_environment_id_(self, request: operations.GetAPIV1GenevaActionsBillingEnvironmentIDRequest) -> operations.GetAPIV1GenevaActionsBillingEnvironmentIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/GenevaActions/Billing/{environmentId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1GenevaActionsBillingEnvironmentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BillSummary])
                res.bill_summary = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BillSummary])
                res.bill_summary = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v1_geneva_actions_billing_environment_id_state_changes(self, request: operations.GetAPIV1GenevaActionsBillingEnvironmentIDStateChangesRequest) -> operations.GetAPIV1GenevaActionsBillingEnvironmentIDStateChangesResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/GenevaActions/Billing/{environmentId}/state-changes", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1GenevaActionsBillingEnvironmentIDStateChangesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EnvironmentStateChange])
                res.environment_state_change = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EnvironmentStateChange])
                res.environment_state_change = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v1_geneva_actions_configuration_target_key_(self, request: operations.GetAPIV1GenevaActionsConfigurationTargetKeyRequest) -> operations.GetAPIV1GenevaActionsConfigurationTargetKeyResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/GenevaActions/Configuration/{target}/{key}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1GenevaActionsConfigurationTargetKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SystemConfigurationResponse])
                res.system_configuration_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SystemConfigurationResponse])
                res.system_configuration_response = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v1_geneva_actions_environments_environment_id_(self, request: operations.GetAPIV1GenevaActionsEnvironmentsEnvironmentIDRequest) -> operations.GetAPIV1GenevaActionsEnvironmentsEnvironmentIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/GenevaActions/Environments/{environmentId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1GenevaActionsEnvironmentsEnvironmentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v1_locations(self) -> operations.GetAPIV1LocationsResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/Locations"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1LocationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationsResult])
                res.locations_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationsResult])
                res.locations_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_api_v1_locations_location_(self, request: operations.GetAPIV1LocationsLocationRequest) -> operations.GetAPIV1LocationsLocationResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Locations/{location}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1LocationsLocationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationInfoResult])
                res.location_info_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationInfoResult])
                res.location_info_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v1_plans(self) -> operations.GetAPIV1PlansResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/Plans"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1PlansResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PlanResult]])
                res.plan_results = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PlanResult]])
                res.plan_results = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v1_plans_subscription_id_resource_group_name_resource_name_(self, request: operations.GetAPIV1PlansSubscriptionIDResourceGroupNameResourceNameRequest) -> operations.GetAPIV1PlansSubscriptionIDResourceGroupNameResourceNameResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Plans/{subscriptionId}/{resourceGroupName}/{resourceName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1PlansSubscriptionIDResourceGroupNameResourceNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlanResult])
                res.plan_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlanResult])
                res.plan_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v1_sas(self) -> operations.GetAPIV1SasResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/Sas"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1SasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ScopedSecretResultBody]])
                res.scoped_secret_result_bodies = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ScopedSecretResultBody]])
                res.scoped_secret_result_bodies = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v1_secrets(self, request: operations.GetAPIV1SecretsRequest) -> operations.GetAPIV1SecretsResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/Secrets"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1SecretsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ScopedSecretResultBody]])
                res.scoped_secret_result_bodies = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ScopedSecretResultBody]])
                res.scoped_secret_result_bodies = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v1_tenant_tenant_id_(self, request: operations.GetAPIV1TenantTenantIDRequest) -> operations.GetAPIV1TenantTenantIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Tenant/{tenantId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1TenantTenantIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TenantInfoResult])
                res.tenant_info_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TenantInfoResult])
                res.tenant_info_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_api_v1_pools_default(self, request: operations.GetAPIV1PoolsDefaultRequest) -> operations.GetAPIV1PoolsDefaultResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/pools/default"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1PoolsDefaultResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PoolStatusResponseBody]])
                res.pool_status_response_bodies = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PoolStatusResponseBody]])
                res.pool_status_response_bodies = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v1_tenant_tenant_id_pool_group_pool_group_name_(self, request: operations.GetAPIV1TenantTenantIDPoolGroupPoolGroupNameRequest) -> operations.GetAPIV1TenantTenantIDPoolGroupPoolGroupNameResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/tenant/{tenantId}/PoolGroup/{poolGroupName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1TenantTenantIDPoolGroupPoolGroupNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PoolGroupResult])
                res.pool_group_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PoolGroupResult])
                res.pool_group_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_api_v1_tenant_tenant_id_pool_pool_name_(self, request: operations.GetAPIV1TenantTenantIDPoolPoolNameRequest) -> operations.GetAPIV1TenantTenantIDPoolPoolNameResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/tenant/{tenantId}/Pool/{poolName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1TenantTenantIDPoolPoolNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PoolResult])
                res.pool_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PoolResult])
                res.pool_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_api_v1_tenant_tenant_id_pool_pool_name_vm(self, request: operations.GetAPIV1TenantTenantIDPoolPoolNameVMRequest) -> operations.GetAPIV1TenantTenantIDPoolPoolNameVMResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/tenant/{tenantId}/pool/{poolName}/Vm", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1TenantTenantIDPoolPoolNameVMResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.VMResult]])
                res.vm_results = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.VMResult]])
                res.vm_results = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_api_v1_tenant_tenant_id_pool_pool_name_vm_vm_name_(self, request: operations.GetAPIV1TenantTenantIDPoolPoolNameVMVMNameRequest) -> operations.GetAPIV1TenantTenantIDPoolPoolNameVMVMNameResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1TenantTenantIDPoolPoolNameVMVMNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VMResult])
                res.vm_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VMResult])
                res.vm_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_health(self) -> operations.GetHealthResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/health"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHealthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_warmup(self) -> operations.GetWarmupResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/warmup"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWarmupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_environment_route(self, request: operations.GetEnvironmentRouteRequest) -> operations.GetEnvironmentRouteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Environments/{environmentId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEnvironmentRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def patch_api_v1_environments_environment_id_(self, request: operations.PatchAPIV1EnvironmentsEnvironmentIDRequest) -> operations.PatchAPIV1EnvironmentsEnvironmentIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Environments/{environmentId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchAPIV1EnvironmentsEnvironmentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.message_codes = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.message_codes = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def patch_api_v1_environments_environment_id_folder(self, request: operations.PatchAPIV1EnvironmentsEnvironmentIDFolderRequest) -> operations.PatchAPIV1EnvironmentsEnvironmentIDFolderResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Environments/{environmentId}/folder", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchAPIV1EnvironmentsEnvironmentIDFolderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.message_codes = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.message_codes = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def patch_api_v1_environments_environment_id_restore(self, request: operations.PatchAPIV1EnvironmentsEnvironmentIDRestoreRequest) -> operations.PatchAPIV1EnvironmentsEnvironmentIDRestoreResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Environments/{environmentId}/restore", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchAPIV1EnvironmentsEnvironmentIDRestoreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def patch_api_v1_tenant_tenant_id_pool_group_pool_group_name_(self, request: operations.PatchAPIV1TenantTenantIDPoolGroupPoolGroupNameRequest) -> operations.PatchAPIV1TenantTenantIDPoolGroupPoolGroupNameResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/tenant/{tenantId}/PoolGroup/{poolGroupName}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchAPIV1TenantTenantIDPoolGroupPoolGroupNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def patch_api_v1_tenant_tenant_id_pool_pool_name_(self, request: operations.PatchAPIV1TenantTenantIDPoolPoolNameRequest) -> operations.PatchAPIV1TenantTenantIDPoolPoolNameResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/tenant/{tenantId}/Pool/{poolName}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchAPIV1TenantTenantIDPoolPoolNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PoolResult])
                res.pool_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PoolResult])
                res.pool_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def post_api_v1_agent_telemetry(self, request: operations.PostAPIV1AgentTelemetryRequest) -> operations.PostAPIV1AgentTelemetryResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/AgentTelemetry"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1AgentTelemetryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def post_api_v1_environments(self, request: operations.PostAPIV1EnvironmentsRequest) -> operations.PostAPIV1EnvironmentsResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/Environments"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1EnvironmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 307:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out

        return res

    
    def post_api_v1_environments_environment_id_archive(self, request: operations.PostAPIV1EnvironmentsEnvironmentIDArchiveRequest) -> operations.PostAPIV1EnvironmentsEnvironmentIDArchiveResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Environments/{environmentId}/archive", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1EnvironmentsEnvironmentIDArchiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out

        return res

    
    def post_api_v1_environments_environment_id_export(self, request: operations.PostAPIV1EnvironmentsEnvironmentIDExportRequest) -> operations.PostAPIV1EnvironmentsEnvironmentIDExportResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Environments/{environmentId}/export", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1EnvironmentsEnvironmentIDExportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out

        return res

    
    def post_api_v1_environments_environment_id_shutdown(self, request: operations.PostAPIV1EnvironmentsEnvironmentIDShutdownRequest) -> operations.PostAPIV1EnvironmentsEnvironmentIDShutdownResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Environments/{environmentId}/shutdown", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1EnvironmentsEnvironmentIDShutdownResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def post_api_v1_environments_environment_id_start(self, request: operations.PostAPIV1EnvironmentsEnvironmentIDStartRequest) -> operations.PostAPIV1EnvironmentsEnvironmentIDStartResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Environments/{environmentId}/start", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1EnvironmentsEnvironmentIDStartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out

        return res

    
    def post_api_v1_geneva_actions_billing_environment_id_state_changes(self, request: operations.PostAPIV1GenevaActionsBillingEnvironmentIDStateChangesRequest) -> operations.PostAPIV1GenevaActionsBillingEnvironmentIDStateChangesResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/GenevaActions/Billing/{environmentId}/state-changes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1GenevaActionsBillingEnvironmentIDStateChangesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EnvironmentStateChange])
                res.environment_state_change = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EnvironmentStateChange])
                res.environment_state_change = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def post_api_v1_geneva_actions_configuration_target_(self, request: operations.PostAPIV1GenevaActionsConfigurationTargetRequest) -> operations.PostAPIV1GenevaActionsConfigurationTargetResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/GenevaActions/Configuration/{target}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1GenevaActionsConfigurationTargetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SystemConfigurationResponse])
                res.system_configuration_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SystemConfigurationResponse])
                res.system_configuration_response = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def post_api_v1_geneva_actions_privacy_refresh_profile_telemetry_properties(self, request: operations.PostAPIV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequest) -> operations.PostAPIV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/GenevaActions/Privacy/refresh-profile-telemetry-properties"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RefreshProfileTelemetryPropertiesResponse])
                res.refresh_profile_telemetry_properties_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RefreshProfileTelemetryPropertiesResponse])
                res.refresh_profile_telemetry_properties_response = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def post_api_v1_heart_beat(self, request: operations.PostAPIV1HeartBeatRequest) -> operations.PostAPIV1HeartBeatResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/HeartBeat"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1HeartBeatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def post_api_v1_prebuilds_pools_pool_id_instances(self, request: operations.PostAPIV1PrebuildsPoolsPoolIDInstancesRequest) -> operations.PostAPIV1PrebuildsPoolsPoolIDInstancesResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Prebuilds/pools/{poolId}/instances", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1PrebuildsPoolsPoolIDInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def post_api_v1_prebuilds_templates(self, request: operations.PostAPIV1PrebuildsTemplatesRequest) -> operations.PostAPIV1PrebuildsTemplatesResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/Prebuilds/templates"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1PrebuildsTemplatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def post_api_v1_secrets(self, request: operations.PostAPIV1SecretsRequest) -> operations.PostAPIV1SecretsResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/Secrets"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1SecretsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScopedSecretResultBody])
                res.scoped_secret_result_body = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScopedSecretResultBody])
                res.scoped_secret_result_body = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def post_api_v1_subscriptions_subscription_id_providers_provider_namespace_resource_type_resource_read_begin(self, request: operations.PostAPIV1SubscriptionsSubscriptionIDProvidersProviderNamespaceResourceTypeResourceReadBeginRequest) -> operations.PostAPIV1SubscriptionsSubscriptionIDProvidersProviderNamespaceResourceTypeResourceReadBeginResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Subscriptions/{subscriptionId}/providers/{providerNamespace}/{resourceType}/resourceReadBegin", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1SubscriptionsSubscriptionIDProvidersProviderNamespaceResourceTypeResourceReadBeginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_delete_all_codespaces(self, request: operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllCodespacesRequest) -> operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllCodespacesResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/deleteAllCodespaces", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllCodespacesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_delete_all_environments(self, request: operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsRequest) -> operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/deleteAllEnvironments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_delete_delegates(self, request: operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteDelegatesRequest) -> operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteDelegatesResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/deleteDelegates", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteDelegatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_read_all_codespaces(self, request: operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllCodespacesRequest) -> operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllCodespacesResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/readAllCodespaces", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllCodespacesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_read_all_environments(self, request: operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllEnvironmentsRequest) -> operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllEnvironmentsResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/readAllEnvironments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllEnvironmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_read_delegates(self, request: operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadDelegatesRequest) -> operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadDelegatesResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/readDelegates", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadDelegatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_resource_creation_completed(self, request: operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationCompletedRequest) -> operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationCompletedResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/resourceCreationCompleted", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationCompletedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_resource_creation_validate(self, request: operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationValidateRequest) -> operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationValidateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/resourceCreationValidate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationValidateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_resource_deletion_validate(self, request: operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceDeletionValidateRequest) -> operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceDeletionValidateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/resourceDeletionValidate", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceDeletionValidateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_resource_patch_completed(self, request: operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchCompletedRequest) -> operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchCompletedResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/resourcePatchCompleted", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchCompletedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_resource_patch_validate(self, request: operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchValidateRequest) -> operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchValidateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/resourcePatchValidate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchValidateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_resource_read_begin(self, request: operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceReadBeginRequest) -> operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceReadBeginResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/resourceReadBegin", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceReadBeginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_write_codespaces(self, request: operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteCodespacesRequest) -> operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteCodespacesResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/writeCodespaces", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteCodespacesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_write_delegates(self, request: operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesRequest) -> operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/writeDelegates", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_write_environments(self, request: operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsRequest) -> operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/writeEnvironments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_read_begin(self, request: operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceReadBeginRequest) -> operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceReadBeginResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/resourceReadBegin", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceReadBeginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_api_v1_user_subscriptions(self, request: operations.PostAPIV1UserSubscriptionsRequest) -> operations.PostAPIV1UserSubscriptionsResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/UserSubscriptions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1UserSubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_api_v1_tenant_tenant_id_pool_pool_name_vm_vm_name_start(self, request: operations.PostAPIV1TenantTenantIDPoolPoolNameVMVMNameStartRequest) -> operations.PostAPIV1TenantTenantIDPoolPoolNameVMVMNameStartResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}/start", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1TenantTenantIDPoolPoolNameVMVMNameStartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def post_api_v1_tenant_tenant_id_pool_pool_name_vm_vm_name_stop(self, request: operations.PostAPIV1TenantTenantIDPoolPoolNameVMVMNameStopRequest) -> operations.PostAPIV1TenantTenantIDPoolPoolNameVMVMNameStopResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}/stop", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1TenantTenantIDPoolPoolNameVMVMNameStopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def put_api_v1_environments_environment_id_ports_port_(self, request: operations.PutAPIV1EnvironmentsEnvironmentIDPortsPortRequest) -> operations.PutAPIV1EnvironmentsEnvironmentIDPortsPortResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Environments/{environmentId}/ports/{port}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAPIV1EnvironmentsEnvironmentIDPortsPortResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.message_codes = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def put_api_v1_geneva_actions_environments_environment_id_archive(self, request: operations.PutAPIV1GenevaActionsEnvironmentsEnvironmentIDArchiveRequest) -> operations.PutAPIV1GenevaActionsEnvironmentsEnvironmentIDArchiveResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/GenevaActions/Environments/{environmentId}/archive", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAPIV1GenevaActionsEnvironmentsEnvironmentIDArchiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def put_api_v1_geneva_actions_environments_environment_id_shutdown(self, request: operations.PutAPIV1GenevaActionsEnvironmentsEnvironmentIDShutdownRequest) -> operations.PutAPIV1GenevaActionsEnvironmentsEnvironmentIDShutdownResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/GenevaActions/Environments/{environmentId}/shutdown", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAPIV1GenevaActionsEnvironmentsEnvironmentIDShutdownResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def put_api_v1_prebuilds_pools_pool_id_instances(self, request: operations.PutAPIV1PrebuildsPoolsPoolIDInstancesRequest) -> operations.PutAPIV1PrebuildsPoolsPoolIDInstancesResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Prebuilds/pools/{poolId}/instances", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAPIV1PrebuildsPoolsPoolIDInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def put_api_v1_secrets_secret_id_(self, request: operations.PutAPIV1SecretsSecretIDRequest) -> operations.PutAPIV1SecretsSecretIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Secrets/{secretId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAPIV1SecretsSecretIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScopedSecretResultBody])
                res.scoped_secret_result_body = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScopedSecretResultBody])
                res.scoped_secret_result_body = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def put_api_v1_subscriptions_subscription_id_providers_provider_namespace_resource_type_subscription_life_cycle_notification(self, request: operations.PutAPIV1SubscriptionsSubscriptionIDProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequest) -> operations.PutAPIV1SubscriptionsSubscriptionIDProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Subscriptions/{subscriptionId}/providers/{providerNamespace}/{resourceType}/SubscriptionLifeCycleNotification", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAPIV1SubscriptionsSubscriptionIDProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_(self, request: operations.PutAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameRequest) -> operations.PutAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_api_v1_tenant_tenant_id_(self, request: operations.PutAPIV1TenantTenantIDRequest) -> operations.PutAPIV1TenantTenantIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Tenant/{tenantId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAPIV1TenantTenantIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def put_api_v1_tenant_tenant_id_pool_group_pool_group_name_(self, request: operations.PutAPIV1TenantTenantIDPoolGroupPoolGroupNameRequest) -> operations.PutAPIV1TenantTenantIDPoolGroupPoolGroupNameResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/tenant/{tenantId}/PoolGroup/{poolGroupName}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAPIV1TenantTenantIDPoolGroupPoolGroupNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def put_api_v1_tenant_tenant_id_pool_pool_name_(self, request: operations.PutAPIV1TenantTenantIDPoolPoolNameRequest) -> operations.PutAPIV1TenantTenantIDPoolPoolNameResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/tenant/{tenantId}/Pool/{poolName}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAPIV1TenantTenantIDPoolPoolNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PoolResult])
                res.pool_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PoolResult])
                res.pool_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PoolResult])
                res.pool_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PoolResult])
                res.pool_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def put_api_v1_tenant_tenant_id_pool_pool_name_vm_vm_name_(self, request: operations.PutAPIV1TenantTenantIDPoolPoolNameVMVMNameRequest) -> operations.PutAPIV1TenantTenantIDPoolPoolNameVMVMNameResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAPIV1TenantTenantIDPoolPoolNameVMVMNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VMResult])
                res.vm_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VMResult])
                res.vm_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VMResult])
                res.vm_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VMResult])
                res.vm_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def update_environment_route(self, request: operations.UpdateEnvironmentRouteRequest) -> operations.UpdateEnvironmentRouteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Environments/{environmentId}/_callback", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateEnvironmentRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloudEnvironmentResult])
                res.cloud_environment_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
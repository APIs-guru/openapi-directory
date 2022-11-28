

import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://cloud.redhat.com/{basePath}",
	"http://localhost:{port}/{basePath}",
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
        
    
    
    
    def applied_inventories_tags_for_service_offering(self, request: operations.AppliedInventoriesTagsForServiceOfferingRequest) -> operations.AppliedInventoriesTagsForServiceOfferingResponse:
        r"""Invokes computing of ServiceInventories tags for given ServiceOffering
        Returns an array of inventories tags
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/service_offerings/{id}/applied_inventories_tags", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AppliedInventoriesTagsForServiceOfferingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Tag]])
                res.tags = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_documentation(self) -> operations.GetDocumentationResponse:
        r"""Return this API document in JSON format
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/openapi.json"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDocumentationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_documentation_200_application_json_object = out

        return res

    
    def incremental_refresh_source(self, request: operations.IncrementalRefreshSourceRequest) -> operations.IncrementalRefreshSourceResponse:
        r"""Incremental Refresh an existing Source
        Incremental Refresh a source object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sources/{id}/incremental_refresh", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IncrementalRefreshSourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def list_service_credential_types(self, request: operations.ListServiceCredentialTypesRequest) -> operations.ListServiceCredentialTypesResponse:
        r"""List ServiceCredentialTypes
        Returns an array of ServiceCredentialType objects
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/service_credential_types"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceCredentialTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceCredentialTypesCollection])
                res.service_credential_types_collection = out

        return res

    
    def list_service_credentials(self, request: operations.ListServiceCredentialsRequest) -> operations.ListServiceCredentialsResponse:
        r"""List ServiceCredentials
        Returns an array of ServiceCredential objects
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/service_credentials"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceCredentialsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceCredentialsCollection])
                res.service_credentials_collection = out

        return res

    
    def list_service_instances(self, request: operations.ListServiceInstancesRequest) -> operations.ListServiceInstancesResponse:
        r"""List ServiceInstances
        Returns an array of ServiceInstance objects
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/service_instances"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceInstancesCollection])
                res.service_instances_collection = out

        return res

    
    def list_service_inventories(self, request: operations.ListServiceInventoriesRequest) -> operations.ListServiceInventoriesResponse:
        r"""List ServiceInventories
        Returns an array of ServiceInventory objects
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/service_inventories"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceInventoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceInventoriesCollection])
                res.service_inventories_collection = out

        return res

    
    def list_service_inventory_tags(self, request: operations.ListServiceInventoryTagsRequest) -> operations.ListServiceInventoryTagsResponse:
        r"""List Tags for ServiceInventory
        Returns an array of Tag objects
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/service_inventories/{id}/tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceInventoryTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagsCollection])
                res.tags_collection = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def list_service_offering_nodes(self, request: operations.ListServiceOfferingNodesRequest) -> operations.ListServiceOfferingNodesResponse:
        r"""List ServiceOfferingNodes
        Returns an array of ServiceOfferingNode objects
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/service_offering_nodes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceOfferingNodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceOfferingNodesCollection])
                res.service_offering_nodes_collection = out

        return res

    
    def list_service_offering_service_instances(self, request: operations.ListServiceOfferingServiceInstancesRequest) -> operations.ListServiceOfferingServiceInstancesResponse:
        r"""List ServiceInstances for ServiceOffering
        Returns an array of ServiceInstance objects
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/service_offerings/{id}/service_instances", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceOfferingServiceInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceInstancesCollection])
                res.service_instances_collection = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def list_service_offering_service_offering_nodes(self, request: operations.ListServiceOfferingServiceOfferingNodesRequest) -> operations.ListServiceOfferingServiceOfferingNodesResponse:
        r"""List ServiceOfferingNodes for ServiceOffering
        Returns an array of ServiceOfferingNode objects
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/service_offerings/{id}/service_offering_nodes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceOfferingServiceOfferingNodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceOfferingNodesCollection])
                res.service_offering_nodes_collection = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def list_service_offering_service_plans(self, request: operations.ListServiceOfferingServicePlansRequest) -> operations.ListServiceOfferingServicePlansResponse:
        r"""List ServicePlans for ServiceOffering
        Returns an array of ServicePlan objects
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/service_offerings/{id}/service_plans", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceOfferingServicePlansResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServicePlansCollection])
                res.service_plans_collection = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def list_service_offerings(self, request: operations.ListServiceOfferingsRequest) -> operations.ListServiceOfferingsResponse:
        r"""List ServiceOfferings
        Returns an array of ServiceOffering objects
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/service_offerings"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceOfferingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceOfferingsCollection])
                res.service_offerings_collection = out

        return res

    
    def list_service_plans(self, request: operations.ListServicePlansRequest) -> operations.ListServicePlansResponse:
        r"""List ServicePlans
        Returns an array of ServicePlan objects
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/service_plans"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServicePlansResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServicePlansCollection])
                res.service_plans_collection = out

        return res

    
    def list_source_service_instances(self, request: operations.ListSourceServiceInstancesRequest) -> operations.ListSourceServiceInstancesResponse:
        r"""List ServiceInstances for Source
        Returns an array of ServiceInstance objects
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sources/{id}/service_instances", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSourceServiceInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceInstancesCollection])
                res.service_instances_collection = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def list_source_service_inventories(self, request: operations.ListSourceServiceInventoriesRequest) -> operations.ListSourceServiceInventoriesResponse:
        r"""List ServiceInventories for Source
        Returns an array of ServiceInventory objects
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sources/{id}/service_inventories", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSourceServiceInventoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceInventoriesCollection])
                res.service_inventories_collection = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def list_source_service_offering_nodes(self, request: operations.ListSourceServiceOfferingNodesRequest) -> operations.ListSourceServiceOfferingNodesResponse:
        r"""List ServiceOfferingNodes for Source
        Returns an array of ServiceOfferingNode objects
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sources/{id}/service_offering_nodes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSourceServiceOfferingNodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceOfferingNodesCollection])
                res.service_offering_nodes_collection = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def list_source_service_offerings(self, request: operations.ListSourceServiceOfferingsRequest) -> operations.ListSourceServiceOfferingsResponse:
        r"""List ServiceOfferings for Source
        Returns an array of ServiceOffering objects
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sources/{id}/service_offerings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSourceServiceOfferingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceOfferingsCollection])
                res.service_offerings_collection = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def list_source_service_plans(self, request: operations.ListSourceServicePlansRequest) -> operations.ListSourceServicePlansResponse:
        r"""List ServicePlans for Source
        Returns an array of ServicePlan objects
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sources/{id}/service_plans", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSourceServicePlansResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServicePlansCollection])
                res.service_plans_collection = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def list_source_tasks(self, request: operations.ListSourceTasksRequest) -> operations.ListSourceTasksResponse:
        r"""List Tasks for Source
        Returns an array of Task objects
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sources/{id}/tasks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSourceTasksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TasksCollection])
                res.tasks_collection = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def list_sources(self, request: operations.ListSourcesRequest) -> operations.ListSourcesResponse:
        r"""List Sources
        Returns an array of Source objects
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sources"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSourcesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SourcesCollection])
                res.sources_collection = out

        return res

    
    def list_tags(self, request: operations.ListTagsRequest) -> operations.ListTagsResponse:
        r"""List Tags
        Returns an array of Tag objects
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tags"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagsCollection])
                res.tags_collection = out

        return res

    
    def list_tasks(self, request: operations.ListTasksRequest) -> operations.ListTasksResponse:
        r"""List Tasks
        Returns an array of Task objects
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tasks"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTasksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TasksCollection])
                res.tasks_collection = out

        return res

    
    def order_service_offering(self, request: operations.OrderServiceOfferingRequest) -> operations.OrderServiceOfferingResponse:
        r"""Order an existing ServiceOffering
        Returns a Task id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/service_offerings/{id}/order", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OrderServiceOfferingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.OrderServiceOffering200ApplicationJSON])
                res.order_service_offering_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def post_graph_ql(self, request: operations.PostGraphQlRequest) -> operations.PostGraphQlResponse:
        r"""Perform a GraphQL Query
        Performs a GraphQL Query
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/graphql"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGraphQlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphQlResponse])
                res.graph_ql_response = out

        return res

    
    def refresh_source(self, request: operations.RefreshSourceRequest) -> operations.RefreshSourceResponse:
        r""" Refresh an existing Source
        Refresh a source object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sources/{id}/refresh", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RefreshSourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def show_service_credential(self, request: operations.ShowServiceCredentialRequest) -> operations.ShowServiceCredentialResponse:
        r"""Show an existing ServiceCredential
        Returns a ServiceCredential object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/service_credentials/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ShowServiceCredentialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceCredential])
                res.service_credential = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def show_service_credential_type(self, request: operations.ShowServiceCredentialTypeRequest) -> operations.ShowServiceCredentialTypeResponse:
        r"""Show an existing ServiceCredentialType
        Returns a ServiceCredentialType object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/service_credential_types/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ShowServiceCredentialTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceCredentialType])
                res.service_credential_type = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def show_service_instance(self, request: operations.ShowServiceInstanceRequest) -> operations.ShowServiceInstanceResponse:
        r"""Show an existing ServiceInstance
        Returns a ServiceInstance object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/service_instances/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ShowServiceInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceInstance])
                res.service_instance = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def show_service_inventory(self, request: operations.ShowServiceInventoryRequest) -> operations.ShowServiceInventoryResponse:
        r"""Show an existing ServiceInventory
        Returns a ServiceInventory object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/service_inventories/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ShowServiceInventoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceInventory])
                res.service_inventory = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def show_service_offering(self, request: operations.ShowServiceOfferingRequest) -> operations.ShowServiceOfferingResponse:
        r"""Show an existing ServiceOffering
        Returns a ServiceOffering object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/service_offerings/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ShowServiceOfferingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceOffering])
                res.service_offering = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def show_service_offering_node(self, request: operations.ShowServiceOfferingNodeRequest) -> operations.ShowServiceOfferingNodeResponse:
        r"""Show an existing ServiceOfferingNode
        Returns a ServiceOfferingNode object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/service_offering_nodes/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ShowServiceOfferingNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceOfferingNode])
                res.service_offering_node = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def show_service_plan(self, request: operations.ShowServicePlanRequest) -> operations.ShowServicePlanResponse:
        r"""Show an existing ServicePlan
        Returns a ServicePlan object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/service_plans/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ShowServicePlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServicePlan])
                res.service_plan = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def show_source(self, request: operations.ShowSourceRequest) -> operations.ShowSourceResponse:
        r"""Show an existing Source
        Returns a Source object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sources/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ShowSourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Source])
                res.source = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def show_task(self, request: operations.ShowTaskRequest) -> operations.ShowTaskResponse:
        r"""Show an existing Task
        Returns a Task object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tasks/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ShowTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Task])
                res.task = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def tag_service_inventory(self, request: operations.TagServiceInventoryRequest) -> operations.TagServiceInventoryResponse:
        r"""Tag a ServiceInventory
        Tags a ServiceInventory object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/service_inventories/{id}/tag", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagServiceInventoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Tag]])
                res.tags = out
        elif r.status_code == 304:
            pass

        return res

    
    def untag_service_inventory(self, request: operations.UntagServiceInventoryRequest) -> operations.UntagServiceInventoryResponse:
        r"""Untag a ServiceInventory
        Untags a ServiceInventory object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/service_inventories/{id}/untag", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UntagServiceInventoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def update_task(self, request: operations.UpdateTaskRequest) -> operations.UpdateTaskResponse:
        r"""Update an existing Task
        Updates a Task object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tasks/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
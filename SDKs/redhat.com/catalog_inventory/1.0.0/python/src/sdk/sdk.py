import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://cloud.redhat.com/{basePath}",
	"http://localhost:{port}/{basePath}",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    
    def config_security(self, security: shared.Security):
        self.client = utils.configure_security_client(security)

    
    def applied_inventories_tags_for_service_offering(self, request: operations.AppliedInventoriesTagsForServiceOfferingRequest) -> operations.AppliedInventoriesTagsForServiceOfferingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/service_offerings/{id}/applied_inventories_tags", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/openapi.json"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDocumentationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_documentation_200_application_json_object = out

        return res

    
    def incremental_refresh_source(self, request: operations.IncrementalRefreshSourceRequest) -> operations.IncrementalRefreshSourceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/sources/{id}/incremental_refresh", request.path_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/service_credential_types"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceCredentialTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceCredentialTypesCollection])
                res.service_credential_types_collection = out

        return res

    
    def list_service_credentials(self, request: operations.ListServiceCredentialsRequest) -> operations.ListServiceCredentialsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/service_credentials"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceCredentialsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceCredentialsCollection])
                res.service_credentials_collection = out

        return res

    
    def list_service_instances(self, request: operations.ListServiceInstancesRequest) -> operations.ListServiceInstancesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/service_instances"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceInstancesCollection])
                res.service_instances_collection = out

        return res

    
    def list_service_inventories(self, request: operations.ListServiceInventoriesRequest) -> operations.ListServiceInventoriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/service_inventories"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceInventoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceInventoriesCollection])
                res.service_inventories_collection = out

        return res

    
    def list_service_inventory_tags(self, request: operations.ListServiceInventoryTagsRequest) -> operations.ListServiceInventoryTagsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/service_inventories/{id}/tags", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/service_offering_nodes"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceOfferingNodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceOfferingNodesCollection])
                res.service_offering_nodes_collection = out

        return res

    
    def list_service_offering_service_instances(self, request: operations.ListServiceOfferingServiceInstancesRequest) -> operations.ListServiceOfferingServiceInstancesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/service_offerings/{id}/service_instances", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/service_offerings/{id}/service_offering_nodes", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/service_offerings/{id}/service_plans", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/service_offerings"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceOfferingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceOfferingsCollection])
                res.service_offerings_collection = out

        return res

    
    def list_service_plans(self, request: operations.ListServicePlansRequest) -> operations.ListServicePlansResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/service_plans"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServicePlansResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServicePlansCollection])
                res.service_plans_collection = out

        return res

    
    def list_source_service_instances(self, request: operations.ListSourceServiceInstancesRequest) -> operations.ListSourceServiceInstancesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/sources/{id}/service_instances", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/sources/{id}/service_inventories", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/sources/{id}/service_offering_nodes", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/sources/{id}/service_offerings", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/sources/{id}/service_plans", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/sources/{id}/tasks", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/sources"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSourcesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SourcesCollection])
                res.sources_collection = out

        return res

    
    def list_tags(self, request: operations.ListTagsRequest) -> operations.ListTagsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tags"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagsCollection])
                res.tags_collection = out

        return res

    
    def list_tasks(self, request: operations.ListTasksRequest) -> operations.ListTasksResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tasks"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTasksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TasksCollection])
                res.tasks_collection = out

        return res

    
    def order_service_offering(self, request: operations.OrderServiceOfferingRequest) -> operations.OrderServiceOfferingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/service_offerings/{id}/order", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/graphql"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGraphQlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphQlResponse])
                res.graph_ql_response = out

        return res

    
    def refresh_source(self, request: operations.RefreshSourceRequest) -> operations.RefreshSourceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/sources/{id}/refresh", request.path_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/service_credentials/{id}", request.path_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/service_credential_types/{id}", request.path_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/service_instances/{id}", request.path_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/service_inventories/{id}", request.path_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/service_offerings/{id}", request.path_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/service_offering_nodes/{id}", request.path_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/service_plans/{id}", request.path_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/sources/{id}", request.path_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tasks/{id}", request.path_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/service_inventories/{id}/tag", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/service_inventories/{id}/untag", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UntagServiceInventoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def update_task(self, request: operations.UpdateTaskRequest) -> operations.UpdateTaskResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tasks/{id}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

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

    
import requests
from typing import Optional
from sdk.models import operations
from . import utils

class DataSources:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def reload_all_datasources_all_nodes(self) -> operations.ReloadAllDatasourcesAllNodesResponse:
        r"""Update properties from data sources
        Update properties from all data source on all nodes. The call is asynchronous.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/datasources/reload"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReloadAllDatasourcesAllNodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReloadAllDatasourcesAllNodes200ApplicationJSON])
                res.reload_all_datasources_all_nodes_200_application_json_object = out

        return res

    
    def reload_all_datasources_one_node(self, request: operations.ReloadAllDatasourcesOneNodeRequest) -> operations.ReloadAllDatasourcesOneNodeResponse:
        r"""Update properties for one node from all data sources
        Update properties from all data sources on one nodes. The call is asynchronous.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/nodes/{nodeId}/fetchData", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReloadAllDatasourcesOneNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReloadAllDatasourcesOneNode200ApplicationJSON])
                res.reload_all_datasources_one_node_200_application_json_object = out

        return res

    
    def reload_one_datasource_all_nodes(self, request: operations.ReloadOneDatasourceAllNodesRequest) -> operations.ReloadOneDatasourceAllNodesResponse:
        r"""Update properties from data sources
        Update properties from all data source on all nodes. The call is asynchronous.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/datasources/reload/{datasourceId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReloadOneDatasourceAllNodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReloadOneDatasourceAllNodes200ApplicationJSON])
                res.reload_one_datasource_all_nodes_200_application_json_object = out

        return res

    
    def reload_one_datasource_one_node(self, request: operations.ReloadOneDatasourceOneNodeRequest) -> operations.ReloadOneDatasourceOneNodeResponse:
        r"""Update properties for one node from a data source
        Update properties from a data source on one nodes. The call is asynchronous.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/nodes/{nodeId}/fetchData/{datasourceId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReloadOneDatasourceOneNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReloadOneDatasourceOneNode200ApplicationJSON])
                res.reload_one_datasource_one_node_200_application_json_object = out

        return res

    
    def create_data_source(self, request: operations.CreateDataSourceRequest) -> operations.CreateDataSourceResponse:
        r"""Create a data source
        Create a new data source
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/datasources"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDataSourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateDataSource200ApplicationJSON])
                res.create_data_source_200_application_json_object = out

        return res

    
    def delete_data_source(self, request: operations.DeleteDataSourceRequest) -> operations.DeleteDataSourceResponse:
        r"""Delete a data source
        Delete a data source configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/datasources/{datasourceId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDataSourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDataSource200ApplicationJSON])
                res.delete_data_source_200_application_json_object = out

        return res

    
    def get_all_data_sources(self) -> operations.GetAllDataSourcesResponse:
        r"""List all data sources
        Get the configuration of all present data sources
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/datasources"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllDataSourcesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAllDataSources200ApplicationJSON])
                res.get_all_data_sources_200_application_json_object = out

        return res

    
    def get_data_source(self, request: operations.GetDataSourceRequest) -> operations.GetDataSourceResponse:
        r"""Get data source configuration
        Get the configuration of a data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/datasources/{datasourceId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDataSourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDataSource200ApplicationJSON])
                res.get_data_source_200_application_json_object = out

        return res

    
    def update_data_source(self, request: operations.UpdateDataSourceRequest) -> operations.UpdateDataSourceResponse:
        r"""Update a data source configuration
        Update the configuration of a data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/datasources/{datasourceId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDataSourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateDataSource200ApplicationJSON])
                res.update_data_source_200_application_json_object = out

        return res

    
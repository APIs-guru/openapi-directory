

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://bulkexports.twilio.com",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
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
        
    
    
    
    def create_export_custom_job(self, request: operations.CreateExportCustomJobRequest) -> operations.CreateExportCustomJobResponse:
        base_url = operations.CREATE_EXPORT_CUSTOM_JOB_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Exports/{ResourceType}/Jobs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateExportCustomJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkexportsV1ExportExportCustomJob])
                res.bulkexports_v1_export_export_custom_job = out

        return res

    
    def delete_job(self, request: operations.DeleteJobRequest) -> operations.DeleteJobResponse:
        base_url = operations.DELETE_JOB_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Exports/Jobs/{JobSid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def fetch_day(self, request: operations.FetchDayRequest) -> operations.FetchDayResponse:
        r"""Fetch a specific Day.
        """
        
        base_url = operations.FETCH_DAY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Exports/{ResourceType}/Days/{Day}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchDayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 307:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkexportsV1ExportDayInstance])
                res.bulkexports_v1_export_day_instance = out

        return res

    
    def fetch_export(self, request: operations.FetchExportRequest) -> operations.FetchExportResponse:
        r"""Fetch a specific Export.
        """
        
        base_url = operations.FETCH_EXPORT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Exports/{ResourceType}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchExportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkexportsV1Export])
                res.bulkexports_v1_export = out

        return res

    
    def fetch_export_configuration(self, request: operations.FetchExportConfigurationRequest) -> operations.FetchExportConfigurationResponse:
        r"""Fetch a specific Export Configuration.
        """
        
        base_url = operations.FETCH_EXPORT_CONFIGURATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Exports/{ResourceType}/Configuration", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchExportConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkexportsV1ExportConfiguration])
                res.bulkexports_v1_export_configuration = out

        return res

    
    def fetch_job(self, request: operations.FetchJobRequest) -> operations.FetchJobResponse:
        base_url = operations.FETCH_JOB_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Exports/Jobs/{JobSid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkexportsV1ExportJob])
                res.bulkexports_v1_export_job = out

        return res

    
    def list_day(self, request: operations.ListDayRequest) -> operations.ListDayResponse:
        r"""Retrieve a list of all Days for a resource.
        """
        
        base_url = operations.LIST_DAY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Exports/{ResourceType}/Days", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListDayListDayResponse])
                res.list_day_response = out

        return res

    
    def list_export_custom_job(self, request: operations.ListExportCustomJobRequest) -> operations.ListExportCustomJobResponse:
        base_url = operations.LIST_EXPORT_CUSTOM_JOB_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Exports/{ResourceType}/Jobs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListExportCustomJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListExportCustomJobListExportCustomJobResponse])
                res.list_export_custom_job_response = out

        return res

    
    def update_export_configuration(self, request: operations.UpdateExportConfigurationRequest) -> operations.UpdateExportConfigurationResponse:
        r"""Update a specific Export Configuration.
        """
        
        base_url = operations.UPDATE_EXPORT_CONFIGURATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Exports/{ResourceType}/Configuration", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateExportConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkexportsV1ExportConfiguration])
                res.bulkexports_v1_export_configuration = out

        return res

    
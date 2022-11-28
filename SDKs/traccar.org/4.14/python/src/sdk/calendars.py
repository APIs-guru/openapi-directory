import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Calendars:
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

    
    def delete_calendars_id_(self, request: operations.DeleteCalendarsIDRequest) -> operations.DeleteCalendarsIDResponse:
        r"""Delete a Calendar
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/calendars/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCalendarsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_calendars(self, request: operations.GetCalendarsRequest) -> operations.GetCalendarsResponse:
        r"""Fetch a list of Calendars
        Without params, it returns a list of Calendars the user has access to
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/calendars"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCalendarsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Calendar]])
                res.calendars = out

        return res

    
    def post_calendars(self, request: operations.PostCalendarsRequest) -> operations.PostCalendarsResponse:
        r"""Create a Calendar
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/calendars"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCalendarsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Calendar])
                res.calendar = out

        return res

    
    def put_calendars_id_(self, request: operations.PutCalendarsIDRequest) -> operations.PutCalendarsIDResponse:
        r"""Update a Calendar
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/calendars/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCalendarsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Calendar])
                res.calendar = out

        return res

    
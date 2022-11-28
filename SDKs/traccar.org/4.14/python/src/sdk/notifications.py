import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Notifications:
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

    
    def delete_notifications_id_(self, request: operations.DeleteNotificationsIDRequest) -> operations.DeleteNotificationsIDResponse:
        r"""Delete a Notification
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/notifications/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNotificationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_notifications(self, request: operations.GetNotificationsRequest) -> operations.GetNotificationsResponse:
        r"""Fetch a list of Notifications
        Without params, it returns a list of Notifications the user has access to
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/notifications"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNotificationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Notification]])
                res.notifications = out

        return res

    
    def get_notifications_types(self) -> operations.GetNotificationsTypesResponse:
        r"""Fetch a list of available Notification types
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/notifications/types"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNotificationsTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.NotificationType]])
                res.notification_types = out

        return res

    
    def post_notifications(self, request: operations.PostNotificationsRequest) -> operations.PostNotificationsResponse:
        r"""Create a Notification
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/notifications"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNotificationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Notification])
                res.notification = out

        return res

    
    def post_notifications_test(self) -> operations.PostNotificationsTestResponse:
        r"""Send test notification to current user via Email and SMS
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/notifications/test"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNotificationsTestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def put_notifications_id_(self, request: operations.PutNotificationsIDRequest) -> operations.PutNotificationsIDResponse:
        r"""Update a Notification
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/notifications/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutNotificationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Notification])
                res.notification = out

        return res

    
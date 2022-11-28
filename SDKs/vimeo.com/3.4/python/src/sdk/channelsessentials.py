import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class ChannelsEssentials:
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

    
    def create_channel(self, request: operations.CreateChannelRequest) -> operations.CreateChannelResponse:
        r"""Create a channel
        This method creates a new channel.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/channels"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.channel+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Channel])
                res.channel = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.channel+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.channel+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def delete_channel(self, request: operations.DeleteChannelRequest) -> operations.DeleteChannelResponse:
        r"""Delete a channel
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/channels/{channel_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def edit_channel(self, request: operations.EditChannelRequest) -> operations.EditChannelResponse:
        r"""Edit a channel
        This method edits the specified channel.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/channels/{channel_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.channel+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Channel])
                res.channel = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.channel+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_channel(self, request: operations.GetChannelRequest) -> operations.GetChannelResponse:
        r"""Get a specific channel
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/channels/{channel_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.channel+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Channel])
                res.channel = out

        return res

    
    def get_channel_subscriptions(self, request: operations.GetChannelSubscriptionsRequest) -> operations.GetChannelSubscriptionsResponse:
        r"""Get all the channels to which a user subscribes
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/channels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChannelSubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.channel+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Channel]])
                res.channels = out
        elif r.status_code == 304:
            pass

        return res

    
    def get_channel_subscriptions_alt1(self, request: operations.GetChannelSubscriptionsAlt1Request) -> operations.GetChannelSubscriptionsAlt1Response:
        r"""Get all the channels to which a user subscribes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/channels"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChannelSubscriptionsAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.channel+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Channel]])
                res.channels = out
        elif r.status_code == 304:
            pass

        return res

    
    def get_channels(self, request: operations.GetChannelsRequest) -> operations.GetChannelsResponse:
        r"""Get all channels
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/channels"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChannelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.channel+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Channel]])
                res.channels = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.channel+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
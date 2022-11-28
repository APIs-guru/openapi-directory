import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class ChannelsSubscriptionsAndSubscribers:
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

    
    def check_if_user_subscribed_to_channel(self, request: operations.CheckIfUserSubscribedToChannelRequest) -> operations.CheckIfUserSubscribedToChannelResponse:
        r"""Check if a user follows a channel
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/channels/{channel_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckIfUserSubscribedToChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def check_if_user_subscribed_to_channel_alt1(self, request: operations.CheckIfUserSubscribedToChannelAlt1Request) -> operations.CheckIfUserSubscribedToChannelAlt1Response:
        r"""Check if a user follows a channel
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/channels/{channel_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckIfUserSubscribedToChannelAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_channel_subscribers(self, request: operations.GetChannelSubscribersRequest) -> operations.GetChannelSubscribersResponse:
        r"""Get all the followers of a channel
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/channels/{channel_id}/users", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChannelSubscribersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.user+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.User]])
                res.users = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.user+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def subscribe_to_channel(self, request: operations.SubscribeToChannelRequest) -> operations.SubscribeToChannelResponse:
        r"""Subscribe a user to a specific channel
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/channels/{channel_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SubscribeToChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def subscribe_to_channel_alt1(self, request: operations.SubscribeToChannelAlt1Request) -> operations.SubscribeToChannelAlt1Response:
        r"""Subscribe a user to a specific channel
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/channels/{channel_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SubscribeToChannelAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def unsubscribe_from_channel(self, request: operations.UnsubscribeFromChannelRequest) -> operations.UnsubscribeFromChannelResponse:
        r"""Unsubscribe a user from a specific channel
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/channels/{channel_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnsubscribeFromChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def unsubscribe_from_channel_alt1(self, request: operations.UnsubscribeFromChannelAlt1Request) -> operations.UnsubscribeFromChannelAlt1Response:
        r"""Unsubscribe a user from a specific channel
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/channels/{channel_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnsubscribeFromChannelAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
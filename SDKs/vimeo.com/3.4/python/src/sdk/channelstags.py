import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class ChannelsTags:
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

    
    def add_channel_tag(self, request: operations.AddChannelTagRequest) -> operations.AddChannelTagResponse:
        r"""Add a specific tag to a channel
        This method adds a single tag to the specified channel.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/channels/{channel_id}/tags/{word}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddChannelTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.tag+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/vnd.vimeo.tag+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.tag+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def add_tags_to_channel(self, request: operations.AddTagsToChannelRequest) -> operations.AddTagsToChannelResponse:
        r"""Add a list of tags to a channel
        This method adds multiple tags to the specified channel.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/channels/{channel_id}/tags", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddTagsToChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.tag+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Tag]])
                res.tags = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.tag+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/vnd.vimeo.tag+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.tag+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def check_if_channel_has_tag(self, request: operations.CheckIfChannelHasTagRequest) -> operations.CheckIfChannelHasTagResponse:
        r"""Check if a tag has been added to a channel
        This method determines whether a specific tag has been added to the channel in question.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/channels/{channel_id}/tags/{word}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckIfChannelHasTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.tag+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.tag+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def delete_tag_from_channel(self, request: operations.DeleteTagFromChannelRequest) -> operations.DeleteTagFromChannelResponse:
        r"""Remove a tag from a channel
        This method removes a single tag from the specified channel.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/channels/{channel_id}/tags/{word}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTagFromChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.tag+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/vnd.vimeo.tag+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.tag+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_channel_tags(self, request: operations.GetChannelTagsRequest) -> operations.GetChannelTagsResponse:
        r"""Get all the tags that have been added to a channel
        This method gets all the tags that have been added to the specified channel.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/channels/{channel_id}/tags", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChannelTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.tag+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Tag]])
                res.tags = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.tag+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
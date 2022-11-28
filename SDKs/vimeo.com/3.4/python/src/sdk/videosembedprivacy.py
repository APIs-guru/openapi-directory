import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class VideosEmbedPrivacy:
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

    
    def add_video_privacy_domain(self, request: operations.AddVideoPrivacyDomainRequest) -> operations.AddVideoPrivacyDomainResponse:
        r"""Permit a video to be embedded on a domain
        If domain privacy is enabled for this video, this method permits the video to be embedded on the specified domain.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/privacy/domains/{domain}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddVideoPrivacyDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def delete_video_privacy_domain(self, request: operations.DeleteVideoPrivacyDomainRequest) -> operations.DeleteVideoPrivacyDomainResponse:
        r"""Restrict a video from being embedded on a domain
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/privacy/domains/{domain}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVideoPrivacyDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_video_privacy_domains(self, request: operations.GetVideoPrivacyDomainsRequest) -> operations.GetVideoPrivacyDomainsResponse:
        r"""Get all the domains on which a video can be embedded
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/privacy/domains", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideoPrivacyDomainsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.domain+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Domain]])
                res.domains = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.domain+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
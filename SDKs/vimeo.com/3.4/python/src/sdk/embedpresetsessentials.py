import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class EmbedPresetsEssentials:
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

    
    def edit_embed_preset(self, request: operations.EditEmbedPresetRequest) -> operations.EditEmbedPresetResponse:
        r"""Edit an embed preset
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/presets/{preset_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditEmbedPresetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.preset+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Presets])
                res.presets = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.preset+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.preset+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def edit_embed_preset_alt1(self, request: operations.EditEmbedPresetAlt1Request) -> operations.EditEmbedPresetAlt1Response:
        r"""Edit an embed preset
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/presets/{preset_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditEmbedPresetAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.preset+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Presets])
                res.presets = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.preset+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.preset+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_embed_preset(self, request: operations.GetEmbedPresetRequest) -> operations.GetEmbedPresetResponse:
        r"""Get a specific embed preset
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/presets/{preset_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEmbedPresetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.preset+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Presets])
                res.presets = out

        return res

    
    def get_embed_preset_alt1(self, request: operations.GetEmbedPresetAlt1Request) -> operations.GetEmbedPresetAlt1Response:
        r"""Get a specific embed preset
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/presets/{preset_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEmbedPresetAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.preset+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Presets])
                res.presets = out

        return res

    
    def get_embed_presets(self, request: operations.GetEmbedPresetsRequest) -> operations.GetEmbedPresetsResponse:
        r"""Get all the embed presets that a user has created
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/presets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEmbedPresetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.preset+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Presets]])
                res.presets = out

        return res

    
    def get_embed_presets_alt1(self, request: operations.GetEmbedPresetsAlt1Request) -> operations.GetEmbedPresetsAlt1Response:
        r"""Get all the embed presets that a user has created
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/presets"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEmbedPresetsAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.preset+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Presets]])
                res.presets = out

        return res

    
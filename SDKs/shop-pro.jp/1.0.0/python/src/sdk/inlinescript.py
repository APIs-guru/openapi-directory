import requests
from typing import Optional
from sdk.models import operations
from . import utils

class InlineScript:
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

    
    def create_inline_script_tag(self, request: operations.CreateInlineScriptTagRequest) -> operations.CreateInlineScriptTagResponse:
        r"""インラインスクリプトタグの登録
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/inline_script_tags.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateInlineScriptTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateInlineScriptTag201ApplicationJSON])
                res.create_inline_script_tag_201_application_json_object = out

        return res

    
    def delete_inline_script_tag(self, request: operations.DeleteInlineScriptTagRequest) -> operations.DeleteInlineScriptTagResponse:
        r"""インラインスクリプトタグの削除
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/inline_script_tags/{inlineScriptTagId}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteInlineScriptTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_inline_script_tag(self, request: operations.GetInlineScriptTagRequest) -> operations.GetInlineScriptTagResponse:
        r"""インラインスクリプトタグの取得
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/inline_script_tags/{inlineScriptTagId}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInlineScriptTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetInlineScriptTag200ApplicationJSON])
                res.get_inline_script_tag_200_application_json_object = out

        return res

    
    def get_inline_script_tags(self, request: operations.GetInlineScriptTagsRequest) -> operations.GetInlineScriptTagsResponse:
        r"""インラインスクリプトタグの取得
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/inline_script_tags.json"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInlineScriptTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetInlineScriptTags200ApplicationJSON])
                res.get_inline_script_tags_200_application_json_object = out

        return res

    
    def update_inline_script_tag(self, request: operations.UpdateInlineScriptTagRequest) -> operations.UpdateInlineScriptTagResponse:
        r"""インラインスクリプトタグの更新
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/inline_script_tags/{inlineScriptTagId}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateInlineScriptTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateInlineScriptTag200ApplicationJSON])
                res.update_inline_script_tag_200_application_json_object = out

        return res

    
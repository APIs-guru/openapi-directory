import requests
from typing import Optional
from sdk.models import operations
from . import utils

class ScriptDeprecated:
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

    
    def delete_v1_script_tags_script_tag_id_json(self, request: operations.DeleteV1ScriptTagsScriptTagIDJSONRequest) -> operations.DeleteV1ScriptTagsScriptTagIDJSONResponse:
        r"""スクリプトタグの削除
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/script_tags/{scriptTagId}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteV1ScriptTagsScriptTagIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def create_script_tag(self, request: operations.CreateScriptTagRequest) -> operations.CreateScriptTagResponse:
        r"""スクリプトタグの作成
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/script_tags.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateScriptTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateScriptTag200ApplicationJSON])
                res.create_script_tag_200_application_json_object = out

        return res

    
    def get_script_tag(self, request: operations.GetScriptTagRequest) -> operations.GetScriptTagResponse:
        r"""スクリプトタグの取得
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/script_tags/{scriptTagId}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetScriptTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetScriptTag200ApplicationJSON])
                res.get_script_tag_200_application_json_object = out

        return res

    
    def get_script_tags(self, request: operations.GetScriptTagsRequest) -> operations.GetScriptTagsResponse:
        r"""スクリプトタグの取得
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/script_tags.json"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetScriptTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetScriptTags200ApplicationJSON])
                res.get_script_tags_200_application_json_object = out

        return res

    
    def update_script_tag(self, request: operations.UpdateScriptTagRequest) -> operations.UpdateScriptTagResponse:
        r"""スクリプトタグの更新
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/script_tags/{scriptTagId}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateScriptTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateScriptTag200ApplicationJSON])
                res.update_script_tag_200_application_json_object = out

        return res

    
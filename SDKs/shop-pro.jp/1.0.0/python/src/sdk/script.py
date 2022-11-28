import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Script:
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

    
    def create_shop_script_tag(self, request: operations.CreateShopScriptTagRequest) -> operations.CreateShopScriptTagResponse:
        r"""スクリプトタグの作成
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/appstore/v1/script_tags.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateShopScriptTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateShopScriptTag200ApplicationJSON])
                res.create_shop_script_tag_200_application_json_object = out

        return res

    
    def delete_script_tag(self, request: operations.DeleteScriptTagRequest) -> operations.DeleteScriptTagResponse:
        r"""スクリプトタグの削除
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/appstore/v1/script_tags/{scriptTagId}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteScriptTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_shop_script_tag(self, request: operations.GetShopScriptTagRequest) -> operations.GetShopScriptTagResponse:
        r"""スクリプトタグの取得
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/appstore/v1/script_tags/{scriptTagId}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShopScriptTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShopScriptTag200ApplicationJSON])
                res.get_shop_script_tag_200_application_json_object = out

        return res

    
    def get_shop_script_tags(self, request: operations.GetShopScriptTagsRequest) -> operations.GetShopScriptTagsResponse:
        r"""スクリプトタグの取得
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/appstore/v1/script_tags.json"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShopScriptTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShopScriptTags200ApplicationJSON])
                res.get_shop_script_tags_200_application_json_object = out

        return res

    
    def update_shop_script_tag(self, request: operations.UpdateShopScriptTagRequest) -> operations.UpdateShopScriptTagResponse:
        r"""スクリプトタグの更新
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/appstore/v1/script_tags/{scriptTagId}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateShopScriptTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateShopScriptTag200ApplicationJSON])
                res.update_shop_script_tag_200_application_json_object = out

        return res

    


import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.xero.com/assets.xro/1.0",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def create_asset(self, request: operations.CreateAssetRequest) -> operations.CreateAssetResponse:
        r"""adds a fixed asset
        Adds an asset to the system
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Assets"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAssetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Asset])
                res.asset = out
        elif r.status_code == 400:
            pass

        return res

    
    def create_asset_type(self, request: operations.CreateAssetTypeRequest) -> operations.CreateAssetTypeResponse:
        r"""adds a fixed asset type
        Adds an fixed asset type to the system
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/AssetTypes"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAssetTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssetType])
                res.asset_type = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 409:
            pass

        return res

    
    def get_asset_by_id(self, request: operations.GetAssetByIDRequest) -> operations.GetAssetByIDResponse:
        r"""Retrieves fixed asset by id
        By passing in the appropriate asset id, you can search for
        a specific fixed asset in the system
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Assets/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssetByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Asset])
                res.asset = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_asset_settings(self, request: operations.GetAssetSettingsRequest) -> operations.GetAssetSettingsResponse:
        r"""searches fixed asset settings
        By passing in the appropriate options, you can search for available fixed asset types in the system
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Settings"
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssetSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Setting])
                res.setting = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_asset_types(self, request: operations.GetAssetTypesRequest) -> operations.GetAssetTypesResponse:
        r"""searches fixed asset types
        By passing in the appropriate options, you can search for available fixed asset types in the system
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/AssetTypes"
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssetTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AssetType]])
                res.asset_types = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_assets(self, request: operations.GetAssetsRequest) -> operations.GetAssetsResponse:
        r"""searches fixed asset
        By passing in the appropriate options, you can search for available fixed asset in the system
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Assets"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Assets])
                res.assets = out
        elif r.status_code == 400:
            pass

        return res

    
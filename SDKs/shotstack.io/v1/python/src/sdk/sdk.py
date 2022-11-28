

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.shotstack.io/{version}",
	"https://api.shotstack.io/serve/{version}",
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
        
    
    
    
    def delete_asset(self, request: operations.DeleteAssetRequest) -> operations.DeleteAssetResponse:
        r"""Delete Asset
        Delete an asset by its asset id. If a render creates multiple assets, such as thumbnail and poster images, each asset must be deleted individually by the asset id.
        
        **base URL:** https://api.shotstack.io/serve/{version}
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/assets/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAssetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_asset(self, request: operations.GetAssetRequest) -> operations.GetAssetResponse:
        r"""Get Asset
        The Serve API is used to interact with, and delete hosted assets including videos, images, audio files,  thumbnails and poster images. Use this endpoint to fetch an asset by asset id. Note that an asset id is unique for each asset and different from the render id.
        
        **base URL:** https://api.shotstack.io/serve/{version}
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/assets/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssetResponse])
                res.asset_response = out

        return res

    
    def get_asset_by_render_id(self, request: operations.GetAssetByRenderIDRequest) -> operations.GetAssetByRenderIDResponse:
        r"""Get Asset by Render ID
        A render may generate more than one file, such as a video, thumbnail and poster image. When the assets are created the only known id is the render id returned by the original [render request](#render-video), status  request or webhook. This endpoint lets you look up one or more assets by the render id.
        
        **base URL:** https://api.shotstack.io/serve/{version}
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/assets/render/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssetByRenderIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssetRenderResponse])
                res.asset_render_response = out

        return res

    
    def get_render(self, request: operations.GetRenderRequest) -> operations.GetRenderResponse:
        r"""Get Render Status
        Get the rendering status, temporary asset url and details of a render by ID.
        
        **base URL:** https://api.shotstack.io/{version}
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/render/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRenderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RenderResponse])
                res.render_response = out

        return res

    
    def post_render(self, request: operations.PostRenderRequest) -> operations.PostRenderResponse:
        r"""Render Asset
        Queue and render the contents of a timeline as a video, image or audio file.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/render"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRenderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.QueuedResponse])
                res.queued_response = out

        return res

    
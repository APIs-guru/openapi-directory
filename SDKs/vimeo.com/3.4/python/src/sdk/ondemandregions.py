import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class OnDemandRegions:
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

    
    def add_vod_region(self, request: operations.AddVodRegionRequest) -> operations.AddVodRegionResponse:
        r"""Add a specific region to an On Demand page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/pages/{ondemand_id}/regions/{country}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddVodRegionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.region+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnDemandRegion])
                res.on_demand_region = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.region+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.region+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def delete_vod_region(self, request: operations.DeleteVodRegionRequest) -> operations.DeleteVodRegionResponse:
        r"""Remove a specific region from an On Demand page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/pages/{ondemand_id}/regions/{country}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVodRegionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.region+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.region+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def delete_vod_regions(self, request: operations.DeleteVodRegionsRequest) -> operations.DeleteVodRegionsResponse:
        r"""Remove a list of regions from an On Demand page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/pages/{ondemand_id}/regions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVodRegionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.region+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.OnDemandRegion]])
                res.on_demand_regions = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.region+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.region+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_region(self, request: operations.GetRegionRequest) -> operations.GetRegionResponse:
        r"""Get a specific On Demand region
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/regions/{country}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.region+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnDemandRegion])
                res.on_demand_region = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.region+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_regions(self) -> operations.GetRegionsResponse:
        r"""Get all the On Demand regions
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ondemand/regions"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.region+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.OnDemandRegion]])
                res.on_demand_regions = out

        return res

    
    def get_vod_region(self, request: operations.GetVodRegionRequest) -> operations.GetVodRegionResponse:
        r"""Get a specific region of an On Demand page
        Checks whether an On Demand page belongs to a region.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/pages/{ondemand_id}/regions/{country}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVodRegionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.region+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnDemandRegion])
                res.on_demand_region = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.region+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_vod_regions(self, request: operations.GetVodRegionsRequest) -> operations.GetVodRegionsResponse:
        r"""Get all the regions of an On Demand page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/pages/{ondemand_id}/regions", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVodRegionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.region+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.OnDemandRegion]])
                res.on_demand_regions = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.region+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def set_vod_regions(self, request: operations.SetVodRegionsRequest) -> operations.SetVodRegionsResponse:
        r"""Add a list of regions to an On Demand page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/pages/{ondemand_id}/regions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetVodRegionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.region+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnDemandRegion])
                res.on_demand_region = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.region+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.region+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
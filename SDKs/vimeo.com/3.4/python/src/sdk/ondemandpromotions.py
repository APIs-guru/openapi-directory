import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class OnDemandPromotions:
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

    
    def create_vod_promotion(self, request: operations.CreateVodPromotionRequest) -> operations.CreateVodPromotionResponse:
        r"""Add a promotion to an On Demand page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/pages/{ondemand_id}/promotions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateVodPromotionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.promotion+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnDemandPromotion])
                res.on_demand_promotion = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.promotion+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.promotion+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.promotion+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def delete_vod_promotion(self, request: operations.DeleteVodPromotionRequest) -> operations.DeleteVodPromotionResponse:
        r"""Remove a promotion from an On Demand page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/pages/{ondemand_id}/promotions/{promotion_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVodPromotionResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_vod_promotion(self, request: operations.GetVodPromotionRequest) -> operations.GetVodPromotionResponse:
        r"""Get a specific promotion on an On Demand page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/pages/{ondemand_id}/promotions/{promotion_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVodPromotionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.promotion+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnDemandPromotion])
                res.on_demand_promotion = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.promotion+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.promotion+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_vod_promotion_codes(self, request: operations.GetVodPromotionCodesRequest) -> operations.GetVodPromotionCodesResponse:
        r"""Get all the codes of a promotion on an On Demand page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/pages/{ondemand_id}/promotions/{promotion_id}/codes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVodPromotionCodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.promocode+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnDemandPromotionCode])
                res.on_demand_promotion_code = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.promocode+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.promocode+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_vod_promotions(self, request: operations.GetVodPromotionsRequest) -> operations.GetVodPromotionsResponse:
        r"""Get all the promotions on an On Demand page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/pages/{ondemand_id}/promotions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVodPromotionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.promotion+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnDemandPromotion])
                res.on_demand_promotion = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.promotion+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.promotion+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.promotion+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
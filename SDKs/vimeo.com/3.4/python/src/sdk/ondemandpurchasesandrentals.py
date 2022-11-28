import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class OnDemandPurchasesAndRentals:
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

    
    def check_if_vod_was_purchased(self, request: operations.CheckIfVodWasPurchasedRequest) -> operations.CheckIfVodWasPurchasedResponse:
        r"""Check if a user has made a purchase or rental from an On Demand page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/ondemand/purchases", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckIfVodWasPurchasedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.page+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnDemandPage])
                res.on_demand_page = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.page+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.page+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def check_if_vod_was_purchased_alt1(self, request: operations.CheckIfVodWasPurchasedAlt1Request) -> operations.CheckIfVodWasPurchasedAlt1Response:
        r"""Check if a user has made a purchase or rental from an On Demand page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/ondemand/purchases/{ondemand_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckIfVodWasPurchasedAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.page+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnDemandPage])
                res.on_demand_page = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.page+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.page+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_vod_purchases(self, request: operations.GetVodPurchasesRequest) -> operations.GetVodPurchasesResponse:
        r"""Get all the On Demand purchases and rentals that a user has made
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/ondemand/purchases"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVodPurchasesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.page+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.OnDemandPage]])
                res.on_demand_pages = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.page+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
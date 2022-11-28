

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://marketplace.walmartapis.com",
	"https://sandbox.walmartapis.com",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
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
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def opt_cap_program_in_price(self, request: operations.OptCapProgramInPriceRequest) -> operations.OptCapProgramInPriceResponse:
        r"""Set up CAP SKU All
        This API helps Sellers to completely opt-in or opt-out from CAP program.
        
        If the subsidyEnrolled value = \"true\", the Seller enrolls in the CAP program. All eligible SKUs (current and future) are by default opt-in. Seller should use the SKU opt-in/opt-out API to opt-out individual items.
        
        If the subsidyEnrolled value = \"false\", the Seller stops participating in the CAP program and all eligible SKUs (current and future) are opt-out of the CAP program.
        /doc/us/mp/us-mp-price/#1290 - View Guide
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/cppreference"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OptCapProgramInPriceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.OptCapProgramInPrice200ApplicationJSON])
                res.opt_cap_program_in_price_200_application_json_object = out

        return res

    
    def price_bulk_uploads(self, request: operations.PriceBulkUploadsRequest) -> operations.PriceBulkUploadsResponse:
        r"""Update bulk prices (Multiple)
        Updates prices in bulk.
        
        In one Feed you can update up to 10,000 items in bulk. To ensure optimal Feed processing time, we recommend sending no more than 1000 items in one Feed and keeping the Feed sizes below 10 MB.
        
        The price sequence guarantee is observed by the bulk price update functionality, subject to the following rules:
        
        The timestamp used to determine precedence is passed in the request headers. All price updates in the feed are considered to have the same timestamp. The timestamp in the XML file is used only for auditing.
        You can send a single SKU multiple times in one Feed. If a SKU is repeated in a Feed, the price will be set for that SKU on Walmart.com, but there is no guarantee as to which SKU's price within that feed will be used.
        This API should be used in preference to the update a price. It should be called no sooner than 24 hours after a new item is set up and a wpid (Walmart Part ID) is available. Thereafter, the bulk price update has an service level agreement (SLA) of 15 minutes.
        
        After the update is submitted, wait for at least five minutes before verifying whether the bulk price update was successful. Individual SKU price update success or failure is only available after the entire feed is processed.
        
        If a SKU's price update fails (for example, multiple price updates were sent for the same SKU in a single feed), an error will be returned.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/feeds"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PriceBulkUploadsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PriceBulkUploads200ApplicationJSON])
                res.price_bulk_uploads_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def update_price(self, request: operations.UpdatePriceRequest) -> operations.UpdatePriceResponse:
        r"""Update a price
        Updates the regular price for a given item.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/price"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePriceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdatePrice200ApplicationJSON])
                res.update_price_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
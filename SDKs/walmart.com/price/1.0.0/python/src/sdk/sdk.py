import warnings
import requests
from typing import Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://marketplace.walmartapis.com",
	"https://sandbox.walmartapis.com",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    
    def config_security(self, security: shared.Security):
        self.client = utils.configure_security_client(security)

    
    def opt_cap_program_in_price(self, request: operations.OptCapProgramInPriceRequest) -> operations.OptCapProgramInPriceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v3/cppreference"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OptCapProgramInPriceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.OptCapProgramInPrice200ApplicationJSON])
                res.opt_cap_program_in_price_200_application_json_object = out

        return res

    
    def price_bulk_uploads(self, request: operations.PriceBulkUploadsRequest) -> operations.PriceBulkUploadsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v3/feeds"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v3/price"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

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

    
import requests
from typing import Optional
from sdk.models import operations
from . import utils

class DeprecatedServices:
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

    
    def merchant_cancellation(self, request: operations.MerchantCancellationRequest) -> operations.MerchantCancellationResponse:
        r"""/merchant/cancellation
        Cancel a booking
        **Note**: This service has been replaced by the [cancellationReasons](#operation/cancellationReasons), [bookingQuote](#operation/bookingQuote) and [cancelBooking](#operation/cancelBooking) endpoints
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/merchant/cancellation"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MerchantCancellationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MerchantCancellation200ApplicationJSON])
                res.merchant_cancellation_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MerchantCancellation400ApplicationJSON])
                res.merchant_cancellation_400_application_json_object = out

        return res

    
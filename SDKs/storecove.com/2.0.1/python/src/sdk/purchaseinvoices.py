import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class PurchaseInvoices:
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

    
    def get_invoice_json(self, request: operations.GetInvoiceJSONRequest) -> operations.GetInvoiceJSONResponse:
        r"""Get Purchase invoice data as JSON
        Get a specific PurchaseInvoice, in JSON format. Recommended way of getting a PurchaseInvoice, since it provides the data in a JSON object and the JSON format is the richest we have that supports all features a PurchaseInvoice can have.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/purchase_invoices/{guid}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInvoiceJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.purchase_invoice = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_invoice_ubl(self, request: operations.GetInvoiceUblRequest) -> operations.GetInvoiceUblResponse:
        r"""Get Purchase invoice data as JSON with a Base64-encoded SI-1.2 UBL string
        Get a specific PurchaseInvoice. Using /json as {packaging} is recommended (in which case you can just omit it), however, this endpoint allows getting the invoice in a differently serialized format such as UBL.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/purchase_invoices/{guid}/{packaging}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInvoiceUblResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.purchase_invoice_ubl = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_invoice_ubl_versioned(self, request: operations.GetInvoiceUblVersionedRequest) -> operations.GetInvoiceUblVersionedResponse:
        r"""Get Purchase invoice data as JSON with a Base64-encoded UBL string in the specified version
        Get a specific PurchaseInvoice in a non-JSON serialized format with version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/purchase_invoices/{guid}/{packaging}/{package_version}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInvoiceUblVersionedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.purchase_invoice_ubl = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
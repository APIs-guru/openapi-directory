import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils

class InvoiceSubmissions:
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

    
    def create_invoice_submission(self, request: operations.CreateInvoiceSubmissionRequest) -> operations.CreateInvoiceSubmissionResponse:
        r"""Submit a new invoice
        Submit an invoice for delivery.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/invoice_submissions"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateInvoiceSubmissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvoiceSubmissionResult])
                res.invoice_submission_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.error_models = out

        return res

    
    def preflight_invoice_recipient(self, request: operations.PreflightInvoiceRecipientRequest) -> operations.PreflightInvoiceRecipientResponse:
        r"""Preflight an invoice recipient
        Check whether Storecove can deliver an invoice for a list of ids.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/invoice_submissions/preflight"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PreflightInvoiceRecipientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreflightInvoiceRecipientResult])
                res.preflight_invoice_recipient_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.error_models = out

        return res

    
    def show_invoice_submission_evidence(self, request: operations.ShowInvoiceSubmissionEvidenceRequest) -> operations.ShowInvoiceSubmissionEvidenceResponse:
        r"""Get InvoiceSubmission Evidence
        Get evidence for an InvoiceSubmission by GUID with corresponding status
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/invoice_submissions/{guid}/evidence", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ShowInvoiceSubmissionEvidenceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invoice_submission_evidence = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
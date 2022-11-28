import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils

class DocumentSubmissions:
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

    
    def create_document_submission(self, request: operations.CreateDocumentSubmissionRequest) -> operations.CreateDocumentSubmissionResponse:
        r"""*** NOTE: Experimental. Only to be used for sending Invoice Response documents. *** Submit a new document.
        Submit a document for delivery. This endpoint will replace the /invoice_submissions endpoint, but for now should only be used to send Invoice Response doucments.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/document_submissions"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDocumentSubmissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DocumentSubmissionResult])
                res.document_submission_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.error_models = out

        return res

    
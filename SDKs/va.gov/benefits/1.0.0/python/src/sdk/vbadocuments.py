import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class VbaDocuments:
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

    
    def get_benefits_document_upload_download(self, request: operations.GetBenefitsDocumentUploadDownloadRequest) -> operations.GetBenefitsDocumentUploadDownloadResponse:
        r"""Download zip of \"what the server sees\"
        An endpoint that will allow you to see exactly what the server sees. We split apart all submitted docs and metadata and zip the file to make it available to you to help with debugging purposes. Files are deleted after 10 days. Only available in testing environments, not production.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/uploads/{id}/download", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBenefitsDocumentUploadDownloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/zip"):
                res.get_benefits_document_upload_download_200_application_zip_binary_string = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBenefitsDocumentUploadDownload401ApplicationJSON])
                res.get_benefits_document_upload_download_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBenefitsDocumentUploadDownload403ApplicationJSON])
                res.get_benefits_document_upload_download_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBenefitsDocumentUploadDownload404ApplicationJSON])
                res.get_benefits_document_upload_download_404_application_json_object = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBenefitsDocumentUploadDownload429ApplicationJSON])
                res.get_benefits_document_upload_download_429_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBenefitsDocumentUploadDownload500ApplicationJSON])
                res.get_benefits_document_upload_download_500_application_json_object = out

        return res

    
    def get_benefits_document_upload_status(self, request: operations.GetBenefitsDocumentUploadStatusRequest) -> operations.GetBenefitsDocumentUploadStatusResponse:
        r"""Get status for a previous benefits document upload
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/uploads/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBenefitsDocumentUploadStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_benefits_document_upload_status_200_application_json_any = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBenefitsDocumentUploadStatus401ApplicationJSON])
                res.get_benefits_document_upload_status_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBenefitsDocumentUploadStatus403ApplicationJSON])
                res.get_benefits_document_upload_status_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBenefitsDocumentUploadStatus404ApplicationJSON])
                res.get_benefits_document_upload_status_404_application_json_object = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBenefitsDocumentUploadStatus429ApplicationJSON])
                res.get_benefits_document_upload_status_429_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBenefitsDocumentUploadStatus500ApplicationJSON])
                res.get_benefits_document_upload_status_500_application_json_object = out

        return res

    
    def get_benefits_document_upload_status_report(self, request: operations.GetBenefitsDocumentUploadStatusReportRequest) -> operations.GetBenefitsDocumentUploadStatusReportResponse:
        r"""Get a bulk status report for a list of previous uploads
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/uploads/report"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBenefitsDocumentUploadStatusReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBenefitsDocumentUploadStatusReport200ApplicationJSON])
                res.get_benefits_document_upload_status_report_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBenefitsDocumentUploadStatusReport401ApplicationJSON])
                res.get_benefits_document_upload_status_report_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBenefitsDocumentUploadStatusReport403ApplicationJSON])
                res.get_benefits_document_upload_status_report_403_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBenefitsDocumentUploadStatusReport422ApplicationJSON])
                res.get_benefits_document_upload_status_report_422_application_json_object = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBenefitsDocumentUploadStatusReport429ApplicationJSON])
                res.get_benefits_document_upload_status_report_429_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBenefitsDocumentUploadStatusReport500ApplicationJSON])
                res.get_benefits_document_upload_status_report_500_application_json_object = out

        return res

    
    def post_benefits_document_upload(self, request: operations.PostBenefitsDocumentUploadRequest) -> operations.PostBenefitsDocumentUploadResponse:
        r"""Get a location for subsequent document upload PUT request
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/uploads"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostBenefitsDocumentUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostBenefitsDocumentUpload202ApplicationJSON])
                res.post_benefits_document_upload_202_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostBenefitsDocumentUpload401ApplicationJSON])
                res.post_benefits_document_upload_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostBenefitsDocumentUpload403ApplicationJSON])
                res.post_benefits_document_upload_403_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostBenefitsDocumentUpload422ApplicationJSON])
                res.post_benefits_document_upload_422_application_json_object = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostBenefitsDocumentUpload429ApplicationJSON])
                res.post_benefits_document_upload_429_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostBenefitsDocumentUpload500ApplicationJSON])
                res.post_benefits_document_upload_500_application_json_object = out

        return res

    
    def put_benefits_document_upload(self, request: operations.PutBenefitsDocumentUploadRequest) -> operations.PutBenefitsDocumentUploadResponse:
        r"""Accepts document upload.
        Accepts document metadata, document binary, and attachment binaries.Full URL, including
        query parameters, provided from POST `/document_uploads`.
        
        ## Example Payload
        
        The following demonstrates a (redacted) multipart payload suitable for submitting to the PUT
        endpoint. Most programming languages should have provisions for assembling a multipart
        payload like this without having to do so manually.
        
        ```
        --17de1ed8f01442b2a2d7a93506314b76
        Content-Disposition: form-data; name=\"metadata\"
        Content-Type: application/json
        
        {\"veteranFirstName\": \"Jane\",
        \"veteranLastName\": \"Doe\",
        \"fileNumber\": \"012345678\",
        \"zipCode\": \"97202\",
        \"source\": \"MyVSO\",
        \"docType\": \"21-22\"
        \"businessLine\": \"CMP\"}
        --17de1ed8f01442b2a2d7a93506314b76
        Content-Disposition: form-data; name=\"content\"
        Content-Type: application/pdf
        
        <Binary PDF contents>
        --17de1ed8f01442b2a2d7a93506314b76
        Content-Disposition: form-data; name=\"attachment1\"
        Content-Type: application/pdf
        
        <Binary PDF attachment contents>
        --17de1ed8f01442b2a2d7a93506314b76--
        ```
        
        This PUT request would have an overall HTTP Content-Type header:
        
        ```
        Content-Type: multipart/form-data; boundary=17de1ed8f01442b2a2d7a93506314b76
        ```
        
        Note that the Content-Disposition parameter \"name\" in each part must be the expected values
        \"metadata\", \"content\", \"attachment1\"...\"attachmentN\". The attachment attributes must be named 
        exactly as they are listed here (case sensitive), for example: \"attachment_1\" or \"Attachment2\"
        are invalid.
        
        This is an example curl command:
        
        ```
        curl -v -L -X PUT '<Location from \uploads>' -F 'metadata=\"{\\"veteranFirstName\\": \\"Jane\\",\\"veteranLastName\\": \\"Doe\\",\\"fileNumber\\": \\"012345678\\",\\"zipCode\\": \\"97202\\",\\"source\\": \\"MyVSO\\",\\"docType\\": \\"21-22\\",\\"businessLine\\": \\"CMP\\"}\";type=application/json' -F 'content=@\"content.pdf\"' -F 'attachment1=@\"file1.pdf\"' -F 'attachment2=@\"another_file.pdf\"'
        ```
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/path"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutBenefitsDocumentUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutBenefitsDocumentUpload401ApplicationJSON])
                res.put_benefits_document_upload_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutBenefitsDocumentUpload422ApplicationJSON])
                res.put_benefits_document_upload_422_application_json_object = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutBenefitsDocumentUpload429ApplicationJSON])
                res.put_benefits_document_upload_429_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutBenefitsDocumentUpload500ApplicationJSON])
                res.put_benefits_document_upload_500_application_json_object = out

        return res

    
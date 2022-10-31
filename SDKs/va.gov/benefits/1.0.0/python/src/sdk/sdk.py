import warnings
import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils


SERVERS = [
	"https://sandbox-api.va.gov/services/vba_documents/{version}",
	"https://api.va.gov/services/vba_documents/{version}",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def get_benefits_document_upload_download(self, request: operations.GetBenefitsDocumentUploadDownloadRequest) -> operations.GetBenefitsDocumentUploadDownloadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/uploads/{id}/download", request.path_params)

        client = utils.configure_security_client(request.security)

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/uploads/{id}", request.path_params)

        client = utils.configure_security_client(request.security)

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/uploads/report"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = utils.configure_security_client(request.security)

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/uploads"

        client = utils.configure_security_client(request.security)

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/path"

        headers = utils.get_headers(request.headers)

        client = self.client

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

    
import warnings
import requests
from typing import Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://api.pdfblocks.com",
	"https://eu.api.pdfblocks.com",
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

    
    def add_image_watermark_v1(self, request: operations.AddImageWatermarkV1Request) -> operations.AddImageWatermarkV1Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/add_watermark/image"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddImageWatermarkV1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/pdf"):
                res.add_image_watermark_v1_200_application_pdf_binary_string = r.content
        elif r.status_code >= 400 and r.status_code < 500:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AddImageWatermarkV14XxApplicationProblemPlusJSON])
                res.add_image_watermark_v1_4_xx_application_problem_plus_json_object = out

        return res

    
    def add_password_v1(self, request: operations.AddPasswordV1Request) -> operations.AddPasswordV1Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/add_password"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddPasswordV1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/pdf"):
                res.add_password_v1_200_application_pdf_binary_string = r.content
        elif r.status_code >= 400 and r.status_code < 500:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AddPasswordV14XxApplicationProblemPlusJSON])
                res.add_password_v1_4_xx_application_problem_plus_json_object = out

        return res

    
    def add_restrictions_v1(self, request: operations.AddRestrictionsV1Request) -> operations.AddRestrictionsV1Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/add_restrictions"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddRestrictionsV1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/pdf"):
                res.add_restrictions_v1_200_application_pdf_binary_string = r.content
        elif r.status_code >= 400 and r.status_code < 500:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AddRestrictionsV14XxApplicationProblemPlusJSON])
                res.add_restrictions_v1_4_xx_application_problem_plus_json_object = out

        return res

    
    def add_text_watermark_v1(self, request: operations.AddTextWatermarkV1Request) -> operations.AddTextWatermarkV1Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/add_watermark/text"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddTextWatermarkV1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/pdf"):
                res.add_text_watermark_v1_200_application_pdf_binary_string = r.content
        elif r.status_code >= 400 and r.status_code < 500:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AddTextWatermarkV14XxApplicationProblemPlusJSON])
                res.add_text_watermark_v1_4_xx_application_problem_plus_json_object = out

        return res

    
    def extract_pages_v1(self, request: operations.ExtractPagesV1Request) -> operations.ExtractPagesV1Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/extract_pages"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtractPagesV1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/pdf"):
                res.extract_pages_v1_200_application_pdf_binary_string = r.content
        elif r.status_code >= 400 and r.status_code < 500:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ExtractPagesV14XxApplicationProblemPlusJSON])
                res.extract_pages_v1_4_xx_application_problem_plus_json_object = out

        return res

    
    def merge_documents_v1(self, request: operations.MergeDocumentsV1Request) -> operations.MergeDocumentsV1Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/merge_documents"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MergeDocumentsV1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/pdf"):
                res.merge_documents_v1_200_application_pdf_binary_string = r.content
        elif r.status_code >= 400 and r.status_code < 500:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MergeDocumentsV14XxApplicationProblemPlusJSON])
                res.merge_documents_v1_4_xx_application_problem_plus_json_object = out

        return res

    
    def remove_pages_v1(self, request: operations.RemovePagesV1Request) -> operations.RemovePagesV1Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/remove_pages"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemovePagesV1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/pdf"):
                res.remove_pages_v1_200_application_pdf_binary_string = r.content
        elif r.status_code >= 400 and r.status_code < 500:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RemovePagesV14XxApplicationProblemPlusJSON])
                res.remove_pages_v1_4_xx_application_problem_plus_json_object = out

        return res

    
    def remove_password_v1(self, request: operations.RemovePasswordV1Request) -> operations.RemovePasswordV1Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/remove_password"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemovePasswordV1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/pdf"):
                res.remove_password_v1_200_application_pdf_binary_string = r.content
        elif r.status_code >= 400 and r.status_code < 500:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RemovePasswordV14XxApplicationProblemPlusJSON])
                res.remove_password_v1_4_xx_application_problem_plus_json_object = out

        return res

    
    def remove_restrictions_v1(self, request: operations.RemoveRestrictionsV1Request) -> operations.RemoveRestrictionsV1Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/remove_restrictions"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveRestrictionsV1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/pdf"):
                res.remove_restrictions_v1_200_application_pdf_binary_string = r.content
        elif r.status_code >= 400 and r.status_code < 500:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RemoveRestrictionsV14XxApplicationProblemPlusJSON])
                res.remove_restrictions_v1_4_xx_application_problem_plus_json_object = out

        return res

    
    def remove_signatures_v1(self, request: operations.RemoveSignaturesV1Request) -> operations.RemoveSignaturesV1Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/remove_signatures"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveSignaturesV1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/pdf"):
                res.remove_signatures_v1_200_application_pdf_binary_string = r.content
        elif r.status_code >= 400 and r.status_code < 500:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RemoveSignaturesV14XxApplicationProblemPlusJSON])
                res.remove_signatures_v1_4_xx_application_problem_plus_json_object = out

        return res

    
    def reverse_pages_v1(self, request: operations.ReversePagesV1Request) -> operations.ReversePagesV1Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/reverse_pages"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReversePagesV1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/pdf"):
                res.reverse_pages_v1_200_application_pdf_binary_string = r.content
        elif r.status_code >= 400 and r.status_code < 500:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReversePagesV14XxApplicationProblemPlusJSON])
                res.reverse_pages_v1_4_xx_application_problem_plus_json_object = out

        return res

    
    def rotate_pages_v1(self, request: operations.RotatePagesV1Request) -> operations.RotatePagesV1Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/rotate_pages"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RotatePagesV1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/pdf"):
                res.rotate_pages_v1_200_application_pdf_binary_string = r.content
        elif r.status_code >= 400 and r.status_code < 500:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RotatePagesV14XxApplicationProblemPlusJSON])
                res.rotate_pages_v1_4_xx_application_problem_plus_json_object = out

        return res

    
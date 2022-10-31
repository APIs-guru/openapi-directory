import warnings
import requests
from typing import Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://pdfbroker.io",
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

    
    def get_api_pdf(self) -> operations.GetAPIPdfResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/api/pdf"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIPdfResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseDto])
                res.error_response_dto = out
        elif r.status_code == 415:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def post_api_pdf_wkhtmltopdf(self, request: operations.PostAPIPdfWkhtmltopdfRequest) -> operations.PostAPIPdfWkhtmltopdfResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/api/pdf/wkhtmltopdf"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIPdfWkhtmltopdfResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PdfResponseDto])
                res.pdf_response_dto = out
            if utils.match_content_type(content_type, "application/pdf"):
                res.post_api_pdf_wkhtmltopdf_200_application_pdf_binary_string = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseDto])
                res.error_response_dto = out
        elif r.status_code == 415:
            pass
        elif r.status_code == 429:
            pass

        return res

    
import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://numbers.twilio.com",
]

class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url


    

    
    def create_bundle(self, request: operations.CreateBundleRequest) -> operations.CreateBundleResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_BUNDLE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateBundleResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NumbersV2RegulatoryComplianceBundle])
                res.responses[r.status_code][content_type] = operations.CreateBundleResponses(numbers_v2_regulatory_compliance_bundle=out)

        return res

    
    def create_bundle_copy(self, request: operations.CreateBundleCopyRequest) -> operations.CreateBundleCopyResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_BUNDLE_COPY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/Copies", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateBundleCopyResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NumbersV2RegulatoryComplianceBundleBundleCopy])
                res.responses[r.status_code][content_type] = operations.CreateBundleCopyResponses(numbers_v2_regulatory_compliance_bundle_bundle_copy=out)

        return res

    
    def create_end_user(self, request: operations.CreateEndUserRequest) -> operations.CreateEndUserResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_END_USER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateEndUserResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NumbersV2RegulatoryComplianceEndUser])
                res.responses[r.status_code][content_type] = operations.CreateEndUserResponses(numbers_v2_regulatory_compliance_end_user=out)

        return res

    
    def create_evaluation(self, request: operations.CreateEvaluationRequest) -> operations.CreateEvaluationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_EVALUATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateEvaluationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NumbersV2RegulatoryComplianceBundleEvaluation])
                res.responses[r.status_code][content_type] = operations.CreateEvaluationResponses(numbers_v2_regulatory_compliance_bundle_evaluation=out)

        return res

    
    def create_item_assignment(self, request: operations.CreateItemAssignmentRequest) -> operations.CreateItemAssignmentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_ITEM_ASSIGNMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateItemAssignmentResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NumbersV2RegulatoryComplianceBundleItemAssignment])
                res.responses[r.status_code][content_type] = operations.CreateItemAssignmentResponses(numbers_v2_regulatory_compliance_bundle_item_assignment=out)

        return res

    
    def create_replace_items(self, request: operations.CreateReplaceItemsRequest) -> operations.CreateReplaceItemsResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_REPLACE_ITEMS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/ReplaceItems", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateReplaceItemsResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NumbersV2RegulatoryComplianceBundleReplaceItems])
                res.responses[r.status_code][content_type] = operations.CreateReplaceItemsResponses(numbers_v2_regulatory_compliance_bundle_replace_items=out)

        return res

    
    def create_supporting_document(self, request: operations.CreateSupportingDocumentRequest) -> operations.CreateSupportingDocumentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_SUPPORTING_DOCUMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSupportingDocumentResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NumbersV2RegulatoryComplianceSupportingDocument])
                res.responses[r.status_code][content_type] = operations.CreateSupportingDocumentResponses(numbers_v2_regulatory_compliance_supporting_document=out)

        return res

    
    def delete_bundle(self, request: operations.DeleteBundleRequest) -> operations.DeleteBundleResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_BUNDLE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/RegulatoryCompliance/Bundles/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteBundleResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_end_user(self, request: operations.DeleteEndUserRequest) -> operations.DeleteEndUserResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_END_USER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/RegulatoryCompliance/EndUsers/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteEndUserResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_item_assignment(self, request: operations.DeleteItemAssignmentRequest) -> operations.DeleteItemAssignmentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_ITEM_ASSIGNMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteItemAssignmentResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_supporting_document(self, request: operations.DeleteSupportingDocumentRequest) -> operations.DeleteSupportingDocumentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_SUPPORTING_DOCUMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/RegulatoryCompliance/SupportingDocuments/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSupportingDocumentResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def fetch_bundle(self, request: operations.FetchBundleRequest) -> operations.FetchBundleResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_BUNDLE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/RegulatoryCompliance/Bundles/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchBundleResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NumbersV2RegulatoryComplianceBundle])
                res.responses[r.status_code][content_type] = operations.FetchBundleResponses(numbers_v2_regulatory_compliance_bundle=out)

        return res

    
    def fetch_end_user(self, request: operations.FetchEndUserRequest) -> operations.FetchEndUserResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_END_USER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/RegulatoryCompliance/EndUsers/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchEndUserResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NumbersV2RegulatoryComplianceEndUser])
                res.responses[r.status_code][content_type] = operations.FetchEndUserResponses(numbers_v2_regulatory_compliance_end_user=out)

        return res

    
    def fetch_end_user_type(self, request: operations.FetchEndUserTypeRequest) -> operations.FetchEndUserTypeResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_END_USER_TYPE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/RegulatoryCompliance/EndUserTypes/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchEndUserTypeResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NumbersV2RegulatoryComplianceEndUserType])
                res.responses[r.status_code][content_type] = operations.FetchEndUserTypeResponses(numbers_v2_regulatory_compliance_end_user_type=out)

        return res

    
    def fetch_evaluation(self, request: operations.FetchEvaluationRequest) -> operations.FetchEvaluationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_EVALUATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchEvaluationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NumbersV2RegulatoryComplianceBundleEvaluation])
                res.responses[r.status_code][content_type] = operations.FetchEvaluationResponses(numbers_v2_regulatory_compliance_bundle_evaluation=out)

        return res

    
    def fetch_item_assignment(self, request: operations.FetchItemAssignmentRequest) -> operations.FetchItemAssignmentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_ITEM_ASSIGNMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchItemAssignmentResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NumbersV2RegulatoryComplianceBundleItemAssignment])
                res.responses[r.status_code][content_type] = operations.FetchItemAssignmentResponses(numbers_v2_regulatory_compliance_bundle_item_assignment=out)

        return res

    
    def fetch_regulation(self, request: operations.FetchRegulationRequest) -> operations.FetchRegulationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_REGULATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/RegulatoryCompliance/Regulations/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRegulationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NumbersV2RegulatoryComplianceRegulation])
                res.responses[r.status_code][content_type] = operations.FetchRegulationResponses(numbers_v2_regulatory_compliance_regulation=out)

        return res

    
    def fetch_supporting_document(self, request: operations.FetchSupportingDocumentRequest) -> operations.FetchSupportingDocumentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SUPPORTING_DOCUMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/RegulatoryCompliance/SupportingDocuments/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSupportingDocumentResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NumbersV2RegulatoryComplianceSupportingDocument])
                res.responses[r.status_code][content_type] = operations.FetchSupportingDocumentResponses(numbers_v2_regulatory_compliance_supporting_document=out)

        return res

    
    def fetch_supporting_document_type(self, request: operations.FetchSupportingDocumentTypeRequest) -> operations.FetchSupportingDocumentTypeResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SUPPORTING_DOCUMENT_TYPE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/RegulatoryCompliance/SupportingDocumentTypes/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSupportingDocumentTypeResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NumbersV2RegulatoryComplianceSupportingDocumentType])
                res.responses[r.status_code][content_type] = operations.FetchSupportingDocumentTypeResponses(numbers_v2_regulatory_compliance_supporting_document_type=out)

        return res

    
    def list_bundle(self, request: operations.ListBundleRequest) -> operations.ListBundleResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_BUNDLE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListBundleResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListBundle200ApplicationJSONListBundleResponse])
                res.responses[r.status_code][content_type] = operations.ListBundleResponses(list_bundle_response=out)

        return res

    
    def list_bundle_copy(self, request: operations.ListBundleCopyRequest) -> operations.ListBundleCopyResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_BUNDLE_COPY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/Copies", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListBundleCopyResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListBundleCopy200ApplicationJSONListBundleCopyResponse])
                res.responses[r.status_code][content_type] = operations.ListBundleCopyResponses(list_bundle_copy_response=out)

        return res

    
    def list_end_user(self, request: operations.ListEndUserRequest) -> operations.ListEndUserResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_END_USER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListEndUserResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListEndUser200ApplicationJSONListEndUserResponse])
                res.responses[r.status_code][content_type] = operations.ListEndUserResponses(list_end_user_response=out)

        return res

    
    def list_end_user_type(self, request: operations.ListEndUserTypeRequest) -> operations.ListEndUserTypeResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_END_USER_TYPE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListEndUserTypeResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListEndUserType200ApplicationJSONListEndUserTypeResponse])
                res.responses[r.status_code][content_type] = operations.ListEndUserTypeResponses(list_end_user_type_response=out)

        return res

    
    def list_evaluation(self, request: operations.ListEvaluationRequest) -> operations.ListEvaluationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_EVALUATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListEvaluationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListEvaluation200ApplicationJSONListEvaluationResponse])
                res.responses[r.status_code][content_type] = operations.ListEvaluationResponses(list_evaluation_response=out)

        return res

    
    def list_item_assignment(self, request: operations.ListItemAssignmentRequest) -> operations.ListItemAssignmentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_ITEM_ASSIGNMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListItemAssignmentResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListItemAssignment200ApplicationJSONListItemAssignmentResponse])
                res.responses[r.status_code][content_type] = operations.ListItemAssignmentResponses(list_item_assignment_response=out)

        return res

    
    def list_regulation(self, request: operations.ListRegulationRequest) -> operations.ListRegulationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_REGULATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListRegulationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListRegulation200ApplicationJSONListRegulationResponse])
                res.responses[r.status_code][content_type] = operations.ListRegulationResponses(list_regulation_response=out)

        return res

    
    def list_supporting_document(self, request: operations.ListSupportingDocumentRequest) -> operations.ListSupportingDocumentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_SUPPORTING_DOCUMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSupportingDocumentResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSupportingDocument200ApplicationJSONListSupportingDocumentResponse])
                res.responses[r.status_code][content_type] = operations.ListSupportingDocumentResponses(list_supporting_document_response=out)

        return res

    
    def list_supporting_document_type(self, request: operations.ListSupportingDocumentTypeRequest) -> operations.ListSupportingDocumentTypeResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_SUPPORTING_DOCUMENT_TYPE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSupportingDocumentTypeResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSupportingDocumentType200ApplicationJSONListSupportingDocumentTypeResponse])
                res.responses[r.status_code][content_type] = operations.ListSupportingDocumentTypeResponses(list_supporting_document_type_response=out)

        return res

    
    def update_bundle(self, request: operations.UpdateBundleRequest) -> operations.UpdateBundleResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_BUNDLE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/RegulatoryCompliance/Bundles/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateBundleResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NumbersV2RegulatoryComplianceBundle])
                res.responses[r.status_code][content_type] = operations.UpdateBundleResponses(numbers_v2_regulatory_compliance_bundle=out)

        return res

    
    def update_end_user(self, request: operations.UpdateEndUserRequest) -> operations.UpdateEndUserResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_END_USER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/RegulatoryCompliance/EndUsers/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateEndUserResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NumbersV2RegulatoryComplianceEndUser])
                res.responses[r.status_code][content_type] = operations.UpdateEndUserResponses(numbers_v2_regulatory_compliance_end_user=out)

        return res

    
    def update_supporting_document(self, request: operations.UpdateSupportingDocumentRequest) -> operations.UpdateSupportingDocumentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_SUPPORTING_DOCUMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/RegulatoryCompliance/SupportingDocuments/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSupportingDocumentResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NumbersV2RegulatoryComplianceSupportingDocument])
                res.responses[r.status_code][content_type] = operations.UpdateSupportingDocumentResponses(numbers_v2_regulatory_compliance_supporting_document=out)

        return res

    
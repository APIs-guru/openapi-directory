import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://trusthub.twilio.com",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def create_customer_profile(self, request: operations.CreateCustomerProfileRequest) -> operations.CreateCustomerProfileResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_CUSTOMER_PROFILE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/CustomerProfiles"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCustomerProfileResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1CustomerProfile])
                res.trusthub_v1_customer_profile = out

        return res

    
    
    def create_customer_profile_channel_endpoint_assignment(self, request: operations.CreateCustomerProfileChannelEndpointAssignmentRequest) -> operations.CreateCustomerProfileChannelEndpointAssignmentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_CUSTOMER_PROFILE_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCustomerProfileChannelEndpointAssignmentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment])
                res.trusthub_v1_customer_profile_customer_profile_channel_endpoint_assignment = out

        return res

    
    
    def create_customer_profile_entity_assignment(self, request: operations.CreateCustomerProfileEntityAssignmentRequest) -> operations.CreateCustomerProfileEntityAssignmentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_CUSTOMER_PROFILE_ENTITY_ASSIGNMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCustomerProfileEntityAssignmentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment])
                res.trusthub_v1_customer_profile_customer_profile_entity_assignment = out

        return res

    
    
    def create_customer_profile_evaluation(self, request: operations.CreateCustomerProfileEvaluationRequest) -> operations.CreateCustomerProfileEvaluationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_CUSTOMER_PROFILE_EVALUATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/CustomerProfiles/{CustomerProfileSid}/Evaluations", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCustomerProfileEvaluationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1CustomerProfileCustomerProfileEvaluation])
                res.trusthub_v1_customer_profile_customer_profile_evaluation = out

        return res

    
    
    def create_end_user(self, request: operations.CreateEndUserRequest) -> operations.CreateEndUserResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_END_USER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/EndUsers"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateEndUserResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1EndUser])
                res.trusthub_v1_end_user = out

        return res

    
    
    def create_supporting_document(self, request: operations.CreateSupportingDocumentRequest) -> operations.CreateSupportingDocumentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_SUPPORTING_DOCUMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/SupportingDocuments"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSupportingDocumentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1SupportingDocument])
                res.trusthub_v1_supporting_document = out

        return res

    
    
    def create_trust_product(self, request: operations.CreateTrustProductRequest) -> operations.CreateTrustProductResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_TRUST_PRODUCT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/TrustProducts"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTrustProductResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1TrustProduct])
                res.trusthub_v1_trust_product = out

        return res

    
    
    def create_trust_product_channel_endpoint_assignment(self, request: operations.CreateTrustProductChannelEndpointAssignmentRequest) -> operations.CreateTrustProductChannelEndpointAssignmentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_TRUST_PRODUCT_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTrustProductChannelEndpointAssignmentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment])
                res.trusthub_v1_trust_product_trust_product_channel_endpoint_assignment = out

        return res

    
    
    def create_trust_product_entity_assignment(self, request: operations.CreateTrustProductEntityAssignmentRequest) -> operations.CreateTrustProductEntityAssignmentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_TRUST_PRODUCT_ENTITY_ASSIGNMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/TrustProducts/{TrustProductSid}/EntityAssignments", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTrustProductEntityAssignmentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1TrustProductTrustProductEntityAssignment])
                res.trusthub_v1_trust_product_trust_product_entity_assignment = out

        return res

    
    
    def create_trust_product_evaluation(self, request: operations.CreateTrustProductEvaluationRequest) -> operations.CreateTrustProductEvaluationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_TRUST_PRODUCT_EVALUATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/TrustProducts/{TrustProductSid}/Evaluations", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTrustProductEvaluationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1TrustProductTrustProductEvaluation])
                res.trusthub_v1_trust_product_trust_product_evaluation = out

        return res

    
    
    def delete_customer_profile(self, request: operations.DeleteCustomerProfileRequest) -> operations.DeleteCustomerProfileResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_CUSTOMER_PROFILE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/CustomerProfiles/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCustomerProfileResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_customer_profile_channel_endpoint_assignment(self, request: operations.DeleteCustomerProfileChannelEndpointAssignmentRequest) -> operations.DeleteCustomerProfileChannelEndpointAssignmentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_CUSTOMER_PROFILE_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCustomerProfileChannelEndpointAssignmentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_customer_profile_entity_assignment(self, request: operations.DeleteCustomerProfileEntityAssignmentRequest) -> operations.DeleteCustomerProfileEntityAssignmentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_CUSTOMER_PROFILE_ENTITY_ASSIGNMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCustomerProfileEntityAssignmentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_end_user(self, request: operations.DeleteEndUserRequest) -> operations.DeleteEndUserResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_END_USER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/EndUsers/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteEndUserResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_supporting_document(self, request: operations.DeleteSupportingDocumentRequest) -> operations.DeleteSupportingDocumentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_SUPPORTING_DOCUMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/SupportingDocuments/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSupportingDocumentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_trust_product(self, request: operations.DeleteTrustProductRequest) -> operations.DeleteTrustProductResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_TRUST_PRODUCT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/TrustProducts/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTrustProductResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_trust_product_channel_endpoint_assignment(self, request: operations.DeleteTrustProductChannelEndpointAssignmentRequest) -> operations.DeleteTrustProductChannelEndpointAssignmentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_TRUST_PRODUCT_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTrustProductChannelEndpointAssignmentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_trust_product_entity_assignment(self, request: operations.DeleteTrustProductEntityAssignmentRequest) -> operations.DeleteTrustProductEntityAssignmentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_TRUST_PRODUCT_ENTITY_ASSIGNMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/TrustProducts/{TrustProductSid}/EntityAssignments/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTrustProductEntityAssignmentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def fetch_customer_profile(self, request: operations.FetchCustomerProfileRequest) -> operations.FetchCustomerProfileResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_CUSTOMER_PROFILE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/CustomerProfiles/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCustomerProfileResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1CustomerProfile])
                res.trusthub_v1_customer_profile = out

        return res

    
    
    def fetch_customer_profile_channel_endpoint_assignment(self, request: operations.FetchCustomerProfileChannelEndpointAssignmentRequest) -> operations.FetchCustomerProfileChannelEndpointAssignmentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_CUSTOMER_PROFILE_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCustomerProfileChannelEndpointAssignmentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment])
                res.trusthub_v1_customer_profile_customer_profile_channel_endpoint_assignment = out

        return res

    
    
    def fetch_customer_profile_entity_assignment(self, request: operations.FetchCustomerProfileEntityAssignmentRequest) -> operations.FetchCustomerProfileEntityAssignmentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_CUSTOMER_PROFILE_ENTITY_ASSIGNMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCustomerProfileEntityAssignmentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment])
                res.trusthub_v1_customer_profile_customer_profile_entity_assignment = out

        return res

    
    
    def fetch_customer_profile_evaluation(self, request: operations.FetchCustomerProfileEvaluationRequest) -> operations.FetchCustomerProfileEvaluationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_CUSTOMER_PROFILE_EVALUATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/CustomerProfiles/{CustomerProfileSid}/Evaluations/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCustomerProfileEvaluationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1CustomerProfileCustomerProfileEvaluation])
                res.trusthub_v1_customer_profile_customer_profile_evaluation = out

        return res

    
    
    def fetch_end_user(self, request: operations.FetchEndUserRequest) -> operations.FetchEndUserResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_END_USER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/EndUsers/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchEndUserResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1EndUser])
                res.trusthub_v1_end_user = out

        return res

    
    
    def fetch_end_user_type(self, request: operations.FetchEndUserTypeRequest) -> operations.FetchEndUserTypeResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_END_USER_TYPE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/EndUserTypes/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchEndUserTypeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1EndUserType])
                res.trusthub_v1_end_user_type = out

        return res

    
    
    def fetch_policies(self, request: operations.FetchPoliciesRequest) -> operations.FetchPoliciesResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_POLICIES_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Policies/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchPoliciesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1Policies])
                res.trusthub_v1_policies = out

        return res

    
    
    def fetch_supporting_document(self, request: operations.FetchSupportingDocumentRequest) -> operations.FetchSupportingDocumentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SUPPORTING_DOCUMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/SupportingDocuments/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSupportingDocumentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1SupportingDocument])
                res.trusthub_v1_supporting_document = out

        return res

    
    
    def fetch_supporting_document_type(self, request: operations.FetchSupportingDocumentTypeRequest) -> operations.FetchSupportingDocumentTypeResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SUPPORTING_DOCUMENT_TYPE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/SupportingDocumentTypes/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSupportingDocumentTypeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1SupportingDocumentType])
                res.trusthub_v1_supporting_document_type = out

        return res

    
    
    def fetch_trust_product(self, request: operations.FetchTrustProductRequest) -> operations.FetchTrustProductResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_TRUST_PRODUCT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/TrustProducts/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTrustProductResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1TrustProduct])
                res.trusthub_v1_trust_product = out

        return res

    
    
    def fetch_trust_product_channel_endpoint_assignment(self, request: operations.FetchTrustProductChannelEndpointAssignmentRequest) -> operations.FetchTrustProductChannelEndpointAssignmentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_TRUST_PRODUCT_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTrustProductChannelEndpointAssignmentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment])
                res.trusthub_v1_trust_product_trust_product_channel_endpoint_assignment = out

        return res

    
    
    def fetch_trust_product_entity_assignment(self, request: operations.FetchTrustProductEntityAssignmentRequest) -> operations.FetchTrustProductEntityAssignmentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_TRUST_PRODUCT_ENTITY_ASSIGNMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/TrustProducts/{TrustProductSid}/EntityAssignments/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTrustProductEntityAssignmentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1TrustProductTrustProductEntityAssignment])
                res.trusthub_v1_trust_product_trust_product_entity_assignment = out

        return res

    
    
    def fetch_trust_product_evaluation(self, request: operations.FetchTrustProductEvaluationRequest) -> operations.FetchTrustProductEvaluationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_TRUST_PRODUCT_EVALUATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/TrustProducts/{TrustProductSid}/Evaluations/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTrustProductEvaluationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1TrustProductTrustProductEvaluation])
                res.trusthub_v1_trust_product_trust_product_evaluation = out

        return res

    
    
    def list_customer_profile(self, request: operations.ListCustomerProfileRequest) -> operations.ListCustomerProfileResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_CUSTOMER_PROFILE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/CustomerProfiles"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCustomerProfileResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCustomerProfile200ApplicationJSONListCustomerProfileResponse])
                res.list_customer_profile_response = out

        return res

    
    
    def list_customer_profile_channel_endpoint_assignment(self, request: operations.ListCustomerProfileChannelEndpointAssignmentRequest) -> operations.ListCustomerProfileChannelEndpointAssignmentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_CUSTOMER_PROFILE_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCustomerProfileChannelEndpointAssignmentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCustomerProfileChannelEndpointAssignment200ApplicationJSONListCustomerProfileChannelEndpointAssignmentResponse])
                res.list_customer_profile_channel_endpoint_assignment_response = out

        return res

    
    
    def list_customer_profile_entity_assignment(self, request: operations.ListCustomerProfileEntityAssignmentRequest) -> operations.ListCustomerProfileEntityAssignmentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_CUSTOMER_PROFILE_ENTITY_ASSIGNMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCustomerProfileEntityAssignmentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCustomerProfileEntityAssignment200ApplicationJSONListCustomerProfileEntityAssignmentResponse])
                res.list_customer_profile_entity_assignment_response = out

        return res

    
    
    def list_customer_profile_evaluation(self, request: operations.ListCustomerProfileEvaluationRequest) -> operations.ListCustomerProfileEvaluationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_CUSTOMER_PROFILE_EVALUATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/CustomerProfiles/{CustomerProfileSid}/Evaluations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCustomerProfileEvaluationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCustomerProfileEvaluation200ApplicationJSONListCustomerProfileEvaluationResponse])
                res.list_customer_profile_evaluation_response = out

        return res

    
    
    def list_end_user(self, request: operations.ListEndUserRequest) -> operations.ListEndUserResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_END_USER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/EndUsers"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListEndUserResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListEndUser200ApplicationJSONListEndUserResponse])
                res.list_end_user_response = out

        return res

    
    
    def list_end_user_type(self, request: operations.ListEndUserTypeRequest) -> operations.ListEndUserTypeResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_END_USER_TYPE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/EndUserTypes"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListEndUserTypeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListEndUserType200ApplicationJSONListEndUserTypeResponse])
                res.list_end_user_type_response = out

        return res

    
    
    def list_policies(self, request: operations.ListPoliciesRequest) -> operations.ListPoliciesResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_POLICIES_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/Policies"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPoliciesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPolicies200ApplicationJSONListPoliciesResponse])
                res.list_policies_response = out

        return res

    
    
    def list_supporting_document(self, request: operations.ListSupportingDocumentRequest) -> operations.ListSupportingDocumentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_SUPPORTING_DOCUMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/SupportingDocuments"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSupportingDocumentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSupportingDocument200ApplicationJSONListSupportingDocumentResponse])
                res.list_supporting_document_response = out

        return res

    
    
    def list_supporting_document_type(self, request: operations.ListSupportingDocumentTypeRequest) -> operations.ListSupportingDocumentTypeResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_SUPPORTING_DOCUMENT_TYPE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/SupportingDocumentTypes"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSupportingDocumentTypeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSupportingDocumentType200ApplicationJSONListSupportingDocumentTypeResponse])
                res.list_supporting_document_type_response = out

        return res

    
    
    def list_trust_product(self, request: operations.ListTrustProductRequest) -> operations.ListTrustProductResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_TRUST_PRODUCT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/TrustProducts"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTrustProductResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListTrustProduct200ApplicationJSONListTrustProductResponse])
                res.list_trust_product_response = out

        return res

    
    
    def list_trust_product_channel_endpoint_assignment(self, request: operations.ListTrustProductChannelEndpointAssignmentRequest) -> operations.ListTrustProductChannelEndpointAssignmentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_TRUST_PRODUCT_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTrustProductChannelEndpointAssignmentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListTrustProductChannelEndpointAssignment200ApplicationJSONListTrustProductChannelEndpointAssignmentResponse])
                res.list_trust_product_channel_endpoint_assignment_response = out

        return res

    
    
    def list_trust_product_entity_assignment(self, request: operations.ListTrustProductEntityAssignmentRequest) -> operations.ListTrustProductEntityAssignmentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_TRUST_PRODUCT_ENTITY_ASSIGNMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/TrustProducts/{TrustProductSid}/EntityAssignments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTrustProductEntityAssignmentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListTrustProductEntityAssignment200ApplicationJSONListTrustProductEntityAssignmentResponse])
                res.list_trust_product_entity_assignment_response = out

        return res

    
    
    def list_trust_product_evaluation(self, request: operations.ListTrustProductEvaluationRequest) -> operations.ListTrustProductEvaluationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_TRUST_PRODUCT_EVALUATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/TrustProducts/{TrustProductSid}/Evaluations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTrustProductEvaluationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListTrustProductEvaluation200ApplicationJSONListTrustProductEvaluationResponse])
                res.list_trust_product_evaluation_response = out

        return res

    
    
    def update_customer_profile(self, request: operations.UpdateCustomerProfileRequest) -> operations.UpdateCustomerProfileResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_CUSTOMER_PROFILE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/CustomerProfiles/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateCustomerProfileResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1CustomerProfile])
                res.trusthub_v1_customer_profile = out

        return res

    
    
    def update_end_user(self, request: operations.UpdateEndUserRequest) -> operations.UpdateEndUserResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_END_USER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/EndUsers/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateEndUserResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1EndUser])
                res.trusthub_v1_end_user = out

        return res

    
    
    def update_supporting_document(self, request: operations.UpdateSupportingDocumentRequest) -> operations.UpdateSupportingDocumentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_SUPPORTING_DOCUMENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/SupportingDocuments/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSupportingDocumentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1SupportingDocument])
                res.trusthub_v1_supporting_document = out

        return res

    
    
    def update_trust_product(self, request: operations.UpdateTrustProductRequest) -> operations.UpdateTrustProductResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_TRUST_PRODUCT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/TrustProducts/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateTrustProductResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1TrustProduct])
                res.trusthub_v1_trust_product = out

        return res

    
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
        url = base_url.removesuffix("/") + "/v1/apis"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCustomerProfileResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1CustomerProfile])
                res.responses[r.status_code][content_type] = operations.CreateCustomerProfileResponses(trusthub_v1_customer_profile=out)

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

        res = operations.CreateCustomerProfileChannelEndpointAssignmentResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment])
                res.responses[r.status_code][content_type] = operations.CreateCustomerProfileChannelEndpointAssignmentResponses(trusthub_v1_customer_profile_customer_profile_channel_endpoint_assignment=out)

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

        res = operations.CreateCustomerProfileEntityAssignmentResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment])
                res.responses[r.status_code][content_type] = operations.CreateCustomerProfileEntityAssignmentResponses(trusthub_v1_customer_profile_customer_profile_entity_assignment=out)

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

        res = operations.CreateCustomerProfileEvaluationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1CustomerProfileCustomerProfileEvaluation])
                res.responses[r.status_code][content_type] = operations.CreateCustomerProfileEvaluationResponses(trusthub_v1_customer_profile_customer_profile_evaluation=out)

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
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1EndUser])
                res.responses[r.status_code][content_type] = operations.CreateEndUserResponses(trusthub_v1_end_user=out)

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
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1SupportingDocument])
                res.responses[r.status_code][content_type] = operations.CreateSupportingDocumentResponses(trusthub_v1_supporting_document=out)

        return res

    
    def create_trust_product(self, request: operations.CreateTrustProductRequest) -> operations.CreateTrustProductResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_TRUST_PRODUCT_SERVERS[0]
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

        res = operations.CreateTrustProductResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1TrustProduct])
                res.responses[r.status_code][content_type] = operations.CreateTrustProductResponses(trusthub_v1_trust_product=out)

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

        res = operations.CreateTrustProductChannelEndpointAssignmentResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment])
                res.responses[r.status_code][content_type] = operations.CreateTrustProductChannelEndpointAssignmentResponses(trusthub_v1_trust_product_trust_product_channel_endpoint_assignment=out)

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

        res = operations.CreateTrustProductEntityAssignmentResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1TrustProductTrustProductEntityAssignment])
                res.responses[r.status_code][content_type] = operations.CreateTrustProductEntityAssignmentResponses(trusthub_v1_trust_product_trust_product_entity_assignment=out)

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

        res = operations.CreateTrustProductEvaluationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1TrustProductTrustProductEvaluation])
                res.responses[r.status_code][content_type] = operations.CreateTrustProductEvaluationResponses(trusthub_v1_trust_product_trust_product_evaluation=out)

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

        res = operations.FetchCustomerProfileResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1CustomerProfile])
                res.responses[r.status_code][content_type] = operations.FetchCustomerProfileResponses(trusthub_v1_customer_profile=out)

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

        res = operations.FetchCustomerProfileChannelEndpointAssignmentResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment])
                res.responses[r.status_code][content_type] = operations.FetchCustomerProfileChannelEndpointAssignmentResponses(trusthub_v1_customer_profile_customer_profile_channel_endpoint_assignment=out)

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

        res = operations.FetchCustomerProfileEntityAssignmentResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment])
                res.responses[r.status_code][content_type] = operations.FetchCustomerProfileEntityAssignmentResponses(trusthub_v1_customer_profile_customer_profile_entity_assignment=out)

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

        res = operations.FetchCustomerProfileEvaluationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1CustomerProfileCustomerProfileEvaluation])
                res.responses[r.status_code][content_type] = operations.FetchCustomerProfileEvaluationResponses(trusthub_v1_customer_profile_customer_profile_evaluation=out)

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

        res = operations.FetchEndUserResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1EndUser])
                res.responses[r.status_code][content_type] = operations.FetchEndUserResponses(trusthub_v1_end_user=out)

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

        res = operations.FetchEndUserTypeResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1EndUserType])
                res.responses[r.status_code][content_type] = operations.FetchEndUserTypeResponses(trusthub_v1_end_user_type=out)

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

        res = operations.FetchPoliciesResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1Policies])
                res.responses[r.status_code][content_type] = operations.FetchPoliciesResponses(trusthub_v1_policies=out)

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

        res = operations.FetchSupportingDocumentResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1SupportingDocument])
                res.responses[r.status_code][content_type] = operations.FetchSupportingDocumentResponses(trusthub_v1_supporting_document=out)

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

        res = operations.FetchSupportingDocumentTypeResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1SupportingDocumentType])
                res.responses[r.status_code][content_type] = operations.FetchSupportingDocumentTypeResponses(trusthub_v1_supporting_document_type=out)

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

        res = operations.FetchTrustProductResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1TrustProduct])
                res.responses[r.status_code][content_type] = operations.FetchTrustProductResponses(trusthub_v1_trust_product=out)

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

        res = operations.FetchTrustProductChannelEndpointAssignmentResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment])
                res.responses[r.status_code][content_type] = operations.FetchTrustProductChannelEndpointAssignmentResponses(trusthub_v1_trust_product_trust_product_channel_endpoint_assignment=out)

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

        res = operations.FetchTrustProductEntityAssignmentResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1TrustProductTrustProductEntityAssignment])
                res.responses[r.status_code][content_type] = operations.FetchTrustProductEntityAssignmentResponses(trusthub_v1_trust_product_trust_product_entity_assignment=out)

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

        res = operations.FetchTrustProductEvaluationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1TrustProductTrustProductEvaluation])
                res.responses[r.status_code][content_type] = operations.FetchTrustProductEvaluationResponses(trusthub_v1_trust_product_trust_product_evaluation=out)

        return res

    
    def list_customer_profile(self, request: operations.ListCustomerProfileRequest) -> operations.ListCustomerProfileResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_CUSTOMER_PROFILE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCustomerProfileResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCustomerProfile200ApplicationJSONListCustomerProfileResponse])
                res.responses[r.status_code][content_type] = operations.ListCustomerProfileResponses(list_customer_profile_response=out)

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

        res = operations.ListCustomerProfileChannelEndpointAssignmentResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCustomerProfileChannelEndpointAssignment200ApplicationJSONListCustomerProfileChannelEndpointAssignmentResponse])
                res.responses[r.status_code][content_type] = operations.ListCustomerProfileChannelEndpointAssignmentResponses(list_customer_profile_channel_endpoint_assignment_response=out)

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

        res = operations.ListCustomerProfileEntityAssignmentResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCustomerProfileEntityAssignment200ApplicationJSONListCustomerProfileEntityAssignmentResponse])
                res.responses[r.status_code][content_type] = operations.ListCustomerProfileEntityAssignmentResponses(list_customer_profile_entity_assignment_response=out)

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

        res = operations.ListCustomerProfileEvaluationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCustomerProfileEvaluation200ApplicationJSONListCustomerProfileEvaluationResponse])
                res.responses[r.status_code][content_type] = operations.ListCustomerProfileEvaluationResponses(list_customer_profile_evaluation_response=out)

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

    
    def list_policies(self, request: operations.ListPoliciesRequest) -> operations.ListPoliciesResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_POLICIES_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPoliciesResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPolicies200ApplicationJSONListPoliciesResponse])
                res.responses[r.status_code][content_type] = operations.ListPoliciesResponses(list_policies_response=out)

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

    
    def list_trust_product(self, request: operations.ListTrustProductRequest) -> operations.ListTrustProductResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_TRUST_PRODUCT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTrustProductResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListTrustProduct200ApplicationJSONListTrustProductResponse])
                res.responses[r.status_code][content_type] = operations.ListTrustProductResponses(list_trust_product_response=out)

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

        res = operations.ListTrustProductChannelEndpointAssignmentResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListTrustProductChannelEndpointAssignment200ApplicationJSONListTrustProductChannelEndpointAssignmentResponse])
                res.responses[r.status_code][content_type] = operations.ListTrustProductChannelEndpointAssignmentResponses(list_trust_product_channel_endpoint_assignment_response=out)

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

        res = operations.ListTrustProductEntityAssignmentResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListTrustProductEntityAssignment200ApplicationJSONListTrustProductEntityAssignmentResponse])
                res.responses[r.status_code][content_type] = operations.ListTrustProductEntityAssignmentResponses(list_trust_product_entity_assignment_response=out)

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

        res = operations.ListTrustProductEvaluationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListTrustProductEvaluation200ApplicationJSONListTrustProductEvaluationResponse])
                res.responses[r.status_code][content_type] = operations.ListTrustProductEvaluationResponses(list_trust_product_evaluation_response=out)

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

        res = operations.UpdateCustomerProfileResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1CustomerProfile])
                res.responses[r.status_code][content_type] = operations.UpdateCustomerProfileResponses(trusthub_v1_customer_profile=out)

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

        res = operations.UpdateEndUserResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1EndUser])
                res.responses[r.status_code][content_type] = operations.UpdateEndUserResponses(trusthub_v1_end_user=out)

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

        res = operations.UpdateSupportingDocumentResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1SupportingDocument])
                res.responses[r.status_code][content_type] = operations.UpdateSupportingDocumentResponses(trusthub_v1_supporting_document=out)

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

        res = operations.UpdateTrustProductResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1TrustProduct])
                res.responses[r.status_code][content_type] = operations.UpdateTrustProductResponses(trusthub_v1_trust_product=out)

        return res

    
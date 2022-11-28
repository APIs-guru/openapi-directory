

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://trusthub.twilio.com",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def create_customer_profile(self, request: operations.CreateCustomerProfileRequest) -> operations.CreateCustomerProfileResponse:
        r"""Create a new Customer-Profile.
        """
        
        base_url = operations.CREATE_CUSTOMER_PROFILE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/CustomerProfiles"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCustomerProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1CustomerProfile])
                res.trusthub_v1_customer_profile = out

        return res

    
    def create_customer_profile_channel_endpoint_assignment(self, request: operations.CreateCustomerProfileChannelEndpointAssignmentRequest) -> operations.CreateCustomerProfileChannelEndpointAssignmentResponse:
        r"""Create a new Assigned Item.
        """
        
        base_url = operations.CREATE_CUSTOMER_PROFILE_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCustomerProfileChannelEndpointAssignmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment])
                res.trusthub_v1_customer_profile_customer_profile_channel_endpoint_assignment = out

        return res

    
    def create_customer_profile_entity_assignment(self, request: operations.CreateCustomerProfileEntityAssignmentRequest) -> operations.CreateCustomerProfileEntityAssignmentResponse:
        r"""Create a new Assigned Item.
        """
        
        base_url = operations.CREATE_CUSTOMER_PROFILE_ENTITY_ASSIGNMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCustomerProfileEntityAssignmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment])
                res.trusthub_v1_customer_profile_customer_profile_entity_assignment = out

        return res

    
    def create_customer_profile_evaluation(self, request: operations.CreateCustomerProfileEvaluationRequest) -> operations.CreateCustomerProfileEvaluationResponse:
        r"""Create a new Evaluation
        """
        
        base_url = operations.CREATE_CUSTOMER_PROFILE_EVALUATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/CustomerProfiles/{CustomerProfileSid}/Evaluations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCustomerProfileEvaluationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1CustomerProfileCustomerProfileEvaluation])
                res.trusthub_v1_customer_profile_customer_profile_evaluation = out

        return res

    
    def create_end_user(self, request: operations.CreateEndUserRequest) -> operations.CreateEndUserResponse:
        r"""Create a new End User.
        """
        
        base_url = operations.CREATE_END_USER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/EndUsers"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateEndUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1EndUser])
                res.trusthub_v1_end_user = out

        return res

    
    def create_supporting_document(self, request: operations.CreateSupportingDocumentRequest) -> operations.CreateSupportingDocumentResponse:
        r"""Create a new Supporting Document.
        """
        
        base_url = operations.CREATE_SUPPORTING_DOCUMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/SupportingDocuments"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSupportingDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1SupportingDocument])
                res.trusthub_v1_supporting_document = out

        return res

    
    def create_trust_product(self, request: operations.CreateTrustProductRequest) -> operations.CreateTrustProductResponse:
        r"""Create a new Customer-Profile.
        """
        
        base_url = operations.CREATE_TRUST_PRODUCT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/TrustProducts"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTrustProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1TrustProduct])
                res.trusthub_v1_trust_product = out

        return res

    
    def create_trust_product_channel_endpoint_assignment(self, request: operations.CreateTrustProductChannelEndpointAssignmentRequest) -> operations.CreateTrustProductChannelEndpointAssignmentResponse:
        r"""Create a new Assigned Item.
        """
        
        base_url = operations.CREATE_TRUST_PRODUCT_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTrustProductChannelEndpointAssignmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment])
                res.trusthub_v1_trust_product_trust_product_channel_endpoint_assignment = out

        return res

    
    def create_trust_product_entity_assignment(self, request: operations.CreateTrustProductEntityAssignmentRequest) -> operations.CreateTrustProductEntityAssignmentResponse:
        r"""Create a new Assigned Item.
        """
        
        base_url = operations.CREATE_TRUST_PRODUCT_ENTITY_ASSIGNMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/TrustProducts/{TrustProductSid}/EntityAssignments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTrustProductEntityAssignmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1TrustProductTrustProductEntityAssignment])
                res.trusthub_v1_trust_product_trust_product_entity_assignment = out

        return res

    
    def create_trust_product_evaluation(self, request: operations.CreateTrustProductEvaluationRequest) -> operations.CreateTrustProductEvaluationResponse:
        r"""Create a new Evaluation
        """
        
        base_url = operations.CREATE_TRUST_PRODUCT_EVALUATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/TrustProducts/{TrustProductSid}/Evaluations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTrustProductEvaluationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1TrustProductTrustProductEvaluation])
                res.trusthub_v1_trust_product_trust_product_evaluation = out

        return res

    
    def delete_customer_profile(self, request: operations.DeleteCustomerProfileRequest) -> operations.DeleteCustomerProfileResponse:
        r"""Delete a specific Customer-Profile.
        """
        
        base_url = operations.DELETE_CUSTOMER_PROFILE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/CustomerProfiles/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCustomerProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_customer_profile_channel_endpoint_assignment(self, request: operations.DeleteCustomerProfileChannelEndpointAssignmentRequest) -> operations.DeleteCustomerProfileChannelEndpointAssignmentResponse:
        r"""Remove an Assignment Item Instance.
        """
        
        base_url = operations.DELETE_CUSTOMER_PROFILE_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCustomerProfileChannelEndpointAssignmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_customer_profile_entity_assignment(self, request: operations.DeleteCustomerProfileEntityAssignmentRequest) -> operations.DeleteCustomerProfileEntityAssignmentResponse:
        r"""Remove an Assignment Item Instance.
        """
        
        base_url = operations.DELETE_CUSTOMER_PROFILE_ENTITY_ASSIGNMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCustomerProfileEntityAssignmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_end_user(self, request: operations.DeleteEndUserRequest) -> operations.DeleteEndUserResponse:
        r"""Delete a specific End User.
        """
        
        base_url = operations.DELETE_END_USER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/EndUsers/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteEndUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_supporting_document(self, request: operations.DeleteSupportingDocumentRequest) -> operations.DeleteSupportingDocumentResponse:
        r"""Delete a specific Supporting Document.
        """
        
        base_url = operations.DELETE_SUPPORTING_DOCUMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/SupportingDocuments/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSupportingDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_trust_product(self, request: operations.DeleteTrustProductRequest) -> operations.DeleteTrustProductResponse:
        r"""Delete a specific Customer-Profile.
        """
        
        base_url = operations.DELETE_TRUST_PRODUCT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/TrustProducts/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTrustProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_trust_product_channel_endpoint_assignment(self, request: operations.DeleteTrustProductChannelEndpointAssignmentRequest) -> operations.DeleteTrustProductChannelEndpointAssignmentResponse:
        r"""Remove an Assignment Item Instance.
        """
        
        base_url = operations.DELETE_TRUST_PRODUCT_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTrustProductChannelEndpointAssignmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_trust_product_entity_assignment(self, request: operations.DeleteTrustProductEntityAssignmentRequest) -> operations.DeleteTrustProductEntityAssignmentResponse:
        r"""Remove an Assignment Item Instance.
        """
        
        base_url = operations.DELETE_TRUST_PRODUCT_ENTITY_ASSIGNMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/TrustProducts/{TrustProductSid}/EntityAssignments/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTrustProductEntityAssignmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def fetch_customer_profile(self, request: operations.FetchCustomerProfileRequest) -> operations.FetchCustomerProfileResponse:
        r"""Fetch a specific Customer-Profile instance.
        """
        
        base_url = operations.FETCH_CUSTOMER_PROFILE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/CustomerProfiles/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCustomerProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1CustomerProfile])
                res.trusthub_v1_customer_profile = out

        return res

    
    def fetch_customer_profile_channel_endpoint_assignment(self, request: operations.FetchCustomerProfileChannelEndpointAssignmentRequest) -> operations.FetchCustomerProfileChannelEndpointAssignmentResponse:
        r"""Fetch specific Assigned Item Instance.
        """
        
        base_url = operations.FETCH_CUSTOMER_PROFILE_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCustomerProfileChannelEndpointAssignmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment])
                res.trusthub_v1_customer_profile_customer_profile_channel_endpoint_assignment = out

        return res

    
    def fetch_customer_profile_entity_assignment(self, request: operations.FetchCustomerProfileEntityAssignmentRequest) -> operations.FetchCustomerProfileEntityAssignmentResponse:
        r"""Fetch specific Assigned Item Instance.
        """
        
        base_url = operations.FETCH_CUSTOMER_PROFILE_ENTITY_ASSIGNMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCustomerProfileEntityAssignmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment])
                res.trusthub_v1_customer_profile_customer_profile_entity_assignment = out

        return res

    
    def fetch_customer_profile_evaluation(self, request: operations.FetchCustomerProfileEvaluationRequest) -> operations.FetchCustomerProfileEvaluationResponse:
        r"""Fetch specific Evaluation Instance.
        """
        
        base_url = operations.FETCH_CUSTOMER_PROFILE_EVALUATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/CustomerProfiles/{CustomerProfileSid}/Evaluations/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCustomerProfileEvaluationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1CustomerProfileCustomerProfileEvaluation])
                res.trusthub_v1_customer_profile_customer_profile_evaluation = out

        return res

    
    def fetch_end_user(self, request: operations.FetchEndUserRequest) -> operations.FetchEndUserResponse:
        r"""Fetch specific End User Instance.
        """
        
        base_url = operations.FETCH_END_USER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/EndUsers/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchEndUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1EndUser])
                res.trusthub_v1_end_user = out

        return res

    
    def fetch_end_user_type(self, request: operations.FetchEndUserTypeRequest) -> operations.FetchEndUserTypeResponse:
        r"""Fetch a specific End-User Type Instance.
        """
        
        base_url = operations.FETCH_END_USER_TYPE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/EndUserTypes/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchEndUserTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1EndUserType])
                res.trusthub_v1_end_user_type = out

        return res

    
    def fetch_policies(self, request: operations.FetchPoliciesRequest) -> operations.FetchPoliciesResponse:
        r"""Fetch specific Policy Instance.
        """
        
        base_url = operations.FETCH_POLICIES_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Policies/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1Policies])
                res.trusthub_v1_policies = out

        return res

    
    def fetch_supporting_document(self, request: operations.FetchSupportingDocumentRequest) -> operations.FetchSupportingDocumentResponse:
        r"""Fetch specific Supporting Document Instance.
        """
        
        base_url = operations.FETCH_SUPPORTING_DOCUMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/SupportingDocuments/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSupportingDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1SupportingDocument])
                res.trusthub_v1_supporting_document = out

        return res

    
    def fetch_supporting_document_type(self, request: operations.FetchSupportingDocumentTypeRequest) -> operations.FetchSupportingDocumentTypeResponse:
        r"""Fetch a specific Supporting Document Type Instance.
        """
        
        base_url = operations.FETCH_SUPPORTING_DOCUMENT_TYPE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/SupportingDocumentTypes/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSupportingDocumentTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1SupportingDocumentType])
                res.trusthub_v1_supporting_document_type = out

        return res

    
    def fetch_trust_product(self, request: operations.FetchTrustProductRequest) -> operations.FetchTrustProductResponse:
        r"""Fetch a specific Customer-Profile instance.
        """
        
        base_url = operations.FETCH_TRUST_PRODUCT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/TrustProducts/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTrustProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1TrustProduct])
                res.trusthub_v1_trust_product = out

        return res

    
    def fetch_trust_product_channel_endpoint_assignment(self, request: operations.FetchTrustProductChannelEndpointAssignmentRequest) -> operations.FetchTrustProductChannelEndpointAssignmentResponse:
        r"""Fetch specific Assigned Item Instance.
        """
        
        base_url = operations.FETCH_TRUST_PRODUCT_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTrustProductChannelEndpointAssignmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment])
                res.trusthub_v1_trust_product_trust_product_channel_endpoint_assignment = out

        return res

    
    def fetch_trust_product_entity_assignment(self, request: operations.FetchTrustProductEntityAssignmentRequest) -> operations.FetchTrustProductEntityAssignmentResponse:
        r"""Fetch specific Assigned Item Instance.
        """
        
        base_url = operations.FETCH_TRUST_PRODUCT_ENTITY_ASSIGNMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/TrustProducts/{TrustProductSid}/EntityAssignments/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTrustProductEntityAssignmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1TrustProductTrustProductEntityAssignment])
                res.trusthub_v1_trust_product_trust_product_entity_assignment = out

        return res

    
    def fetch_trust_product_evaluation(self, request: operations.FetchTrustProductEvaluationRequest) -> operations.FetchTrustProductEvaluationResponse:
        r"""Fetch specific Evaluation Instance.
        """
        
        base_url = operations.FETCH_TRUST_PRODUCT_EVALUATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/TrustProducts/{TrustProductSid}/Evaluations/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTrustProductEvaluationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1TrustProductTrustProductEvaluation])
                res.trusthub_v1_trust_product_trust_product_evaluation = out

        return res

    
    def list_customer_profile(self, request: operations.ListCustomerProfileRequest) -> operations.ListCustomerProfileResponse:
        r"""Retrieve a list of all Customer-Profiles for an account.
        """
        
        base_url = operations.LIST_CUSTOMER_PROFILE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/CustomerProfiles"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCustomerProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCustomerProfileListCustomerProfileResponse])
                res.list_customer_profile_response = out

        return res

    
    def list_customer_profile_channel_endpoint_assignment(self, request: operations.ListCustomerProfileChannelEndpointAssignmentRequest) -> operations.ListCustomerProfileChannelEndpointAssignmentResponse:
        r"""Retrieve a list of all Assigned Items for an account.
        """
        
        base_url = operations.LIST_CUSTOMER_PROFILE_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCustomerProfileChannelEndpointAssignmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponse])
                res.list_customer_profile_channel_endpoint_assignment_response = out

        return res

    
    def list_customer_profile_entity_assignment(self, request: operations.ListCustomerProfileEntityAssignmentRequest) -> operations.ListCustomerProfileEntityAssignmentResponse:
        r"""Retrieve a list of all Assigned Items for an account.
        """
        
        base_url = operations.LIST_CUSTOMER_PROFILE_ENTITY_ASSIGNMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCustomerProfileEntityAssignmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponse])
                res.list_customer_profile_entity_assignment_response = out

        return res

    
    def list_customer_profile_evaluation(self, request: operations.ListCustomerProfileEvaluationRequest) -> operations.ListCustomerProfileEvaluationResponse:
        r"""Retrieve a list of Evaluations associated to the customer_profile resource.
        """
        
        base_url = operations.LIST_CUSTOMER_PROFILE_EVALUATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/CustomerProfiles/{CustomerProfileSid}/Evaluations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCustomerProfileEvaluationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCustomerProfileEvaluationListCustomerProfileEvaluationResponse])
                res.list_customer_profile_evaluation_response = out

        return res

    
    def list_end_user(self, request: operations.ListEndUserRequest) -> operations.ListEndUserResponse:
        r"""Retrieve a list of all End User for an account.
        """
        
        base_url = operations.LIST_END_USER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/EndUsers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListEndUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListEndUserListEndUserResponse])
                res.list_end_user_response = out

        return res

    
    def list_end_user_type(self, request: operations.ListEndUserTypeRequest) -> operations.ListEndUserTypeResponse:
        r"""Retrieve a list of all End-User Types.
        """
        
        base_url = operations.LIST_END_USER_TYPE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/EndUserTypes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListEndUserTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListEndUserTypeListEndUserTypeResponse])
                res.list_end_user_type_response = out

        return res

    
    def list_policies(self, request: operations.ListPoliciesRequest) -> operations.ListPoliciesResponse:
        r"""Retrieve a list of all Policys.
        """
        
        base_url = operations.LIST_POLICIES_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Policies"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPoliciesListPoliciesResponse])
                res.list_policies_response = out

        return res

    
    def list_supporting_document(self, request: operations.ListSupportingDocumentRequest) -> operations.ListSupportingDocumentResponse:
        r"""Retrieve a list of all Supporting Document for an account.
        """
        
        base_url = operations.LIST_SUPPORTING_DOCUMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/SupportingDocuments"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSupportingDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSupportingDocumentListSupportingDocumentResponse])
                res.list_supporting_document_response = out

        return res

    
    def list_supporting_document_type(self, request: operations.ListSupportingDocumentTypeRequest) -> operations.ListSupportingDocumentTypeResponse:
        r"""Retrieve a list of all Supporting Document Types.
        """
        
        base_url = operations.LIST_SUPPORTING_DOCUMENT_TYPE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/SupportingDocumentTypes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSupportingDocumentTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSupportingDocumentTypeListSupportingDocumentTypeResponse])
                res.list_supporting_document_type_response = out

        return res

    
    def list_trust_product(self, request: operations.ListTrustProductRequest) -> operations.ListTrustProductResponse:
        r"""Retrieve a list of all Customer-Profiles for an account.
        """
        
        base_url = operations.LIST_TRUST_PRODUCT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/TrustProducts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTrustProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListTrustProductListTrustProductResponse])
                res.list_trust_product_response = out

        return res

    
    def list_trust_product_channel_endpoint_assignment(self, request: operations.ListTrustProductChannelEndpointAssignmentRequest) -> operations.ListTrustProductChannelEndpointAssignmentResponse:
        r"""Retrieve a list of all Assigned Items for an account.
        """
        
        base_url = operations.LIST_TRUST_PRODUCT_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTrustProductChannelEndpointAssignmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponse])
                res.list_trust_product_channel_endpoint_assignment_response = out

        return res

    
    def list_trust_product_entity_assignment(self, request: operations.ListTrustProductEntityAssignmentRequest) -> operations.ListTrustProductEntityAssignmentResponse:
        r"""Retrieve a list of all Assigned Items for an account.
        """
        
        base_url = operations.LIST_TRUST_PRODUCT_ENTITY_ASSIGNMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/TrustProducts/{TrustProductSid}/EntityAssignments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTrustProductEntityAssignmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponse])
                res.list_trust_product_entity_assignment_response = out

        return res

    
    def list_trust_product_evaluation(self, request: operations.ListTrustProductEvaluationRequest) -> operations.ListTrustProductEvaluationResponse:
        r"""Retrieve a list of Evaluations associated to the trust_product resource.
        """
        
        base_url = operations.LIST_TRUST_PRODUCT_EVALUATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/TrustProducts/{TrustProductSid}/Evaluations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTrustProductEvaluationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListTrustProductEvaluationListTrustProductEvaluationResponse])
                res.list_trust_product_evaluation_response = out

        return res

    
    def update_customer_profile(self, request: operations.UpdateCustomerProfileRequest) -> operations.UpdateCustomerProfileResponse:
        r"""Updates a Customer-Profile in an account.
        """
        
        base_url = operations.UPDATE_CUSTOMER_PROFILE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/CustomerProfiles/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateCustomerProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1CustomerProfile])
                res.trusthub_v1_customer_profile = out

        return res

    
    def update_end_user(self, request: operations.UpdateEndUserRequest) -> operations.UpdateEndUserResponse:
        r"""Update an existing End User.
        """
        
        base_url = operations.UPDATE_END_USER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/EndUsers/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateEndUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1EndUser])
                res.trusthub_v1_end_user = out

        return res

    
    def update_supporting_document(self, request: operations.UpdateSupportingDocumentRequest) -> operations.UpdateSupportingDocumentResponse:
        r"""Update an existing Supporting Document.
        """
        
        base_url = operations.UPDATE_SUPPORTING_DOCUMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/SupportingDocuments/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSupportingDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1SupportingDocument])
                res.trusthub_v1_supporting_document = out

        return res

    
    def update_trust_product(self, request: operations.UpdateTrustProductRequest) -> operations.UpdateTrustProductResponse:
        r"""Updates a Customer-Profile in an account.
        """
        
        base_url = operations.UPDATE_TRUST_PRODUCT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/TrustProducts/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateTrustProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrusthubV1TrustProduct])
                res.trusthub_v1_trust_product = out

        return res

    
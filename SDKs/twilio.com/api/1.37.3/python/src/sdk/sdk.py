

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.twilio.com",
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
        
    
    
    
    def create_account(self, request: operations.CreateAccountRequest) -> operations.CreateAccountResponse:
        r"""Create a new Twilio Subaccount from the account making the request
        """
        
        base_url = operations.CREATE_ACCOUNT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/2010-04-01/Accounts.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010Account])
                res.api_v2010_account = out

        return res

    
    def create_address(self, request: operations.CreateAddressRequest) -> operations.CreateAddressResponse:
        base_url = operations.CREATE_ADDRESS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Addresses.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountAddress])
                res.api_v2010_account_address = out

        return res

    
    def create_application(self, request: operations.CreateApplicationRequest) -> operations.CreateApplicationResponse:
        r"""Create a new application within your account
        """
        
        base_url = operations.CREATE_APPLICATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Applications.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateApplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountApplication])
                res.api_v2010_account_application = out

        return res

    
    def create_call(self, request: operations.CreateCallRequest) -> operations.CreateCallResponse:
        r"""Create a new outgoing call to phones, SIP-enabled endpoints or Twilio Client connections
        """
        
        base_url = operations.CREATE_CALL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Calls.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountCall])
                res.api_v2010_account_call = out

        return res

    
    def create_call_feedback_summary(self, request: operations.CreateCallFeedbackSummaryRequest) -> operations.CreateCallFeedbackSummaryResponse:
        r"""Create a FeedbackSummary resource for a call
        """
        
        base_url = operations.CREATE_CALL_FEEDBACK_SUMMARY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Calls/FeedbackSummary.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCallFeedbackSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountCallCallFeedbackSummary])
                res.api_v2010_account_call_call_feedback_summary = out

        return res

    
    def create_call_recording(self, request: operations.CreateCallRecordingRequest) -> operations.CreateCallRecordingResponse:
        r"""Create a recording for the call
        """
        
        base_url = operations.CREATE_CALL_RECORDING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCallRecordingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountCallCallRecording])
                res.api_v2010_account_call_call_recording = out

        return res

    
    def create_incoming_phone_number(self, request: operations.CreateIncomingPhoneNumberRequest) -> operations.CreateIncomingPhoneNumberResponse:
        r"""Purchase a phone-number for the account.
        """
        
        base_url = operations.CREATE_INCOMING_PHONE_NUMBER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateIncomingPhoneNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountIncomingPhoneNumber])
                res.api_v2010_account_incoming_phone_number = out

        return res

    
    def create_incoming_phone_number_assigned_add_on(self, request: operations.CreateIncomingPhoneNumberAssignedAddOnRequest) -> operations.CreateIncomingPhoneNumberAssignedAddOnResponse:
        r"""Assign an Add-on installation to the Number specified.
        """
        
        base_url = operations.CREATE_INCOMING_PHONE_NUMBER_ASSIGNED_ADD_ON_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateIncomingPhoneNumberAssignedAddOnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn])
                res.api_v2010_account_incoming_phone_number_incoming_phone_number_assigned_add_on = out

        return res

    
    def create_incoming_phone_number_local(self, request: operations.CreateIncomingPhoneNumberLocalRequest) -> operations.CreateIncomingPhoneNumberLocalResponse:
        base_url = operations.CREATE_INCOMING_PHONE_NUMBER_LOCAL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Local.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateIncomingPhoneNumberLocalResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal])
                res.api_v2010_account_incoming_phone_number_incoming_phone_number_local = out

        return res

    
    def create_incoming_phone_number_mobile(self, request: operations.CreateIncomingPhoneNumberMobileRequest) -> operations.CreateIncomingPhoneNumberMobileResponse:
        base_url = operations.CREATE_INCOMING_PHONE_NUMBER_MOBILE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Mobile.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateIncomingPhoneNumberMobileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile])
                res.api_v2010_account_incoming_phone_number_incoming_phone_number_mobile = out

        return res

    
    def create_incoming_phone_number_toll_free(self, request: operations.CreateIncomingPhoneNumberTollFreeRequest) -> operations.CreateIncomingPhoneNumberTollFreeResponse:
        base_url = operations.CREATE_INCOMING_PHONE_NUMBER_TOLL_FREE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/TollFree.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateIncomingPhoneNumberTollFreeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree])
                res.api_v2010_account_incoming_phone_number_incoming_phone_number_toll_free = out

        return res

    
    def create_message(self, request: operations.CreateMessageRequest) -> operations.CreateMessageResponse:
        r"""Send a message from the account used to make the request
        """
        
        base_url = operations.CREATE_MESSAGE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Messages.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountMessage])
                res.api_v2010_account_message = out

        return res

    
    def create_message_feedback(self, request: operations.CreateMessageFeedbackRequest) -> operations.CreateMessageFeedbackResponse:
        base_url = operations.CREATE_MESSAGE_FEEDBACK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Feedback.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateMessageFeedbackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountMessageMessageFeedback])
                res.api_v2010_account_message_message_feedback = out

        return res

    
    def create_new_key(self, request: operations.CreateNewKeyRequest) -> operations.CreateNewKeyResponse:
        base_url = operations.CREATE_NEW_KEY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Keys.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNewKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountNewKey])
                res.api_v2010_account_new_key = out

        return res

    
    def create_new_signing_key(self, request: operations.CreateNewSigningKeyRequest) -> operations.CreateNewSigningKeyResponse:
        r"""Create a new Signing Key for the account making the request.
        """
        
        base_url = operations.CREATE_NEW_SIGNING_KEY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SigningKeys.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNewSigningKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountNewSigningKey])
                res.api_v2010_account_new_signing_key = out

        return res

    
    def create_participant(self, request: operations.CreateParticipantRequest) -> operations.CreateParticipantResponse:
        base_url = operations.CREATE_PARTICIPANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateParticipantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountConferenceParticipant])
                res.api_v2010_account_conference_participant = out

        return res

    
    def create_payments(self, request: operations.CreatePaymentsRequest) -> operations.CreatePaymentsResponse:
        r"""create an instance of payments. This will start a new payments session
        """
        
        base_url = operations.CREATE_PAYMENTS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Payments.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePaymentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountCallPayments])
                res.api_v2010_account_call_payments = out

        return res

    
    def create_queue(self, request: operations.CreateQueueRequest) -> operations.CreateQueueResponse:
        r"""Create a queue
        """
        
        base_url = operations.CREATE_QUEUE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Queues.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountQueue])
                res.api_v2010_account_queue = out

        return res

    
    def create_sip_auth_calls_credential_list_mapping(self, request: operations.CreateSipAuthCallsCredentialListMappingRequest) -> operations.CreateSipAuthCallsCredentialListMappingResponse:
        r"""Create a new credential list mapping resource
        """
        
        base_url = operations.CREATE_SIP_AUTH_CALLS_CREDENTIAL_LIST_MAPPING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSipAuthCallsCredentialListMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping])
                res.api_v2010_account_sip_sip_domain_sip_auth_sip_auth_calls_sip_auth_calls_credential_list_mapping = out

        return res

    
    def create_sip_auth_calls_ip_access_control_list_mapping(self, request: operations.CreateSipAuthCallsIPAccessControlListMappingRequest) -> operations.CreateSipAuthCallsIPAccessControlListMappingResponse:
        r"""Create a new IP Access Control List mapping
        """
        
        base_url = operations.CREATE_SIP_AUTH_CALLS_IP_ACCESS_CONTROL_LIST_MAPPING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSipAuthCallsIPAccessControlListMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIPAccessControlListMapping])
                res.api_v2010_account_sip_sip_domain_sip_auth_sip_auth_calls_sip_auth_calls_ip_access_control_list_mapping = out

        return res

    
    def create_sip_auth_registrations_credential_list_mapping(self, request: operations.CreateSipAuthRegistrationsCredentialListMappingRequest) -> operations.CreateSipAuthRegistrationsCredentialListMappingResponse:
        r"""Create a new credential list mapping resource
        """
        
        base_url = operations.CREATE_SIP_AUTH_REGISTRATIONS_CREDENTIAL_LIST_MAPPING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSipAuthRegistrationsCredentialListMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping])
                res.api_v2010_account_sip_sip_domain_sip_auth_sip_auth_registrations_sip_auth_registrations_credential_list_mapping = out

        return res

    
    def create_sip_credential(self, request: operations.CreateSipCredentialRequest) -> operations.CreateSipCredentialResponse:
        r"""Create a new credential resource.
        """
        
        base_url = operations.CREATE_SIP_CREDENTIAL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSipCredentialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountSipSipCredentialListSipCredential])
                res.api_v2010_account_sip_sip_credential_list_sip_credential = out

        return res

    
    def create_sip_credential_list(self, request: operations.CreateSipCredentialListRequest) -> operations.CreateSipCredentialListResponse:
        r"""Create a Credential List
        """
        
        base_url = operations.CREATE_SIP_CREDENTIAL_LIST_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSipCredentialListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountSipSipCredentialList])
                res.api_v2010_account_sip_sip_credential_list = out

        return res

    
    def create_sip_credential_list_mapping(self, request: operations.CreateSipCredentialListMappingRequest) -> operations.CreateSipCredentialListMappingResponse:
        r"""Create a CredentialListMapping resource for an account.
        """
        
        base_url = operations.CREATE_SIP_CREDENTIAL_LIST_MAPPING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSipCredentialListMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountSipSipDomainSipCredentialListMapping])
                res.api_v2010_account_sip_sip_domain_sip_credential_list_mapping = out

        return res

    
    def create_sip_domain(self, request: operations.CreateSipDomainRequest) -> operations.CreateSipDomainResponse:
        r"""Create a new Domain
        """
        
        base_url = operations.CREATE_SIP_DOMAIN_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSipDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountSipSipDomain])
                res.api_v2010_account_sip_sip_domain = out

        return res

    
    def create_sip_ip_access_control_list(self, request: operations.CreateSipIPAccessControlListRequest) -> operations.CreateSipIPAccessControlListResponse:
        r"""Create a new IpAccessControlList resource
        """
        
        base_url = operations.CREATE_SIP_IP_ACCESS_CONTROL_LIST_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSipIPAccessControlListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountSipSipIPAccessControlList])
                res.api_v2010_account_sip_sip_ip_access_control_list = out

        return res

    
    def create_sip_ip_access_control_list_mapping(self, request: operations.CreateSipIPAccessControlListMappingRequest) -> operations.CreateSipIPAccessControlListMappingResponse:
        r"""Create a new IpAccessControlListMapping resource.
        """
        
        base_url = operations.CREATE_SIP_IP_ACCESS_CONTROL_LIST_MAPPING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSipIPAccessControlListMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountSipSipDomainSipIPAccessControlListMapping])
                res.api_v2010_account_sip_sip_domain_sip_ip_access_control_list_mapping = out

        return res

    
    def create_sip_ip_address(self, request: operations.CreateSipIPAddressRequest) -> operations.CreateSipIPAddressResponse:
        r"""Create a new IpAddress resource.
        """
        
        base_url = operations.CREATE_SIP_IP_ADDRESS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSipIPAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountSipSipIPAccessControlListSipIPAddress])
                res.api_v2010_account_sip_sip_ip_access_control_list_sip_ip_address = out

        return res

    
    def create_siprec(self, request: operations.CreateSiprecRequest) -> operations.CreateSiprecResponse:
        r"""Create a Siprec
        """
        
        base_url = operations.CREATE_SIPREC_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Siprec.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSiprecResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountCallSiprec])
                res.api_v2010_account_call_siprec = out

        return res

    
    def create_stream(self, request: operations.CreateStreamRequest) -> operations.CreateStreamResponse:
        r"""Create a Stream
        """
        
        base_url = operations.CREATE_STREAM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Streams.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateStreamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountCallStream])
                res.api_v2010_account_call_stream = out

        return res

    
    def create_token(self, request: operations.CreateTokenRequest) -> operations.CreateTokenResponse:
        r"""Create a new token for ICE servers
        """
        
        base_url = operations.CREATE_TOKEN_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Tokens.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountToken])
                res.api_v2010_account_token = out

        return res

    
    def create_usage_trigger(self, request: operations.CreateUsageTriggerRequest) -> operations.CreateUsageTriggerResponse:
        r"""Create a new UsageTrigger
        """
        
        base_url = operations.CREATE_USAGE_TRIGGER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Usage/Triggers.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateUsageTriggerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountUsageUsageTrigger])
                res.api_v2010_account_usage_usage_trigger = out

        return res

    
    def create_user_defined_message(self, request: operations.CreateUserDefinedMessageRequest) -> operations.CreateUserDefinedMessageResponse:
        r"""Create a new User Defined Message for the given Call SID.
        """
        
        base_url = operations.CREATE_USER_DEFINED_MESSAGE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessages.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateUserDefinedMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountCallUserDefinedMessage])
                res.api_v2010_account_call_user_defined_message = out

        return res

    
    def create_user_defined_message_subscription(self, request: operations.CreateUserDefinedMessageSubscriptionRequest) -> operations.CreateUserDefinedMessageSubscriptionResponse:
        r"""Subscribe to User Defined Messages for a given Call SID.
        """
        
        base_url = operations.CREATE_USER_DEFINED_MESSAGE_SUBSCRIPTION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessageSubscriptions.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateUserDefinedMessageSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountCallUserDefinedMessageSubscription])
                res.api_v2010_account_call_user_defined_message_subscription = out

        return res

    
    def create_validation_request(self, request: operations.CreateValidationRequestRequest) -> operations.CreateValidationRequestResponse:
        base_url = operations.CREATE_VALIDATION_REQUEST_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateValidationRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountValidationRequest])
                res.api_v2010_account_validation_request = out

        return res

    
    def delete_address(self, request: operations.DeleteAddressRequest) -> operations.DeleteAddressResponse:
        base_url = operations.DELETE_ADDRESS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_application(self, request: operations.DeleteApplicationRequest) -> operations.DeleteApplicationResponse:
        r"""Delete the application by the specified application sid
        """
        
        base_url = operations.DELETE_APPLICATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteApplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_call(self, request: operations.DeleteCallRequest) -> operations.DeleteCallResponse:
        r"""Delete a Call record from your account. Once the record is deleted, it will no longer appear in the API and Account Portal logs.
        """
        
        base_url = operations.DELETE_CALL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Calls/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_call_feedback_summary(self, request: operations.DeleteCallFeedbackSummaryRequest) -> operations.DeleteCallFeedbackSummaryResponse:
        r"""Delete a FeedbackSummary resource from a call
        """
        
        base_url = operations.DELETE_CALL_FEEDBACK_SUMMARY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Calls/FeedbackSummary/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCallFeedbackSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_call_recording(self, request: operations.DeleteCallRecordingRequest) -> operations.DeleteCallRecordingResponse:
        r"""Delete a recording from your account
        """
        
        base_url = operations.DELETE_CALL_RECORDING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCallRecordingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_conference_recording(self, request: operations.DeleteConferenceRecordingRequest) -> operations.DeleteConferenceRecordingResponse:
        r"""Delete a recording from your account
        """
        
        base_url = operations.DELETE_CONFERENCE_RECORDING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConferenceRecordingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_connect_app(self, request: operations.DeleteConnectAppRequest) -> operations.DeleteConnectAppResponse:
        r"""Delete an instance of a connect-app
        """
        
        base_url = operations.DELETE_CONNECT_APP_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConnectAppResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_incoming_phone_number(self, request: operations.DeleteIncomingPhoneNumberRequest) -> operations.DeleteIncomingPhoneNumberResponse:
        r"""Delete a phone-numbers belonging to the account used to make the request.
        """
        
        base_url = operations.DELETE_INCOMING_PHONE_NUMBER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteIncomingPhoneNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_incoming_phone_number_assigned_add_on(self, request: operations.DeleteIncomingPhoneNumberAssignedAddOnRequest) -> operations.DeleteIncomingPhoneNumberAssignedAddOnResponse:
        r"""Remove the assignment of an Add-on installation from the Number specified.
        """
        
        base_url = operations.DELETE_INCOMING_PHONE_NUMBER_ASSIGNED_ADD_ON_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteIncomingPhoneNumberAssignedAddOnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_key(self, request: operations.DeleteKeyRequest) -> operations.DeleteKeyResponse:
        base_url = operations.DELETE_KEY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Keys/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_media(self, request: operations.DeleteMediaRequest) -> operations.DeleteMediaResponse:
        r"""Delete media from your account. Once delete, you will no longer be billed
        """
        
        base_url = operations.DELETE_MEDIA_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_message(self, request: operations.DeleteMessageRequest) -> operations.DeleteMessageResponse:
        r"""Deletes a message record from your account
        """
        
        base_url = operations.DELETE_MESSAGE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_outgoing_caller_id(self, request: operations.DeleteOutgoingCallerIDRequest) -> operations.DeleteOutgoingCallerIDResponse:
        r"""Delete the caller-id specified from the account
        """
        
        base_url = operations.DELETE_OUTGOING_CALLER_ID_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOutgoingCallerIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_participant(self, request: operations.DeleteParticipantRequest) -> operations.DeleteParticipantResponse:
        r"""Kick a participant from a given conference
        """
        
        base_url = operations.DELETE_PARTICIPANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteParticipantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_queue(self, request: operations.DeleteQueueRequest) -> operations.DeleteQueueResponse:
        r"""Remove an empty queue
        """
        
        base_url = operations.DELETE_QUEUE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Queues/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_recording(self, request: operations.DeleteRecordingRequest) -> operations.DeleteRecordingResponse:
        r"""Delete a recording from your account
        """
        
        base_url = operations.DELETE_RECORDING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Recordings/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRecordingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_recording_add_on_result(self, request: operations.DeleteRecordingAddOnResultRequest) -> operations.DeleteRecordingAddOnResultResponse:
        r"""Delete a result and purge all associated Payloads
        """
        
        base_url = operations.DELETE_RECORDING_ADD_ON_RESULT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRecordingAddOnResultResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_recording_add_on_result_payload(self, request: operations.DeleteRecordingAddOnResultPayloadRequest) -> operations.DeleteRecordingAddOnResultPayloadResponse:
        r"""Delete a payload from the result along with all associated Data
        """
        
        base_url = operations.DELETE_RECORDING_ADD_ON_RESULT_PAYLOAD_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRecordingAddOnResultPayloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_recording_transcription(self, request: operations.DeleteRecordingTranscriptionRequest) -> operations.DeleteRecordingTranscriptionResponse:
        base_url = operations.DELETE_RECORDING_TRANSCRIPTION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRecordingTranscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_signing_key(self, request: operations.DeleteSigningKeyRequest) -> operations.DeleteSigningKeyResponse:
        base_url = operations.DELETE_SIGNING_KEY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SigningKeys/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSigningKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_sip_auth_calls_credential_list_mapping(self, request: operations.DeleteSipAuthCallsCredentialListMappingRequest) -> operations.DeleteSipAuthCallsCredentialListMappingResponse:
        r"""Delete a credential list mapping from the requested domain
        """
        
        base_url = operations.DELETE_SIP_AUTH_CALLS_CREDENTIAL_LIST_MAPPING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSipAuthCallsCredentialListMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_sip_auth_calls_ip_access_control_list_mapping(self, request: operations.DeleteSipAuthCallsIPAccessControlListMappingRequest) -> operations.DeleteSipAuthCallsIPAccessControlListMappingResponse:
        r"""Delete an IP Access Control List mapping from the requested domain
        """
        
        base_url = operations.DELETE_SIP_AUTH_CALLS_IP_ACCESS_CONTROL_LIST_MAPPING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSipAuthCallsIPAccessControlListMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_sip_auth_registrations_credential_list_mapping(self, request: operations.DeleteSipAuthRegistrationsCredentialListMappingRequest) -> operations.DeleteSipAuthRegistrationsCredentialListMappingResponse:
        r"""Delete a credential list mapping from the requested domain
        """
        
        base_url = operations.DELETE_SIP_AUTH_REGISTRATIONS_CREDENTIAL_LIST_MAPPING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSipAuthRegistrationsCredentialListMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_sip_credential(self, request: operations.DeleteSipCredentialRequest) -> operations.DeleteSipCredentialResponse:
        r"""Delete a credential resource.
        """
        
        base_url = operations.DELETE_SIP_CREDENTIAL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSipCredentialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_sip_credential_list(self, request: operations.DeleteSipCredentialListRequest) -> operations.DeleteSipCredentialListResponse:
        r"""Delete a Credential List
        """
        
        base_url = operations.DELETE_SIP_CREDENTIAL_LIST_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSipCredentialListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_sip_credential_list_mapping(self, request: operations.DeleteSipCredentialListMappingRequest) -> operations.DeleteSipCredentialListMappingResponse:
        r"""Delete a CredentialListMapping resource from an account.
        """
        
        base_url = operations.DELETE_SIP_CREDENTIAL_LIST_MAPPING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSipCredentialListMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_sip_domain(self, request: operations.DeleteSipDomainRequest) -> operations.DeleteSipDomainResponse:
        r"""Delete an instance of a Domain
        """
        
        base_url = operations.DELETE_SIP_DOMAIN_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSipDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_sip_ip_access_control_list(self, request: operations.DeleteSipIPAccessControlListRequest) -> operations.DeleteSipIPAccessControlListResponse:
        r"""Delete an IpAccessControlList from the requested account
        """
        
        base_url = operations.DELETE_SIP_IP_ACCESS_CONTROL_LIST_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSipIPAccessControlListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_sip_ip_access_control_list_mapping(self, request: operations.DeleteSipIPAccessControlListMappingRequest) -> operations.DeleteSipIPAccessControlListMappingResponse:
        r"""Delete an IpAccessControlListMapping resource.
        """
        
        base_url = operations.DELETE_SIP_IP_ACCESS_CONTROL_LIST_MAPPING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSipIPAccessControlListMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_sip_ip_address(self, request: operations.DeleteSipIPAddressRequest) -> operations.DeleteSipIPAddressResponse:
        r"""Delete an IpAddress resource.
        """
        
        base_url = operations.DELETE_SIP_IP_ADDRESS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSipIPAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_transcription(self, request: operations.DeleteTranscriptionRequest) -> operations.DeleteTranscriptionResponse:
        r"""Delete a transcription from the account used to make the request
        """
        
        base_url = operations.DELETE_TRANSCRIPTION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Transcriptions/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTranscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_usage_trigger(self, request: operations.DeleteUsageTriggerRequest) -> operations.DeleteUsageTriggerResponse:
        base_url = operations.DELETE_USAGE_TRIGGER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUsageTriggerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_user_defined_message_subscription(self, request: operations.DeleteUserDefinedMessageSubscriptionRequest) -> operations.DeleteUserDefinedMessageSubscriptionResponse:
        r"""Delete a specific User Defined Message Subscription.
        """
        
        base_url = operations.DELETE_USER_DEFINED_MESSAGE_SUBSCRIPTION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessageSubscriptions/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserDefinedMessageSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def fetch_account(self, request: operations.FetchAccountRequest) -> operations.FetchAccountResponse:
        r"""Fetch the account specified by the provided Account Sid
        """
        
        base_url = operations.FETCH_ACCOUNT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010Account])
                res.api_v2010_account = out

        return res

    
    def fetch_address(self, request: operations.FetchAddressRequest) -> operations.FetchAddressResponse:
        base_url = operations.FETCH_ADDRESS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountAddress])
                res.api_v2010_account_address = out

        return res

    
    def fetch_application(self, request: operations.FetchApplicationRequest) -> operations.FetchApplicationResponse:
        r"""Fetch the application specified by the provided sid
        """
        
        base_url = operations.FETCH_APPLICATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchApplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountApplication])
                res.api_v2010_account_application = out

        return res

    
    def fetch_authorized_connect_app(self, request: operations.FetchAuthorizedConnectAppRequest) -> operations.FetchAuthorizedConnectAppResponse:
        r"""Fetch an instance of an authorized-connect-app
        """
        
        base_url = operations.FETCH_AUTHORIZED_CONNECT_APP_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/AuthorizedConnectApps/{ConnectAppSid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchAuthorizedConnectAppResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountAuthorizedConnectApp])
                res.api_v2010_account_authorized_connect_app = out

        return res

    
    def fetch_available_phone_number_country(self, request: operations.FetchAvailablePhoneNumberCountryRequest) -> operations.FetchAvailablePhoneNumberCountryResponse:
        base_url = operations.FETCH_AVAILABLE_PHONE_NUMBER_COUNTRY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchAvailablePhoneNumberCountryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountAvailablePhoneNumberCountry])
                res.api_v2010_account_available_phone_number_country = out

        return res

    
    def fetch_balance(self, request: operations.FetchBalanceRequest) -> operations.FetchBalanceResponse:
        r"""Fetch the balance for an Account based on Account Sid. Balance changes may not be reflected immediately. Child accounts do not contain balance information
        """
        
        base_url = operations.FETCH_BALANCE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Balance.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchBalanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountBalance])
                res.api_v2010_account_balance = out

        return res

    
    def fetch_call(self, request: operations.FetchCallRequest) -> operations.FetchCallResponse:
        r"""Fetch the call specified by the provided Call SID
        """
        
        base_url = operations.FETCH_CALL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Calls/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountCall])
                res.api_v2010_account_call = out

        return res

    
    def fetch_call_feedback(self, request: operations.FetchCallFeedbackRequest) -> operations.FetchCallFeedbackResponse:
        r"""Fetch a Feedback resource from a call
        """
        
        base_url = operations.FETCH_CALL_FEEDBACK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Feedback.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCallFeedbackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountCallCallFeedback])
                res.api_v2010_account_call_call_feedback = out

        return res

    
    def fetch_call_feedback_summary(self, request: operations.FetchCallFeedbackSummaryRequest) -> operations.FetchCallFeedbackSummaryResponse:
        r"""Fetch a FeedbackSummary resource from a call
        """
        
        base_url = operations.FETCH_CALL_FEEDBACK_SUMMARY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Calls/FeedbackSummary/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCallFeedbackSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountCallCallFeedbackSummary])
                res.api_v2010_account_call_call_feedback_summary = out

        return res

    
    def fetch_call_notification(self, request: operations.FetchCallNotificationRequest) -> operations.FetchCallNotificationResponse:
        base_url = operations.FETCH_CALL_NOTIFICATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Notifications/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCallNotificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountCallCallNotificationInstance])
                res.api_v2010_account_call_call_notification_instance = out

        return res

    
    def fetch_call_recording(self, request: operations.FetchCallRecordingRequest) -> operations.FetchCallRecordingResponse:
        r"""Fetch an instance of a recording for a call
        """
        
        base_url = operations.FETCH_CALL_RECORDING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCallRecordingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountCallCallRecording])
                res.api_v2010_account_call_call_recording = out

        return res

    
    def fetch_conference(self, request: operations.FetchConferenceRequest) -> operations.FetchConferenceResponse:
        r"""Fetch an instance of a conference
        """
        
        base_url = operations.FETCH_CONFERENCE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Conferences/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchConferenceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountConference])
                res.api_v2010_account_conference = out

        return res

    
    def fetch_conference_recording(self, request: operations.FetchConferenceRecordingRequest) -> operations.FetchConferenceRecordingResponse:
        r"""Fetch an instance of a recording for a call
        """
        
        base_url = operations.FETCH_CONFERENCE_RECORDING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchConferenceRecordingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountConferenceConferenceRecording])
                res.api_v2010_account_conference_conference_recording = out

        return res

    
    def fetch_connect_app(self, request: operations.FetchConnectAppRequest) -> operations.FetchConnectAppResponse:
        r"""Fetch an instance of a connect-app
        """
        
        base_url = operations.FETCH_CONNECT_APP_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchConnectAppResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountConnectApp])
                res.api_v2010_account_connect_app = out

        return res

    
    def fetch_incoming_phone_number(self, request: operations.FetchIncomingPhoneNumberRequest) -> operations.FetchIncomingPhoneNumberResponse:
        r"""Fetch an incoming-phone-number belonging to the account used to make the request.
        """
        
        base_url = operations.FETCH_INCOMING_PHONE_NUMBER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchIncomingPhoneNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountIncomingPhoneNumber])
                res.api_v2010_account_incoming_phone_number = out

        return res

    
    def fetch_incoming_phone_number_assigned_add_on(self, request: operations.FetchIncomingPhoneNumberAssignedAddOnRequest) -> operations.FetchIncomingPhoneNumberAssignedAddOnResponse:
        r"""Fetch an instance of an Add-on installation currently assigned to this Number.
        """
        
        base_url = operations.FETCH_INCOMING_PHONE_NUMBER_ASSIGNED_ADD_ON_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchIncomingPhoneNumberAssignedAddOnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn])
                res.api_v2010_account_incoming_phone_number_incoming_phone_number_assigned_add_on = out

        return res

    
    def fetch_incoming_phone_number_assigned_add_on_extension(self, request: operations.FetchIncomingPhoneNumberAssignedAddOnExtensionRequest) -> operations.FetchIncomingPhoneNumberAssignedAddOnExtensionResponse:
        r"""Fetch an instance of an Extension for the Assigned Add-on.
        """
        
        base_url = operations.FETCH_INCOMING_PHONE_NUMBER_ASSIGNED_ADD_ON_EXTENSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{AssignedAddOnSid}/Extensions/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchIncomingPhoneNumberAssignedAddOnExtensionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension])
                res.api_v2010_account_incoming_phone_number_incoming_phone_number_assigned_add_on_incoming_phone_number_assigned_add_on_extension = out

        return res

    
    def fetch_key(self, request: operations.FetchKeyRequest) -> operations.FetchKeyResponse:
        base_url = operations.FETCH_KEY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Keys/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountKey])
                res.api_v2010_account_key = out

        return res

    
    def fetch_media(self, request: operations.FetchMediaRequest) -> operations.FetchMediaResponse:
        r"""Fetch a single media instance belonging to the account used to make the request
        """
        
        base_url = operations.FETCH_MEDIA_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountMessageMedia])
                res.api_v2010_account_message_media = out

        return res

    
    def fetch_member(self, request: operations.FetchMemberRequest) -> operations.FetchMemberResponse:
        r"""Fetch a specific member from the queue
        """
        
        base_url = operations.FETCH_MEMBER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members/{CallSid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchMemberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountQueueMember])
                res.api_v2010_account_queue_member = out

        return res

    
    def fetch_message(self, request: operations.FetchMessageRequest) -> operations.FetchMessageResponse:
        r"""Fetch a message belonging to the account used to make the request
        """
        
        base_url = operations.FETCH_MESSAGE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountMessage])
                res.api_v2010_account_message = out

        return res

    
    def fetch_notification(self, request: operations.FetchNotificationRequest) -> operations.FetchNotificationResponse:
        r"""Fetch a notification belonging to the account used to make the request
        """
        
        base_url = operations.FETCH_NOTIFICATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Notifications/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchNotificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountNotificationInstance])
                res.api_v2010_account_notification_instance = out

        return res

    
    def fetch_outgoing_caller_id(self, request: operations.FetchOutgoingCallerIDRequest) -> operations.FetchOutgoingCallerIDResponse:
        r"""Fetch an outgoing-caller-id belonging to the account used to make the request
        """
        
        base_url = operations.FETCH_OUTGOING_CALLER_ID_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchOutgoingCallerIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountOutgoingCallerID])
                res.api_v2010_account_outgoing_caller_id = out

        return res

    
    def fetch_participant(self, request: operations.FetchParticipantRequest) -> operations.FetchParticipantResponse:
        r"""Fetch an instance of a participant
        """
        
        base_url = operations.FETCH_PARTICIPANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchParticipantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountConferenceParticipant])
                res.api_v2010_account_conference_participant = out

        return res

    
    def fetch_queue(self, request: operations.FetchQueueRequest) -> operations.FetchQueueResponse:
        r"""Fetch an instance of a queue identified by the QueueSid
        """
        
        base_url = operations.FETCH_QUEUE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Queues/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountQueue])
                res.api_v2010_account_queue = out

        return res

    
    def fetch_recording(self, request: operations.FetchRecordingRequest) -> operations.FetchRecordingResponse:
        r"""Fetch an instance of a recording
        """
        
        base_url = operations.FETCH_RECORDING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Recordings/{Sid}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRecordingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountRecording])
                res.api_v2010_account_recording = out

        return res

    
    def fetch_recording_add_on_result(self, request: operations.FetchRecordingAddOnResultRequest) -> operations.FetchRecordingAddOnResultResponse:
        r"""Fetch an instance of an AddOnResult
        """
        
        base_url = operations.FETCH_RECORDING_ADD_ON_RESULT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRecordingAddOnResultResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountRecordingRecordingAddOnResult])
                res.api_v2010_account_recording_recording_add_on_result = out

        return res

    
    def fetch_recording_add_on_result_payload(self, request: operations.FetchRecordingAddOnResultPayloadRequest) -> operations.FetchRecordingAddOnResultPayloadResponse:
        r"""Fetch an instance of a result payload
        """
        
        base_url = operations.FETCH_RECORDING_ADD_ON_RESULT_PAYLOAD_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRecordingAddOnResultPayloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload])
                res.api_v2010_account_recording_recording_add_on_result_recording_add_on_result_payload = out

        return res

    
    def fetch_recording_transcription(self, request: operations.FetchRecordingTranscriptionRequest) -> operations.FetchRecordingTranscriptionResponse:
        base_url = operations.FETCH_RECORDING_TRANSCRIPTION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRecordingTranscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountRecordingRecordingTranscription])
                res.api_v2010_account_recording_recording_transcription = out

        return res

    
    def fetch_short_code(self, request: operations.FetchShortCodeRequest) -> operations.FetchShortCodeResponse:
        r"""Fetch an instance of a short code
        """
        
        base_url = operations.FETCH_SHORT_CODE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchShortCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountShortCode])
                res.api_v2010_account_short_code = out

        return res

    
    def fetch_signing_key(self, request: operations.FetchSigningKeyRequest) -> operations.FetchSigningKeyResponse:
        base_url = operations.FETCH_SIGNING_KEY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SigningKeys/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSigningKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountSigningKey])
                res.api_v2010_account_signing_key = out

        return res

    
    def fetch_sip_auth_calls_credential_list_mapping(self, request: operations.FetchSipAuthCallsCredentialListMappingRequest) -> operations.FetchSipAuthCallsCredentialListMappingResponse:
        r"""Fetch a specific instance of a credential list mapping
        """
        
        base_url = operations.FETCH_SIP_AUTH_CALLS_CREDENTIAL_LIST_MAPPING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSipAuthCallsCredentialListMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping])
                res.api_v2010_account_sip_sip_domain_sip_auth_sip_auth_calls_sip_auth_calls_credential_list_mapping = out

        return res

    
    def fetch_sip_auth_calls_ip_access_control_list_mapping(self, request: operations.FetchSipAuthCallsIPAccessControlListMappingRequest) -> operations.FetchSipAuthCallsIPAccessControlListMappingResponse:
        r"""Fetch a specific instance of an IP Access Control List mapping
        """
        
        base_url = operations.FETCH_SIP_AUTH_CALLS_IP_ACCESS_CONTROL_LIST_MAPPING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSipAuthCallsIPAccessControlListMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIPAccessControlListMapping])
                res.api_v2010_account_sip_sip_domain_sip_auth_sip_auth_calls_sip_auth_calls_ip_access_control_list_mapping = out

        return res

    
    def fetch_sip_auth_registrations_credential_list_mapping(self, request: operations.FetchSipAuthRegistrationsCredentialListMappingRequest) -> operations.FetchSipAuthRegistrationsCredentialListMappingResponse:
        r"""Fetch a specific instance of a credential list mapping
        """
        
        base_url = operations.FETCH_SIP_AUTH_REGISTRATIONS_CREDENTIAL_LIST_MAPPING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSipAuthRegistrationsCredentialListMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping])
                res.api_v2010_account_sip_sip_domain_sip_auth_sip_auth_registrations_sip_auth_registrations_credential_list_mapping = out

        return res

    
    def fetch_sip_credential(self, request: operations.FetchSipCredentialRequest) -> operations.FetchSipCredentialResponse:
        r"""Fetch a single credential.
        """
        
        base_url = operations.FETCH_SIP_CREDENTIAL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSipCredentialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountSipSipCredentialListSipCredential])
                res.api_v2010_account_sip_sip_credential_list_sip_credential = out

        return res

    
    def fetch_sip_credential_list(self, request: operations.FetchSipCredentialListRequest) -> operations.FetchSipCredentialListResponse:
        r"""Get a Credential List
        """
        
        base_url = operations.FETCH_SIP_CREDENTIAL_LIST_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSipCredentialListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountSipSipCredentialList])
                res.api_v2010_account_sip_sip_credential_list = out

        return res

    
    def fetch_sip_credential_list_mapping(self, request: operations.FetchSipCredentialListMappingRequest) -> operations.FetchSipCredentialListMappingResponse:
        r"""Fetch a single CredentialListMapping resource from an account.
        """
        
        base_url = operations.FETCH_SIP_CREDENTIAL_LIST_MAPPING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSipCredentialListMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountSipSipDomainSipCredentialListMapping])
                res.api_v2010_account_sip_sip_domain_sip_credential_list_mapping = out

        return res

    
    def fetch_sip_domain(self, request: operations.FetchSipDomainRequest) -> operations.FetchSipDomainResponse:
        r"""Fetch an instance of a Domain
        """
        
        base_url = operations.FETCH_SIP_DOMAIN_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSipDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountSipSipDomain])
                res.api_v2010_account_sip_sip_domain = out

        return res

    
    def fetch_sip_ip_access_control_list(self, request: operations.FetchSipIPAccessControlListRequest) -> operations.FetchSipIPAccessControlListResponse:
        r"""Fetch a specific instance of an IpAccessControlList
        """
        
        base_url = operations.FETCH_SIP_IP_ACCESS_CONTROL_LIST_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSipIPAccessControlListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountSipSipIPAccessControlList])
                res.api_v2010_account_sip_sip_ip_access_control_list = out

        return res

    
    def fetch_sip_ip_access_control_list_mapping(self, request: operations.FetchSipIPAccessControlListMappingRequest) -> operations.FetchSipIPAccessControlListMappingResponse:
        r"""Fetch an IpAccessControlListMapping resource.
        """
        
        base_url = operations.FETCH_SIP_IP_ACCESS_CONTROL_LIST_MAPPING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSipIPAccessControlListMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountSipSipDomainSipIPAccessControlListMapping])
                res.api_v2010_account_sip_sip_domain_sip_ip_access_control_list_mapping = out

        return res

    
    def fetch_sip_ip_address(self, request: operations.FetchSipIPAddressRequest) -> operations.FetchSipIPAddressResponse:
        r"""Read one IpAddress resource.
        """
        
        base_url = operations.FETCH_SIP_IP_ADDRESS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSipIPAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountSipSipIPAccessControlListSipIPAddress])
                res.api_v2010_account_sip_sip_ip_access_control_list_sip_ip_address = out

        return res

    
    def fetch_transcription(self, request: operations.FetchTranscriptionRequest) -> operations.FetchTranscriptionResponse:
        r"""Fetch an instance of a Transcription
        """
        
        base_url = operations.FETCH_TRANSCRIPTION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Transcriptions/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTranscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountTranscription])
                res.api_v2010_account_transcription = out

        return res

    
    def fetch_usage_trigger(self, request: operations.FetchUsageTriggerRequest) -> operations.FetchUsageTriggerResponse:
        r"""Fetch and instance of a usage-trigger
        """
        
        base_url = operations.FETCH_USAGE_TRIGGER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchUsageTriggerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountUsageUsageTrigger])
                res.api_v2010_account_usage_usage_trigger = out

        return res

    
    def list_account(self, request: operations.ListAccountRequest) -> operations.ListAccountResponse:
        r"""Retrieves a collection of Accounts belonging to the account used to make the request
        """
        
        base_url = operations.LIST_ACCOUNT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/2010-04-01/Accounts.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAccountListAccountResponse])
                res.list_account_response = out

        return res

    
    def list_address(self, request: operations.ListAddressRequest) -> operations.ListAddressResponse:
        base_url = operations.LIST_ADDRESS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Addresses.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAddressListAddressResponse])
                res.list_address_response = out

        return res

    
    def list_application(self, request: operations.ListApplicationRequest) -> operations.ListApplicationResponse:
        r"""Retrieve a list of applications representing an application within the requesting account
        """
        
        base_url = operations.LIST_APPLICATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Applications.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListApplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListApplicationListApplicationResponse])
                res.list_application_response = out

        return res

    
    def list_authorized_connect_app(self, request: operations.ListAuthorizedConnectAppRequest) -> operations.ListAuthorizedConnectAppResponse:
        r"""Retrieve a list of authorized-connect-apps belonging to the account used to make the request
        """
        
        base_url = operations.LIST_AUTHORIZED_CONNECT_APP_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/AuthorizedConnectApps.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAuthorizedConnectAppResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAuthorizedConnectAppListAuthorizedConnectAppResponse])
                res.list_authorized_connect_app_response = out

        return res

    
    def list_available_phone_number_country(self, request: operations.ListAvailablePhoneNumberCountryRequest) -> operations.ListAvailablePhoneNumberCountryResponse:
        base_url = operations.LIST_AVAILABLE_PHONE_NUMBER_COUNTRY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAvailablePhoneNumberCountryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAvailablePhoneNumberCountryListAvailablePhoneNumberCountryResponse])
                res.list_available_phone_number_country_response = out

        return res

    
    def list_available_phone_number_local(self, request: operations.ListAvailablePhoneNumberLocalRequest) -> operations.ListAvailablePhoneNumberLocalResponse:
        base_url = operations.LIST_AVAILABLE_PHONE_NUMBER_LOCAL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/Local.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAvailablePhoneNumberLocalResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse])
                res.list_available_phone_number_local_response = out

        return res

    
    def list_available_phone_number_machine_to_machine(self, request: operations.ListAvailablePhoneNumberMachineToMachineRequest) -> operations.ListAvailablePhoneNumberMachineToMachineResponse:
        base_url = operations.LIST_AVAILABLE_PHONE_NUMBER_MACHINE_TO_MACHINE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/MachineToMachine.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAvailablePhoneNumberMachineToMachineResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAvailablePhoneNumberMachineToMachineListAvailablePhoneNumberMachineToMachineResponse])
                res.list_available_phone_number_machine_to_machine_response = out

        return res

    
    def list_available_phone_number_mobile(self, request: operations.ListAvailablePhoneNumberMobileRequest) -> operations.ListAvailablePhoneNumberMobileResponse:
        base_url = operations.LIST_AVAILABLE_PHONE_NUMBER_MOBILE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/Mobile.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAvailablePhoneNumberMobileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse])
                res.list_available_phone_number_mobile_response = out

        return res

    
    def list_available_phone_number_national(self, request: operations.ListAvailablePhoneNumberNationalRequest) -> operations.ListAvailablePhoneNumberNationalResponse:
        base_url = operations.LIST_AVAILABLE_PHONE_NUMBER_NATIONAL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/National.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAvailablePhoneNumberNationalResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse])
                res.list_available_phone_number_national_response = out

        return res

    
    def list_available_phone_number_shared_cost(self, request: operations.ListAvailablePhoneNumberSharedCostRequest) -> operations.ListAvailablePhoneNumberSharedCostResponse:
        base_url = operations.LIST_AVAILABLE_PHONE_NUMBER_SHARED_COST_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/SharedCost.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAvailablePhoneNumberSharedCostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAvailablePhoneNumberSharedCostListAvailablePhoneNumberSharedCostResponse])
                res.list_available_phone_number_shared_cost_response = out

        return res

    
    def list_available_phone_number_toll_free(self, request: operations.ListAvailablePhoneNumberTollFreeRequest) -> operations.ListAvailablePhoneNumberTollFreeResponse:
        base_url = operations.LIST_AVAILABLE_PHONE_NUMBER_TOLL_FREE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/TollFree.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAvailablePhoneNumberTollFreeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAvailablePhoneNumberTollFreeListAvailablePhoneNumberTollFreeResponse])
                res.list_available_phone_number_toll_free_response = out

        return res

    
    def list_available_phone_number_voip(self, request: operations.ListAvailablePhoneNumberVoipRequest) -> operations.ListAvailablePhoneNumberVoipResponse:
        base_url = operations.LIST_AVAILABLE_PHONE_NUMBER_VOIP_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/Voip.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAvailablePhoneNumberVoipResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAvailablePhoneNumberVoipListAvailablePhoneNumberVoipResponse])
                res.list_available_phone_number_voip_response = out

        return res

    
    def list_call(self, request: operations.ListCallRequest) -> operations.ListCallResponse:
        r"""Retrieves a collection of calls made to and from your account
        """
        
        base_url = operations.LIST_CALL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Calls.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCallListCallResponse])
                res.list_call_response = out

        return res

    
    def list_call_event(self, request: operations.ListCallEventRequest) -> operations.ListCallEventResponse:
        r"""Retrieve a list of all events for a call.
        """
        
        base_url = operations.LIST_CALL_EVENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Events.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCallEventResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCallEventListCallEventResponse])
                res.list_call_event_response = out

        return res

    
    def list_call_notification(self, request: operations.ListCallNotificationRequest) -> operations.ListCallNotificationResponse:
        base_url = operations.LIST_CALL_NOTIFICATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Notifications.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCallNotificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCallNotificationListCallNotificationResponse])
                res.list_call_notification_response = out

        return res

    
    def list_call_recording(self, request: operations.ListCallRecordingRequest) -> operations.ListCallRecordingResponse:
        r"""Retrieve a list of recordings belonging to the call used to make the request
        """
        
        base_url = operations.LIST_CALL_RECORDING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCallRecordingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCallRecordingListCallRecordingResponse])
                res.list_call_recording_response = out

        return res

    
    def list_conference(self, request: operations.ListConferenceRequest) -> operations.ListConferenceResponse:
        r"""Retrieve a list of conferences belonging to the account used to make the request
        """
        
        base_url = operations.LIST_CONFERENCE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Conferences.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListConferenceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListConferenceListConferenceResponse])
                res.list_conference_response = out

        return res

    
    def list_conference_recording(self, request: operations.ListConferenceRecordingRequest) -> operations.ListConferenceRecordingResponse:
        r"""Retrieve a list of recordings belonging to the call used to make the request
        """
        
        base_url = operations.LIST_CONFERENCE_RECORDING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListConferenceRecordingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListConferenceRecordingListConferenceRecordingResponse])
                res.list_conference_recording_response = out

        return res

    
    def list_connect_app(self, request: operations.ListConnectAppRequest) -> operations.ListConnectAppResponse:
        r"""Retrieve a list of connect-apps belonging to the account used to make the request
        """
        
        base_url = operations.LIST_CONNECT_APP_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/ConnectApps.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListConnectAppResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListConnectAppListConnectAppResponse])
                res.list_connect_app_response = out

        return res

    
    def list_dependent_phone_number(self, request: operations.ListDependentPhoneNumberRequest) -> operations.ListDependentPhoneNumberResponse:
        base_url = operations.LIST_DEPENDENT_PHONE_NUMBER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Addresses/{AddressSid}/DependentPhoneNumbers.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDependentPhoneNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListDependentPhoneNumberListDependentPhoneNumberResponse])
                res.list_dependent_phone_number_response = out

        return res

    
    def list_incoming_phone_number(self, request: operations.ListIncomingPhoneNumberRequest) -> operations.ListIncomingPhoneNumberResponse:
        r"""Retrieve a list of incoming-phone-numbers belonging to the account used to make the request.
        """
        
        base_url = operations.LIST_INCOMING_PHONE_NUMBER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListIncomingPhoneNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListIncomingPhoneNumberListIncomingPhoneNumberResponse])
                res.list_incoming_phone_number_response = out

        return res

    
    def list_incoming_phone_number_assigned_add_on(self, request: operations.ListIncomingPhoneNumberAssignedAddOnRequest) -> operations.ListIncomingPhoneNumberAssignedAddOnResponse:
        r"""Retrieve a list of Add-on installations currently assigned to this Number.
        """
        
        base_url = operations.LIST_INCOMING_PHONE_NUMBER_ASSIGNED_ADD_ON_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListIncomingPhoneNumberAssignedAddOnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse])
                res.list_incoming_phone_number_assigned_add_on_response = out

        return res

    
    def list_incoming_phone_number_assigned_add_on_extension(self, request: operations.ListIncomingPhoneNumberAssignedAddOnExtensionRequest) -> operations.ListIncomingPhoneNumberAssignedAddOnExtensionResponse:
        r"""Retrieve a list of Extensions for the Assigned Add-on.
        """
        
        base_url = operations.LIST_INCOMING_PHONE_NUMBER_ASSIGNED_ADD_ON_EXTENSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{AssignedAddOnSid}/Extensions.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListIncomingPhoneNumberAssignedAddOnExtensionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse])
                res.list_incoming_phone_number_assigned_add_on_extension_response = out

        return res

    
    def list_incoming_phone_number_local(self, request: operations.ListIncomingPhoneNumberLocalRequest) -> operations.ListIncomingPhoneNumberLocalResponse:
        base_url = operations.LIST_INCOMING_PHONE_NUMBER_LOCAL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Local.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListIncomingPhoneNumberLocalResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListIncomingPhoneNumberLocalListIncomingPhoneNumberLocalResponse])
                res.list_incoming_phone_number_local_response = out

        return res

    
    def list_incoming_phone_number_mobile(self, request: operations.ListIncomingPhoneNumberMobileRequest) -> operations.ListIncomingPhoneNumberMobileResponse:
        base_url = operations.LIST_INCOMING_PHONE_NUMBER_MOBILE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Mobile.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListIncomingPhoneNumberMobileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListIncomingPhoneNumberMobileListIncomingPhoneNumberMobileResponse])
                res.list_incoming_phone_number_mobile_response = out

        return res

    
    def list_incoming_phone_number_toll_free(self, request: operations.ListIncomingPhoneNumberTollFreeRequest) -> operations.ListIncomingPhoneNumberTollFreeResponse:
        base_url = operations.LIST_INCOMING_PHONE_NUMBER_TOLL_FREE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/TollFree.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListIncomingPhoneNumberTollFreeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse])
                res.list_incoming_phone_number_toll_free_response = out

        return res

    
    def list_key(self, request: operations.ListKeyRequest) -> operations.ListKeyResponse:
        base_url = operations.LIST_KEY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Keys.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListKeyListKeyResponse])
                res.list_key_response = out

        return res

    
    def list_media(self, request: operations.ListMediaRequest) -> operations.ListMediaResponse:
        r"""Retrieve a list of Media resources belonging to the account used to make the request
        """
        
        base_url = operations.LIST_MEDIA_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListMediaListMediaResponse])
                res.list_media_response = out

        return res

    
    def list_member(self, request: operations.ListMemberRequest) -> operations.ListMemberResponse:
        r"""Retrieve the members of the queue
        """
        
        base_url = operations.LIST_MEMBER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListMemberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListMemberListMemberResponse])
                res.list_member_response = out

        return res

    
    def list_message(self, request: operations.ListMessageRequest) -> operations.ListMessageResponse:
        r"""Retrieve a list of messages belonging to the account used to make the request
        """
        
        base_url = operations.LIST_MESSAGE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Messages.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListMessageListMessageResponse])
                res.list_message_response = out

        return res

    
    def list_notification(self, request: operations.ListNotificationRequest) -> operations.ListNotificationResponse:
        r"""Retrieve a list of notifications belonging to the account used to make the request
        """
        
        base_url = operations.LIST_NOTIFICATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Notifications.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListNotificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListNotificationListNotificationResponse])
                res.list_notification_response = out

        return res

    
    def list_outgoing_caller_id(self, request: operations.ListOutgoingCallerIDRequest) -> operations.ListOutgoingCallerIDResponse:
        r"""Retrieve a list of outgoing-caller-ids belonging to the account used to make the request
        """
        
        base_url = operations.LIST_OUTGOING_CALLER_ID_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListOutgoingCallerIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListOutgoingCallerIDListOutgoingCallerIDResponse])
                res.list_outgoing_caller_id_response = out

        return res

    
    def list_participant(self, request: operations.ListParticipantRequest) -> operations.ListParticipantResponse:
        r"""Retrieve a list of participants belonging to the account used to make the request
        """
        
        base_url = operations.LIST_PARTICIPANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListParticipantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListParticipantListParticipantResponse])
                res.list_participant_response = out

        return res

    
    def list_queue(self, request: operations.ListQueueRequest) -> operations.ListQueueResponse:
        r"""Retrieve a list of queues belonging to the account used to make the request
        """
        
        base_url = operations.LIST_QUEUE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Queues.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListQueueListQueueResponse])
                res.list_queue_response = out

        return res

    
    def list_recording(self, request: operations.ListRecordingRequest) -> operations.ListRecordingResponse:
        r"""Retrieve a list of recordings belonging to the account used to make the request
        """
        
        base_url = operations.LIST_RECORDING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Recordings.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListRecordingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListRecordingListRecordingResponse])
                res.list_recording_response = out

        return res

    
    def list_recording_add_on_result(self, request: operations.ListRecordingAddOnResultRequest) -> operations.ListRecordingAddOnResultResponse:
        r"""Retrieve a list of results belonging to the recording
        """
        
        base_url = operations.LIST_RECORDING_ADD_ON_RESULT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListRecordingAddOnResultResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListRecordingAddOnResultListRecordingAddOnResultResponse])
                res.list_recording_add_on_result_response = out

        return res

    
    def list_recording_add_on_result_payload(self, request: operations.ListRecordingAddOnResultPayloadRequest) -> operations.ListRecordingAddOnResultPayloadResponse:
        r"""Retrieve a list of payloads belonging to the AddOnResult
        """
        
        base_url = operations.LIST_RECORDING_ADD_ON_RESULT_PAYLOAD_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListRecordingAddOnResultPayloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse])
                res.list_recording_add_on_result_payload_response = out

        return res

    
    def list_recording_transcription(self, request: operations.ListRecordingTranscriptionRequest) -> operations.ListRecordingTranscriptionResponse:
        base_url = operations.LIST_RECORDING_TRANSCRIPTION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListRecordingTranscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListRecordingTranscriptionListRecordingTranscriptionResponse])
                res.list_recording_transcription_response = out

        return res

    
    def list_short_code(self, request: operations.ListShortCodeRequest) -> operations.ListShortCodeResponse:
        r"""Retrieve a list of short-codes belonging to the account used to make the request
        """
        
        base_url = operations.LIST_SHORT_CODE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListShortCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListShortCodeListShortCodeResponse])
                res.list_short_code_response = out

        return res

    
    def list_signing_key(self, request: operations.ListSigningKeyRequest) -> operations.ListSigningKeyResponse:
        base_url = operations.LIST_SIGNING_KEY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SigningKeys.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSigningKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSigningKeyListSigningKeyResponse])
                res.list_signing_key_response = out

        return res

    
    def list_sip_auth_calls_credential_list_mapping(self, request: operations.ListSipAuthCallsCredentialListMappingRequest) -> operations.ListSipAuthCallsCredentialListMappingResponse:
        r"""Retrieve a list of credential list mappings belonging to the domain used in the request
        """
        
        base_url = operations.LIST_SIP_AUTH_CALLS_CREDENTIAL_LIST_MAPPING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSipAuthCallsCredentialListMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse])
                res.list_sip_auth_calls_credential_list_mapping_response = out

        return res

    
    def list_sip_auth_calls_ip_access_control_list_mapping(self, request: operations.ListSipAuthCallsIPAccessControlListMappingRequest) -> operations.ListSipAuthCallsIPAccessControlListMappingResponse:
        r"""Retrieve a list of IP Access Control List mappings belonging to the domain used in the request
        """
        
        base_url = operations.LIST_SIP_AUTH_CALLS_IP_ACCESS_CONTROL_LIST_MAPPING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSipAuthCallsIPAccessControlListMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSipAuthCallsIPAccessControlListMappingListSipAuthCallsIPAccessControlListMappingResponse])
                res.list_sip_auth_calls_ip_access_control_list_mapping_response = out

        return res

    
    def list_sip_auth_registrations_credential_list_mapping(self, request: operations.ListSipAuthRegistrationsCredentialListMappingRequest) -> operations.ListSipAuthRegistrationsCredentialListMappingResponse:
        r"""Retrieve a list of credential list mappings belonging to the domain used in the request
        """
        
        base_url = operations.LIST_SIP_AUTH_REGISTRATIONS_CREDENTIAL_LIST_MAPPING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSipAuthRegistrationsCredentialListMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSipAuthRegistrationsCredentialListMappingListSipAuthRegistrationsCredentialListMappingResponse])
                res.list_sip_auth_registrations_credential_list_mapping_response = out

        return res

    
    def list_sip_credential(self, request: operations.ListSipCredentialRequest) -> operations.ListSipCredentialResponse:
        r"""Retrieve a list of credentials.
        """
        
        base_url = operations.LIST_SIP_CREDENTIAL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSipCredentialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSipCredentialListSipCredentialResponse])
                res.list_sip_credential_response = out

        return res

    
    def list_sip_credential_list(self, request: operations.ListSipCredentialListRequest) -> operations.ListSipCredentialListResponse:
        r"""Get All Credential Lists
        """
        
        base_url = operations.LIST_SIP_CREDENTIAL_LIST_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSipCredentialListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSipCredentialListListSipCredentialListResponse])
                res.list_sip_credential_list_response = out

        return res

    
    def list_sip_credential_list_mapping(self, request: operations.ListSipCredentialListMappingRequest) -> operations.ListSipCredentialListMappingResponse:
        r"""Read multiple CredentialListMapping resources from an account.
        """
        
        base_url = operations.LIST_SIP_CREDENTIAL_LIST_MAPPING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSipCredentialListMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSipCredentialListMappingListSipCredentialListMappingResponse])
                res.list_sip_credential_list_mapping_response = out

        return res

    
    def list_sip_domain(self, request: operations.ListSipDomainRequest) -> operations.ListSipDomainResponse:
        r"""Retrieve a list of domains belonging to the account used to make the request
        """
        
        base_url = operations.LIST_SIP_DOMAIN_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSipDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSipDomainListSipDomainResponse])
                res.list_sip_domain_response = out

        return res

    
    def list_sip_ip_access_control_list(self, request: operations.ListSipIPAccessControlListRequest) -> operations.ListSipIPAccessControlListResponse:
        r"""Retrieve a list of IpAccessControlLists that belong to the account used to make the request
        """
        
        base_url = operations.LIST_SIP_IP_ACCESS_CONTROL_LIST_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSipIPAccessControlListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSipIPAccessControlListListSipIPAccessControlListResponse])
                res.list_sip_ip_access_control_list_response = out

        return res

    
    def list_sip_ip_access_control_list_mapping(self, request: operations.ListSipIPAccessControlListMappingRequest) -> operations.ListSipIPAccessControlListMappingResponse:
        r"""Retrieve a list of IpAccessControlListMapping resources.
        """
        
        base_url = operations.LIST_SIP_IP_ACCESS_CONTROL_LIST_MAPPING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSipIPAccessControlListMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSipIPAccessControlListMappingListSipIPAccessControlListMappingResponse])
                res.list_sip_ip_access_control_list_mapping_response = out

        return res

    
    def list_sip_ip_address(self, request: operations.ListSipIPAddressRequest) -> operations.ListSipIPAddressResponse:
        r"""Read multiple IpAddress resources.
        """
        
        base_url = operations.LIST_SIP_IP_ADDRESS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSipIPAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSipIPAddressListSipIPAddressResponse])
                res.list_sip_ip_address_response = out

        return res

    
    def list_transcription(self, request: operations.ListTranscriptionRequest) -> operations.ListTranscriptionResponse:
        r"""Retrieve a list of transcriptions belonging to the account used to make the request
        """
        
        base_url = operations.LIST_TRANSCRIPTION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Transcriptions.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTranscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListTranscriptionListTranscriptionResponse])
                res.list_transcription_response = out

        return res

    
    def list_usage_record(self, request: operations.ListUsageRecordRequest) -> operations.ListUsageRecordResponse:
        r"""Retrieve a list of usage-records belonging to the account used to make the request
        """
        
        base_url = operations.LIST_USAGE_RECORD_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Usage/Records.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUsageRecordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListUsageRecordListUsageRecordResponse])
                res.list_usage_record_response = out

        return res

    
    def list_usage_record_all_time(self, request: operations.ListUsageRecordAllTimeRequest) -> operations.ListUsageRecordAllTimeResponse:
        base_url = operations.LIST_USAGE_RECORD_ALL_TIME_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/AllTime.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUsageRecordAllTimeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListUsageRecordAllTimeListUsageRecordAllTimeResponse])
                res.list_usage_record_all_time_response = out

        return res

    
    def list_usage_record_daily(self, request: operations.ListUsageRecordDailyRequest) -> operations.ListUsageRecordDailyResponse:
        base_url = operations.LIST_USAGE_RECORD_DAILY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/Daily.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUsageRecordDailyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListUsageRecordDailyListUsageRecordDailyResponse])
                res.list_usage_record_daily_response = out

        return res

    
    def list_usage_record_last_month(self, request: operations.ListUsageRecordLastMonthRequest) -> operations.ListUsageRecordLastMonthResponse:
        base_url = operations.LIST_USAGE_RECORD_LAST_MONTH_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/LastMonth.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUsageRecordLastMonthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListUsageRecordLastMonthListUsageRecordLastMonthResponse])
                res.list_usage_record_last_month_response = out

        return res

    
    def list_usage_record_monthly(self, request: operations.ListUsageRecordMonthlyRequest) -> operations.ListUsageRecordMonthlyResponse:
        base_url = operations.LIST_USAGE_RECORD_MONTHLY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/Monthly.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUsageRecordMonthlyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListUsageRecordMonthlyListUsageRecordMonthlyResponse])
                res.list_usage_record_monthly_response = out

        return res

    
    def list_usage_record_this_month(self, request: operations.ListUsageRecordThisMonthRequest) -> operations.ListUsageRecordThisMonthResponse:
        base_url = operations.LIST_USAGE_RECORD_THIS_MONTH_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/ThisMonth.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUsageRecordThisMonthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListUsageRecordThisMonthListUsageRecordThisMonthResponse])
                res.list_usage_record_this_month_response = out

        return res

    
    def list_usage_record_today(self, request: operations.ListUsageRecordTodayRequest) -> operations.ListUsageRecordTodayResponse:
        base_url = operations.LIST_USAGE_RECORD_TODAY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/Today.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUsageRecordTodayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListUsageRecordTodayListUsageRecordTodayResponse])
                res.list_usage_record_today_response = out

        return res

    
    def list_usage_record_yearly(self, request: operations.ListUsageRecordYearlyRequest) -> operations.ListUsageRecordYearlyResponse:
        base_url = operations.LIST_USAGE_RECORD_YEARLY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/Yearly.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUsageRecordYearlyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListUsageRecordYearlyListUsageRecordYearlyResponse])
                res.list_usage_record_yearly_response = out

        return res

    
    def list_usage_record_yesterday(self, request: operations.ListUsageRecordYesterdayRequest) -> operations.ListUsageRecordYesterdayResponse:
        base_url = operations.LIST_USAGE_RECORD_YESTERDAY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/Yesterday.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUsageRecordYesterdayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListUsageRecordYesterdayListUsageRecordYesterdayResponse])
                res.list_usage_record_yesterday_response = out

        return res

    
    def list_usage_trigger(self, request: operations.ListUsageTriggerRequest) -> operations.ListUsageTriggerResponse:
        r"""Retrieve a list of usage-triggers belonging to the account used to make the request
        """
        
        base_url = operations.LIST_USAGE_TRIGGER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Usage/Triggers.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUsageTriggerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListUsageTriggerListUsageTriggerResponse])
                res.list_usage_trigger_response = out

        return res

    
    def update_account(self, request: operations.UpdateAccountRequest) -> operations.UpdateAccountResponse:
        r"""Modify the properties of a given Account
        """
        
        base_url = operations.UPDATE_ACCOUNT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{Sid}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010Account])
                res.api_v2010_account = out

        return res

    
    def update_address(self, request: operations.UpdateAddressRequest) -> operations.UpdateAddressResponse:
        base_url = operations.UPDATE_ADDRESS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountAddress])
                res.api_v2010_account_address = out

        return res

    
    def update_application(self, request: operations.UpdateApplicationRequest) -> operations.UpdateApplicationResponse:
        r"""Updates the application's properties
        """
        
        base_url = operations.UPDATE_APPLICATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateApplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountApplication])
                res.api_v2010_account_application = out

        return res

    
    def update_call(self, request: operations.UpdateCallRequest) -> operations.UpdateCallResponse:
        r"""Initiates a call redirect or terminates a call
        """
        
        base_url = operations.UPDATE_CALL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Calls/{Sid}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateCallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountCall])
                res.api_v2010_account_call = out

        return res

    
    def update_call_feedback(self, request: operations.UpdateCallFeedbackRequest) -> operations.UpdateCallFeedbackResponse:
        r"""Update a Feedback resource for a call
        """
        
        base_url = operations.UPDATE_CALL_FEEDBACK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Feedback.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateCallFeedbackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountCallCallFeedback])
                res.api_v2010_account_call_call_feedback = out

        return res

    
    def update_call_recording(self, request: operations.UpdateCallRecordingRequest) -> operations.UpdateCallRecordingResponse:
        r"""Changes the status of the recording to paused, stopped, or in-progress. Note: Pass `Twilio.CURRENT` instead of recording sid to reference current active recording.
        """
        
        base_url = operations.UPDATE_CALL_RECORDING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateCallRecordingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountCallCallRecording])
                res.api_v2010_account_call_call_recording = out

        return res

    
    def update_conference(self, request: operations.UpdateConferenceRequest) -> operations.UpdateConferenceResponse:
        base_url = operations.UPDATE_CONFERENCE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Conferences/{Sid}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateConferenceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountConference])
                res.api_v2010_account_conference = out

        return res

    
    def update_conference_recording(self, request: operations.UpdateConferenceRecordingRequest) -> operations.UpdateConferenceRecordingResponse:
        r"""Changes the status of the recording to paused, stopped, or in-progress. Note: To use `Twilio.CURRENT`, pass it as recording sid.
        """
        
        base_url = operations.UPDATE_CONFERENCE_RECORDING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateConferenceRecordingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountConferenceConferenceRecording])
                res.api_v2010_account_conference_conference_recording = out

        return res

    
    def update_connect_app(self, request: operations.UpdateConnectAppRequest) -> operations.UpdateConnectAppResponse:
        r"""Update a connect-app with the specified parameters
        """
        
        base_url = operations.UPDATE_CONNECT_APP_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateConnectAppResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountConnectApp])
                res.api_v2010_account_connect_app = out

        return res

    
    def update_incoming_phone_number(self, request: operations.UpdateIncomingPhoneNumberRequest) -> operations.UpdateIncomingPhoneNumberResponse:
        r"""Update an incoming-phone-number instance.
        """
        
        base_url = operations.UPDATE_INCOMING_PHONE_NUMBER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateIncomingPhoneNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountIncomingPhoneNumber])
                res.api_v2010_account_incoming_phone_number = out

        return res

    
    def update_key(self, request: operations.UpdateKeyRequest) -> operations.UpdateKeyResponse:
        base_url = operations.UPDATE_KEY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Keys/{Sid}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountKey])
                res.api_v2010_account_key = out

        return res

    
    def update_member(self, request: operations.UpdateMemberRequest) -> operations.UpdateMemberResponse:
        r"""Dequeue a member from a queue and have the member's call begin executing the TwiML document at that URL
        """
        
        base_url = operations.UPDATE_MEMBER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members/{CallSid}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateMemberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountQueueMember])
                res.api_v2010_account_queue_member = out

        return res

    
    def update_message(self, request: operations.UpdateMessageRequest) -> operations.UpdateMessageResponse:
        r"""To redact a message-body from a post-flight message record, post to the message instance resource with an empty body
        """
        
        base_url = operations.UPDATE_MESSAGE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountMessage])
                res.api_v2010_account_message = out

        return res

    
    def update_outgoing_caller_id(self, request: operations.UpdateOutgoingCallerIDRequest) -> operations.UpdateOutgoingCallerIDResponse:
        r"""Updates the caller-id
        """
        
        base_url = operations.UPDATE_OUTGOING_CALLER_ID_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOutgoingCallerIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountOutgoingCallerID])
                res.api_v2010_account_outgoing_caller_id = out

        return res

    
    def update_participant(self, request: operations.UpdateParticipantRequest) -> operations.UpdateParticipantResponse:
        r"""Update the properties of the participant
        """
        
        base_url = operations.UPDATE_PARTICIPANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateParticipantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountConferenceParticipant])
                res.api_v2010_account_conference_participant = out

        return res

    
    def update_payments(self, request: operations.UpdatePaymentsRequest) -> operations.UpdatePaymentsResponse:
        r"""update an instance of payments with different phases of payment flows.
        """
        
        base_url = operations.UPDATE_PAYMENTS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Payments/{Sid}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePaymentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountCallPayments])
                res.api_v2010_account_call_payments = out

        return res

    
    def update_queue(self, request: operations.UpdateQueueRequest) -> operations.UpdateQueueResponse:
        r"""Update the queue with the new parameters
        """
        
        base_url = operations.UPDATE_QUEUE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Queues/{Sid}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountQueue])
                res.api_v2010_account_queue = out

        return res

    
    def update_short_code(self, request: operations.UpdateShortCodeRequest) -> operations.UpdateShortCodeResponse:
        r"""Update a short code with the following parameters
        """
        
        base_url = operations.UPDATE_SHORT_CODE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes/{Sid}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateShortCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountShortCode])
                res.api_v2010_account_short_code = out

        return res

    
    def update_signing_key(self, request: operations.UpdateSigningKeyRequest) -> operations.UpdateSigningKeyResponse:
        base_url = operations.UPDATE_SIGNING_KEY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SigningKeys/{Sid}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSigningKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountSigningKey])
                res.api_v2010_account_signing_key = out

        return res

    
    def update_sip_credential(self, request: operations.UpdateSipCredentialRequest) -> operations.UpdateSipCredentialResponse:
        r"""Update a credential resource.
        """
        
        base_url = operations.UPDATE_SIP_CREDENTIAL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSipCredentialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountSipSipCredentialListSipCredential])
                res.api_v2010_account_sip_sip_credential_list_sip_credential = out

        return res

    
    def update_sip_credential_list(self, request: operations.UpdateSipCredentialListRequest) -> operations.UpdateSipCredentialListResponse:
        r"""Update a Credential List
        """
        
        base_url = operations.UPDATE_SIP_CREDENTIAL_LIST_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSipCredentialListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountSipSipCredentialList])
                res.api_v2010_account_sip_sip_credential_list = out

        return res

    
    def update_sip_domain(self, request: operations.UpdateSipDomainRequest) -> operations.UpdateSipDomainResponse:
        r"""Update the attributes of a domain
        """
        
        base_url = operations.UPDATE_SIP_DOMAIN_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSipDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountSipSipDomain])
                res.api_v2010_account_sip_sip_domain = out

        return res

    
    def update_sip_ip_access_control_list(self, request: operations.UpdateSipIPAccessControlListRequest) -> operations.UpdateSipIPAccessControlListResponse:
        r"""Rename an IpAccessControlList
        """
        
        base_url = operations.UPDATE_SIP_IP_ACCESS_CONTROL_LIST_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSipIPAccessControlListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountSipSipIPAccessControlList])
                res.api_v2010_account_sip_sip_ip_access_control_list = out

        return res

    
    def update_sip_ip_address(self, request: operations.UpdateSipIPAddressRequest) -> operations.UpdateSipIPAddressResponse:
        r"""Update an IpAddress resource.
        """
        
        base_url = operations.UPDATE_SIP_IP_ADDRESS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSipIPAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountSipSipIPAccessControlListSipIPAddress])
                res.api_v2010_account_sip_sip_ip_access_control_list_sip_ip_address = out

        return res

    
    def update_siprec(self, request: operations.UpdateSiprecRequest) -> operations.UpdateSiprecResponse:
        r"""Stop a Siprec using either the SID of the Siprec resource or the `name` used when creating the resource
        """
        
        base_url = operations.UPDATE_SIPREC_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Siprec/{Sid}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSiprecResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountCallSiprec])
                res.api_v2010_account_call_siprec = out

        return res

    
    def update_stream(self, request: operations.UpdateStreamRequest) -> operations.UpdateStreamResponse:
        r"""Stop a Stream using either the SID of the Stream resource or the `name` used when creating the resource
        """
        
        base_url = operations.UPDATE_STREAM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Streams/{Sid}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateStreamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountCallStream])
                res.api_v2010_account_call_stream = out

        return res

    
    def update_usage_trigger(self, request: operations.UpdateUsageTriggerRequest) -> operations.UpdateUsageTriggerResponse:
        r"""Update an instance of a usage trigger
        """
        
        base_url = operations.UPDATE_USAGE_TRIGGER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUsageTriggerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIV2010AccountUsageUsageTrigger])
                res.api_v2010_account_usage_usage_trigger = out

        return res

    
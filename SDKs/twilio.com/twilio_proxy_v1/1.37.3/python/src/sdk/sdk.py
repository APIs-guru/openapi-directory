

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://proxy.twilio.com",
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
        
    
    
    
    def create_message_interaction(self, request: operations.CreateMessageInteractionRequest) -> operations.CreateMessageInteractionResponse:
        r"""Create a new message Interaction to send directly from your system to one [Participant](https://www.twilio.com/docs/proxy/api/participant).  The `inbound` properties for the Interaction will always be empty.
        """
        
        base_url = operations.CREATE_MESSAGE_INTERACTION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{ParticipantSid}/MessageInteractions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateMessageInteractionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyV1ServiceSessionParticipantMessageInteraction])
                res.proxy_v1_service_session_participant_message_interaction = out

        return res

    
    def create_participant(self, request: operations.CreateParticipantRequest) -> operations.CreateParticipantResponse:
        r"""Add a new Participant to the Session
        """
        
        base_url = operations.CREATE_PARTICIPANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants", request.path_params)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyV1ServiceSessionParticipant])
                res.proxy_v1_service_session_participant = out

        return res

    
    def create_phone_number(self, request: operations.CreatePhoneNumberRequest) -> operations.CreatePhoneNumberResponse:
        r"""Add a Phone Number to a Service's Proxy Number Pool.
        """
        
        base_url = operations.CREATE_PHONE_NUMBER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/PhoneNumbers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePhoneNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyV1ServicePhoneNumber])
                res.proxy_v1_service_phone_number = out

        return res

    
    def create_service(self, request: operations.CreateServiceRequest) -> operations.CreateServiceResponse:
        r"""Create a new Service for Twilio Proxy
        """
        
        base_url = operations.CREATE_SERVICE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Services"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyV1Service])
                res.proxy_v1_service = out

        return res

    
    def create_session(self, request: operations.CreateSessionRequest) -> operations.CreateSessionResponse:
        r"""Create a new Session
        """
        
        base_url = operations.CREATE_SESSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Sessions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSessionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyV1ServiceSession])
                res.proxy_v1_service_session = out

        return res

    
    def create_short_code(self, request: operations.CreateShortCodeRequest) -> operations.CreateShortCodeResponse:
        r"""Add a Short Code to the Proxy Number Pool for the Service.
        """
        
        base_url = operations.CREATE_SHORT_CODE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/ShortCodes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateShortCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyV1ServiceShortCode])
                res.proxy_v1_service_short_code = out

        return res

    
    def delete_interaction(self, request: operations.DeleteInteractionRequest) -> operations.DeleteInteractionResponse:
        r"""Delete a specific Interaction.
        """
        
        base_url = operations.DELETE_INTERACTION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Interactions/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteInteractionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_participant(self, request: operations.DeleteParticipantRequest) -> operations.DeleteParticipantResponse:
        r"""Delete a specific Participant. This is a soft-delete. The participant remains associated with the session and cannot be re-added. Participants are only permanently deleted when the [Session](https://www.twilio.com/docs/proxy/api/session) is deleted.
        """
        
        base_url = operations.DELETE_PARTICIPANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteParticipantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_phone_number(self, request: operations.DeletePhoneNumberRequest) -> operations.DeletePhoneNumberResponse:
        r"""Delete a specific Phone Number from a Service.
        """
        
        base_url = operations.DELETE_PHONE_NUMBER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/PhoneNumbers/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePhoneNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_service(self, request: operations.DeleteServiceRequest) -> operations.DeleteServiceResponse:
        r"""Delete a specific Service.
        """
        
        base_url = operations.DELETE_SERVICE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_session(self, request: operations.DeleteSessionRequest) -> operations.DeleteSessionResponse:
        r"""Delete a specific Session.
        """
        
        base_url = operations.DELETE_SESSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Sessions/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSessionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_short_code(self, request: operations.DeleteShortCodeRequest) -> operations.DeleteShortCodeResponse:
        r"""Delete a specific Short Code from a Service.
        """
        
        base_url = operations.DELETE_SHORT_CODE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/ShortCodes/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteShortCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def fetch_interaction(self, request: operations.FetchInteractionRequest) -> operations.FetchInteractionResponse:
        r"""Retrieve a list of Interactions for a given [Session](https://www.twilio.com/docs/proxy/api/session).
        """
        
        base_url = operations.FETCH_INTERACTION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Interactions/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchInteractionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyV1ServiceSessionInteraction])
                res.proxy_v1_service_session_interaction = out

        return res

    
    def fetch_message_interaction(self, request: operations.FetchMessageInteractionRequest) -> operations.FetchMessageInteractionResponse:
        base_url = operations.FETCH_MESSAGE_INTERACTION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{ParticipantSid}/MessageInteractions/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchMessageInteractionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyV1ServiceSessionParticipantMessageInteraction])
                res.proxy_v1_service_session_participant_message_interaction = out

        return res

    
    def fetch_participant(self, request: operations.FetchParticipantRequest) -> operations.FetchParticipantResponse:
        r"""Fetch a specific Participant.
        """
        
        base_url = operations.FETCH_PARTICIPANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchParticipantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyV1ServiceSessionParticipant])
                res.proxy_v1_service_session_participant = out

        return res

    
    def fetch_phone_number(self, request: operations.FetchPhoneNumberRequest) -> operations.FetchPhoneNumberResponse:
        r"""Fetch a specific Phone Number.
        """
        
        base_url = operations.FETCH_PHONE_NUMBER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/PhoneNumbers/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchPhoneNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyV1ServicePhoneNumber])
                res.proxy_v1_service_phone_number = out

        return res

    
    def fetch_service(self, request: operations.FetchServiceRequest) -> operations.FetchServiceResponse:
        r"""Fetch a specific Service.
        """
        
        base_url = operations.FETCH_SERVICE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyV1Service])
                res.proxy_v1_service = out

        return res

    
    def fetch_session(self, request: operations.FetchSessionRequest) -> operations.FetchSessionResponse:
        r"""Fetch a specific Session.
        """
        
        base_url = operations.FETCH_SESSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Sessions/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSessionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyV1ServiceSession])
                res.proxy_v1_service_session = out

        return res

    
    def fetch_short_code(self, request: operations.FetchShortCodeRequest) -> operations.FetchShortCodeResponse:
        r"""Fetch a specific Short Code.
        """
        
        base_url = operations.FETCH_SHORT_CODE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/ShortCodes/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchShortCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyV1ServiceShortCode])
                res.proxy_v1_service_short_code = out

        return res

    
    def list_interaction(self, request: operations.ListInteractionRequest) -> operations.ListInteractionResponse:
        r"""Retrieve a list of all Interactions for a Session. A maximum of 100 records will be returned per page.
        """
        
        base_url = operations.LIST_INTERACTION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Interactions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListInteractionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListInteractionListInteractionResponse])
                res.list_interaction_response = out

        return res

    
    def list_message_interaction(self, request: operations.ListMessageInteractionRequest) -> operations.ListMessageInteractionResponse:
        base_url = operations.LIST_MESSAGE_INTERACTION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{ParticipantSid}/MessageInteractions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListMessageInteractionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListMessageInteractionListMessageInteractionResponse])
                res.list_message_interaction_response = out

        return res

    
    def list_participant(self, request: operations.ListParticipantRequest) -> operations.ListParticipantResponse:
        r"""Retrieve a list of all Participants in a Session.
        """
        
        base_url = operations.LIST_PARTICIPANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants", request.path_params)
        
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

    
    def list_phone_number(self, request: operations.ListPhoneNumberRequest) -> operations.ListPhoneNumberResponse:
        r"""Retrieve a list of all Phone Numbers in the Proxy Number Pool for a Service. A maximum of 100 records will be returned per page.
        """
        
        base_url = operations.LIST_PHONE_NUMBER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/PhoneNumbers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPhoneNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPhoneNumberListPhoneNumberResponse])
                res.list_phone_number_response = out

        return res

    
    def list_service(self, request: operations.ListServiceRequest) -> operations.ListServiceResponse:
        r"""Retrieve a list of all Services for Twilio Proxy. A maximum of 100 records will be returned per page.
        """
        
        base_url = operations.LIST_SERVICE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Services"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListServiceListServiceResponse])
                res.list_service_response = out

        return res

    
    def list_session(self, request: operations.ListSessionRequest) -> operations.ListSessionResponse:
        r"""Retrieve a list of all Sessions for the Service. A maximum of 100 records will be returned per page.
        """
        
        base_url = operations.LIST_SESSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Sessions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSessionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionListSessionResponse])
                res.list_session_response = out

        return res

    
    def list_short_code(self, request: operations.ListShortCodeRequest) -> operations.ListShortCodeResponse:
        r"""Retrieve a list of all Short Codes in the Proxy Number Pool for the Service. A maximum of 100 records will be returned per page.
        """
        
        base_url = operations.LIST_SHORT_CODE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/ShortCodes", request.path_params)
        
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

    
    def update_phone_number(self, request: operations.UpdatePhoneNumberRequest) -> operations.UpdatePhoneNumberResponse:
        r"""Update a specific Proxy Number.
        """
        
        base_url = operations.UPDATE_PHONE_NUMBER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/PhoneNumbers/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePhoneNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyV1ServicePhoneNumber])
                res.proxy_v1_service_phone_number = out

        return res

    
    def update_service(self, request: operations.UpdateServiceRequest) -> operations.UpdateServiceResponse:
        r"""Update a specific Service.
        """
        
        base_url = operations.UPDATE_SERVICE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyV1Service])
                res.proxy_v1_service = out

        return res

    
    def update_session(self, request: operations.UpdateSessionRequest) -> operations.UpdateSessionResponse:
        r"""Update a specific Session.
        """
        
        base_url = operations.UPDATE_SESSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Sessions/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSessionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyV1ServiceSession])
                res.proxy_v1_service_session = out

        return res

    
    def update_short_code(self, request: operations.UpdateShortCodeRequest) -> operations.UpdateShortCodeResponse:
        r"""Update a specific Short Code.
        """
        
        base_url = operations.UPDATE_SHORT_CODE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/ShortCodes/{Sid}", request.path_params)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyV1ServiceShortCode])
                res.proxy_v1_service_short_code = out

        return res

    
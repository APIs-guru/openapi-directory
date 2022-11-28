

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://conversations.twilio.com",
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
        
    
    
    
    def create_configuration_address(self, request: operations.CreateConfigurationAddressRequest) -> operations.CreateConfigurationAddressResponse:
        r"""Create a new address configuration
        """
        
        base_url = operations.CREATE_CONFIGURATION_ADDRESS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Configuration/Addresses"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateConfigurationAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConfigurationAddress])
                res.conversations_v1_configuration_address = out

        return res

    
    def create_conversation(self, request: operations.CreateConversationRequest) -> operations.CreateConversationResponse:
        r"""Create a new conversation in your account's default service
        """
        
        base_url = operations.CREATE_CONVERSATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Conversations"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1Conversation])
                res.conversations_v1_conversation = out

        return res

    
    def create_conversation_message(self, request: operations.CreateConversationMessageRequest) -> operations.CreateConversationMessageResponse:
        r"""Add a new message to the conversation
        """
        
        base_url = operations.CREATE_CONVERSATION_MESSAGE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Messages", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateConversationMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConversationConversationMessage])
                res.conversations_v1_conversation_conversation_message = out

        return res

    
    def create_conversation_participant(self, request: operations.CreateConversationParticipantRequest) -> operations.CreateConversationParticipantResponse:
        r"""Add a new participant to the conversation
        """
        
        base_url = operations.CREATE_CONVERSATION_PARTICIPANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Participants", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateConversationParticipantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConversationConversationParticipant])
                res.conversations_v1_conversation_conversation_participant = out

        return res

    
    def create_conversation_scoped_webhook(self, request: operations.CreateConversationScopedWebhookRequest) -> operations.CreateConversationScopedWebhookResponse:
        r"""Create a new webhook scoped to the conversation
        """
        
        base_url = operations.CREATE_CONVERSATION_SCOPED_WEBHOOK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Webhooks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateConversationScopedWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConversationConversationScopedWebhook])
                res.conversations_v1_conversation_conversation_scoped_webhook = out

        return res

    
    def create_credential(self, request: operations.CreateCredentialRequest) -> operations.CreateCredentialResponse:
        r"""Add a new push notification credential to your account
        """
        
        base_url = operations.CREATE_CREDENTIAL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Credentials"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCredentialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1Credential])
                res.conversations_v1_credential = out

        return res

    
    def create_role(self, request: operations.CreateRoleRequest) -> operations.CreateRoleResponse:
        r"""Create a new user role in your account's default service
        """
        
        base_url = operations.CREATE_ROLE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Roles"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateRoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1Role])
                res.conversations_v1_role = out

        return res

    
    def create_service(self, request: operations.CreateServiceRequest) -> operations.CreateServiceResponse:
        r"""Create a new conversation service on your account
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
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1Service])
                res.conversations_v1_service = out

        return res

    
    def create_service_conversation(self, request: operations.CreateServiceConversationRequest) -> operations.CreateServiceConversationResponse:
        r"""Create a new conversation in your service
        """
        
        base_url = operations.CREATE_SERVICE_CONVERSATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateServiceConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConversation])
                res.conversations_v1_service_service_conversation = out

        return res

    
    def create_service_conversation_message(self, request: operations.CreateServiceConversationMessageRequest) -> operations.CreateServiceConversationMessageResponse:
        r"""Add a new message to the conversation in a specific service
        """
        
        base_url = operations.CREATE_SERVICE_CONVERSATION_MESSAGE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateServiceConversationMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationMessage])
                res.conversations_v1_service_service_conversation_service_conversation_message = out

        return res

    
    def create_service_conversation_participant(self, request: operations.CreateServiceConversationParticipantRequest) -> operations.CreateServiceConversationParticipantResponse:
        r"""Add a new participant to the conversation in a specific service
        """
        
        base_url = operations.CREATE_SERVICE_CONVERSATION_PARTICIPANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateServiceConversationParticipantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant])
                res.conversations_v1_service_service_conversation_service_conversation_participant = out

        return res

    
    def create_service_conversation_scoped_webhook(self, request: operations.CreateServiceConversationScopedWebhookRequest) -> operations.CreateServiceConversationScopedWebhookResponse:
        r"""Create a new webhook scoped to the conversation in a specific service
        """
        
        base_url = operations.CREATE_SERVICE_CONVERSATION_SCOPED_WEBHOOK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateServiceConversationScopedWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook])
                res.conversations_v1_service_service_conversation_service_conversation_scoped_webhook = out

        return res

    
    def create_service_role(self, request: operations.CreateServiceRoleRequest) -> operations.CreateServiceRoleResponse:
        r"""Create a new user role in your service
        """
        
        base_url = operations.CREATE_SERVICE_ROLE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Roles", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateServiceRoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceRole])
                res.conversations_v1_service_service_role = out

        return res

    
    def create_service_user(self, request: operations.CreateServiceUserRequest) -> operations.CreateServiceUserResponse:
        r"""Add a new conversation user to your service
        """
        
        base_url = operations.CREATE_SERVICE_USER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Users", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateServiceUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceUser])
                res.conversations_v1_service_service_user = out

        return res

    
    def create_user(self, request: operations.CreateUserRequest) -> operations.CreateUserResponse:
        r"""Add a new conversation user to your account's default service
        """
        
        base_url = operations.CREATE_USER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Users"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1User])
                res.conversations_v1_user = out

        return res

    
    def delete_configuration_address(self, request: operations.DeleteConfigurationAddressRequest) -> operations.DeleteConfigurationAddressResponse:
        r"""Remove an existing address configuration
        """
        
        base_url = operations.DELETE_CONFIGURATION_ADDRESS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Configuration/Addresses/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConfigurationAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_conversation(self, request: operations.DeleteConversationRequest) -> operations.DeleteConversationResponse:
        r"""Remove a conversation from your account's default service
        """
        
        base_url = operations.DELETE_CONVERSATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Conversations/{Sid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_conversation_message(self, request: operations.DeleteConversationMessageRequest) -> operations.DeleteConversationMessageResponse:
        r"""Remove a message from the conversation
        """
        
        base_url = operations.DELETE_CONVERSATION_MESSAGE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Messages/{Sid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConversationMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_conversation_participant(self, request: operations.DeleteConversationParticipantRequest) -> operations.DeleteConversationParticipantResponse:
        r"""Remove a participant from the conversation
        """
        
        base_url = operations.DELETE_CONVERSATION_PARTICIPANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Participants/{Sid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConversationParticipantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_conversation_scoped_webhook(self, request: operations.DeleteConversationScopedWebhookRequest) -> operations.DeleteConversationScopedWebhookResponse:
        r"""Remove an existing webhook scoped to the conversation
        """
        
        base_url = operations.DELETE_CONVERSATION_SCOPED_WEBHOOK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Webhooks/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConversationScopedWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_credential(self, request: operations.DeleteCredentialRequest) -> operations.DeleteCredentialResponse:
        r"""Remove a push notification credential from your account
        """
        
        base_url = operations.DELETE_CREDENTIAL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Credentials/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCredentialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_role(self, request: operations.DeleteRoleRequest) -> operations.DeleteRoleResponse:
        r"""Remove a user role from your account's default service
        """
        
        base_url = operations.DELETE_ROLE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Roles/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_service(self, request: operations.DeleteServiceRequest) -> operations.DeleteServiceResponse:
        r"""Remove a conversation service with all its nested resources from your account
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

    
    def delete_service_binding(self, request: operations.DeleteServiceBindingRequest) -> operations.DeleteServiceBindingResponse:
        r"""Remove a push notification binding from the conversation service
        """
        
        base_url = operations.DELETE_SERVICE_BINDING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Bindings/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServiceBindingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_service_conversation(self, request: operations.DeleteServiceConversationRequest) -> operations.DeleteServiceConversationResponse:
        r"""Remove a conversation from your service
        """
        
        base_url = operations.DELETE_SERVICE_CONVERSATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{Sid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServiceConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_service_conversation_message(self, request: operations.DeleteServiceConversationMessageRequest) -> operations.DeleteServiceConversationMessageResponse:
        r"""Remove a message from the conversation
        """
        
        base_url = operations.DELETE_SERVICE_CONVERSATION_MESSAGE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServiceConversationMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_service_conversation_participant(self, request: operations.DeleteServiceConversationParticipantRequest) -> operations.DeleteServiceConversationParticipantResponse:
        r"""Remove a participant from the conversation
        """
        
        base_url = operations.DELETE_SERVICE_CONVERSATION_PARTICIPANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServiceConversationParticipantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_service_conversation_scoped_webhook(self, request: operations.DeleteServiceConversationScopedWebhookRequest) -> operations.DeleteServiceConversationScopedWebhookResponse:
        r"""Remove an existing webhook scoped to the conversation
        """
        
        base_url = operations.DELETE_SERVICE_CONVERSATION_SCOPED_WEBHOOK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServiceConversationScopedWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_service_role(self, request: operations.DeleteServiceRoleRequest) -> operations.DeleteServiceRoleResponse:
        r"""Remove a user role from your service
        """
        
        base_url = operations.DELETE_SERVICE_ROLE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Roles/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServiceRoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_service_user(self, request: operations.DeleteServiceUserRequest) -> operations.DeleteServiceUserResponse:
        r"""Remove a conversation user from your service
        """
        
        base_url = operations.DELETE_SERVICE_USER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Users/{Sid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServiceUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_service_user_conversation(self, request: operations.DeleteServiceUserConversationRequest) -> operations.DeleteServiceUserConversationResponse:
        r"""Delete a specific User Conversation.
        """
        
        base_url = operations.DELETE_SERVICE_USER_CONVERSATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServiceUserConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_user(self, request: operations.DeleteUserRequest) -> operations.DeleteUserResponse:
        r"""Remove a conversation user from your account's default service
        """
        
        base_url = operations.DELETE_USER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Users/{Sid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_user_conversation(self, request: operations.DeleteUserConversationRequest) -> operations.DeleteUserConversationResponse:
        r"""Delete a specific User Conversation.
        """
        
        base_url = operations.DELETE_USER_CONVERSATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Users/{UserSid}/Conversations/{ConversationSid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def fetch_configuration(self, request: operations.FetchConfigurationRequest) -> operations.FetchConfigurationResponse:
        r"""Fetch the global configuration of conversations on your account
        """
        
        base_url = operations.FETCH_CONFIGURATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Configuration"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1Configuration])
                res.conversations_v1_configuration = out

        return res

    
    def fetch_configuration_address(self, request: operations.FetchConfigurationAddressRequest) -> operations.FetchConfigurationAddressResponse:
        r"""Fetch an address configuration 
        """
        
        base_url = operations.FETCH_CONFIGURATION_ADDRESS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Configuration/Addresses/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchConfigurationAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConfigurationAddress])
                res.conversations_v1_configuration_address = out

        return res

    
    def fetch_configuration_webhook(self, request: operations.FetchConfigurationWebhookRequest) -> operations.FetchConfigurationWebhookResponse:
        base_url = operations.FETCH_CONFIGURATION_WEBHOOK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Configuration/Webhooks"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchConfigurationWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConfigurationConfigurationWebhook])
                res.conversations_v1_configuration_configuration_webhook = out

        return res

    
    def fetch_conversation(self, request: operations.FetchConversationRequest) -> operations.FetchConversationResponse:
        r"""Fetch a conversation from your account's default service
        """
        
        base_url = operations.FETCH_CONVERSATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Conversations/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1Conversation])
                res.conversations_v1_conversation = out

        return res

    
    def fetch_conversation_message(self, request: operations.FetchConversationMessageRequest) -> operations.FetchConversationMessageResponse:
        r"""Fetch a message from the conversation
        """
        
        base_url = operations.FETCH_CONVERSATION_MESSAGE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Messages/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchConversationMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConversationConversationMessage])
                res.conversations_v1_conversation_conversation_message = out

        return res

    
    def fetch_conversation_message_receipt(self, request: operations.FetchConversationMessageReceiptRequest) -> operations.FetchConversationMessageReceiptResponse:
        r"""Fetch the delivery and read receipts of the conversation message
        """
        
        base_url = operations.FETCH_CONVERSATION_MESSAGE_RECEIPT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchConversationMessageReceiptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConversationConversationMessageConversationMessageReceipt])
                res.conversations_v1_conversation_conversation_message_conversation_message_receipt = out

        return res

    
    def fetch_conversation_participant(self, request: operations.FetchConversationParticipantRequest) -> operations.FetchConversationParticipantResponse:
        r"""Fetch a participant of the conversation
        """
        
        base_url = operations.FETCH_CONVERSATION_PARTICIPANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Participants/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchConversationParticipantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConversationConversationParticipant])
                res.conversations_v1_conversation_conversation_participant = out

        return res

    
    def fetch_conversation_scoped_webhook(self, request: operations.FetchConversationScopedWebhookRequest) -> operations.FetchConversationScopedWebhookResponse:
        r"""Fetch the configuration of a conversation-scoped webhook
        """
        
        base_url = operations.FETCH_CONVERSATION_SCOPED_WEBHOOK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Webhooks/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchConversationScopedWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConversationConversationScopedWebhook])
                res.conversations_v1_conversation_conversation_scoped_webhook = out

        return res

    
    def fetch_credential(self, request: operations.FetchCredentialRequest) -> operations.FetchCredentialResponse:
        r"""Fetch a push notification credential from your account
        """
        
        base_url = operations.FETCH_CREDENTIAL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Credentials/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCredentialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1Credential])
                res.conversations_v1_credential = out

        return res

    
    def fetch_role(self, request: operations.FetchRoleRequest) -> operations.FetchRoleResponse:
        r"""Fetch a user role from your account's default service
        """
        
        base_url = operations.FETCH_ROLE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Roles/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1Role])
                res.conversations_v1_role = out

        return res

    
    def fetch_service(self, request: operations.FetchServiceRequest) -> operations.FetchServiceResponse:
        r"""Fetch a conversation service from your account
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
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1Service])
                res.conversations_v1_service = out

        return res

    
    def fetch_service_binding(self, request: operations.FetchServiceBindingRequest) -> operations.FetchServiceBindingResponse:
        r"""Fetch a push notification binding from the conversation service
        """
        
        base_url = operations.FETCH_SERVICE_BINDING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Bindings/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceBindingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceBinding])
                res.conversations_v1_service_service_binding = out

        return res

    
    def fetch_service_configuration(self, request: operations.FetchServiceConfigurationRequest) -> operations.FetchServiceConfigurationResponse:
        r"""Fetch the configuration of a conversation service
        """
        
        base_url = operations.FETCH_SERVICE_CONFIGURATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Configuration", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConfiguration])
                res.conversations_v1_service_service_configuration = out

        return res

    
    def fetch_service_conversation(self, request: operations.FetchServiceConversationRequest) -> operations.FetchServiceConversationResponse:
        r"""Fetch a conversation from your service
        """
        
        base_url = operations.FETCH_SERVICE_CONVERSATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConversation])
                res.conversations_v1_service_service_conversation = out

        return res

    
    def fetch_service_conversation_message(self, request: operations.FetchServiceConversationMessageRequest) -> operations.FetchServiceConversationMessageResponse:
        r"""Fetch a message from the conversation
        """
        
        base_url = operations.FETCH_SERVICE_CONVERSATION_MESSAGE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceConversationMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationMessage])
                res.conversations_v1_service_service_conversation_service_conversation_message = out

        return res

    
    def fetch_service_conversation_message_receipt(self, request: operations.FetchServiceConversationMessageReceiptRequest) -> operations.FetchServiceConversationMessageReceiptResponse:
        r"""Fetch the delivery and read receipts of the conversation message
        """
        
        base_url = operations.FETCH_SERVICE_CONVERSATION_MESSAGE_RECEIPT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceConversationMessageReceiptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt])
                res.conversations_v1_service_service_conversation_service_conversation_message_service_conversation_message_receipt = out

        return res

    
    def fetch_service_conversation_participant(self, request: operations.FetchServiceConversationParticipantRequest) -> operations.FetchServiceConversationParticipantResponse:
        r"""Fetch a participant of the conversation
        """
        
        base_url = operations.FETCH_SERVICE_CONVERSATION_PARTICIPANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceConversationParticipantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant])
                res.conversations_v1_service_service_conversation_service_conversation_participant = out

        return res

    
    def fetch_service_conversation_scoped_webhook(self, request: operations.FetchServiceConversationScopedWebhookRequest) -> operations.FetchServiceConversationScopedWebhookResponse:
        r"""Fetch the configuration of a conversation-scoped webhook
        """
        
        base_url = operations.FETCH_SERVICE_CONVERSATION_SCOPED_WEBHOOK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceConversationScopedWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook])
                res.conversations_v1_service_service_conversation_service_conversation_scoped_webhook = out

        return res

    
    def fetch_service_notification(self, request: operations.FetchServiceNotificationRequest) -> operations.FetchServiceNotificationResponse:
        r"""Fetch push notification service settings
        """
        
        base_url = operations.FETCH_SERVICE_NOTIFICATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Configuration/Notifications", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceNotificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConfigurationServiceNotification])
                res.conversations_v1_service_service_configuration_service_notification = out

        return res

    
    def fetch_service_role(self, request: operations.FetchServiceRoleRequest) -> operations.FetchServiceRoleResponse:
        r"""Fetch a user role from your service
        """
        
        base_url = operations.FETCH_SERVICE_ROLE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Roles/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceRoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceRole])
                res.conversations_v1_service_service_role = out

        return res

    
    def fetch_service_user(self, request: operations.FetchServiceUserRequest) -> operations.FetchServiceUserResponse:
        r"""Fetch a conversation user from your service
        """
        
        base_url = operations.FETCH_SERVICE_USER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Users/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceUser])
                res.conversations_v1_service_service_user = out

        return res

    
    def fetch_service_user_conversation(self, request: operations.FetchServiceUserConversationRequest) -> operations.FetchServiceUserConversationResponse:
        r"""Fetch a specific User Conversation.
        """
        
        base_url = operations.FETCH_SERVICE_USER_CONVERSATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceUserConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceUserServiceUserConversation])
                res.conversations_v1_service_service_user_service_user_conversation = out

        return res

    
    def fetch_service_webhook_configuration(self, request: operations.FetchServiceWebhookConfigurationRequest) -> operations.FetchServiceWebhookConfigurationResponse:
        r"""Fetch a specific service webhook configuration.
        """
        
        base_url = operations.FETCH_SERVICE_WEBHOOK_CONFIGURATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Configuration/Webhooks", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceWebhookConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration])
                res.conversations_v1_service_service_configuration_service_webhook_configuration = out

        return res

    
    def fetch_user(self, request: operations.FetchUserRequest) -> operations.FetchUserResponse:
        r"""Fetch a conversation user from your account's default service
        """
        
        base_url = operations.FETCH_USER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Users/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1User])
                res.conversations_v1_user = out

        return res

    
    def fetch_user_conversation(self, request: operations.FetchUserConversationRequest) -> operations.FetchUserConversationResponse:
        r"""Fetch a specific User Conversation.
        """
        
        base_url = operations.FETCH_USER_CONVERSATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Users/{UserSid}/Conversations/{ConversationSid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchUserConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1UserUserConversation])
                res.conversations_v1_user_user_conversation = out

        return res

    
    def list_configuration_address(self, request: operations.ListConfigurationAddressRequest) -> operations.ListConfigurationAddressResponse:
        r"""Retrieve a list of address configurations for an account
        """
        
        base_url = operations.LIST_CONFIGURATION_ADDRESS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Configuration/Addresses"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListConfigurationAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListConfigurationAddressListConfigurationAddressResponse])
                res.list_configuration_address_response = out

        return res

    
    def list_conversation(self, request: operations.ListConversationRequest) -> operations.ListConversationResponse:
        r"""Retrieve a list of conversations in your account's default service
        """
        
        base_url = operations.LIST_CONVERSATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Conversations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListConversationListConversationResponse])
                res.list_conversation_response = out

        return res

    
    def list_conversation_message(self, request: operations.ListConversationMessageRequest) -> operations.ListConversationMessageResponse:
        r"""Retrieve a list of all messages in the conversation
        """
        
        base_url = operations.LIST_CONVERSATION_MESSAGE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Messages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListConversationMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListConversationMessageListConversationMessageResponse])
                res.list_conversation_message_response = out

        return res

    
    def list_conversation_message_receipt(self, request: operations.ListConversationMessageReceiptRequest) -> operations.ListConversationMessageReceiptResponse:
        r"""Retrieve a list of all delivery and read receipts of the conversation message
        """
        
        base_url = operations.LIST_CONVERSATION_MESSAGE_RECEIPT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListConversationMessageReceiptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListConversationMessageReceiptListConversationMessageReceiptResponse])
                res.list_conversation_message_receipt_response = out

        return res

    
    def list_conversation_participant(self, request: operations.ListConversationParticipantRequest) -> operations.ListConversationParticipantResponse:
        r"""Retrieve a list of all participants of the conversation
        """
        
        base_url = operations.LIST_CONVERSATION_PARTICIPANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Participants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListConversationParticipantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListConversationParticipantListConversationParticipantResponse])
                res.list_conversation_participant_response = out

        return res

    
    def list_conversation_scoped_webhook(self, request: operations.ListConversationScopedWebhookRequest) -> operations.ListConversationScopedWebhookResponse:
        r"""Retrieve a list of all webhooks scoped to the conversation
        """
        
        base_url = operations.LIST_CONVERSATION_SCOPED_WEBHOOK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Webhooks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListConversationScopedWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListConversationScopedWebhookListConversationScopedWebhookResponse])
                res.list_conversation_scoped_webhook_response = out

        return res

    
    def list_credential(self, request: operations.ListCredentialRequest) -> operations.ListCredentialResponse:
        r"""Retrieve a list of all push notification credentials on your account
        """
        
        base_url = operations.LIST_CREDENTIAL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Credentials"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCredentialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCredentialListCredentialResponse])
                res.list_credential_response = out

        return res

    
    def list_participant_conversation(self, request: operations.ListParticipantConversationRequest) -> operations.ListParticipantConversationResponse:
        r"""Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.
        """
        
        base_url = operations.LIST_PARTICIPANT_CONVERSATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/ParticipantConversations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListParticipantConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListParticipantConversationListParticipantConversationResponse])
                res.list_participant_conversation_response = out

        return res

    
    def list_role(self, request: operations.ListRoleRequest) -> operations.ListRoleResponse:
        r"""Retrieve a list of all user roles in your account's default service
        """
        
        base_url = operations.LIST_ROLE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Roles"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListRoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListRoleListRoleResponse])
                res.list_role_response = out

        return res

    
    def list_service(self, request: operations.ListServiceRequest) -> operations.ListServiceResponse:
        r"""Retrieve a list of all conversation services on your account
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

    
    def list_service_binding(self, request: operations.ListServiceBindingRequest) -> operations.ListServiceBindingResponse:
        r"""Retrieve a list of all push notification bindings in the conversation service
        """
        
        base_url = operations.LIST_SERVICE_BINDING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Bindings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceBindingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListServiceBindingListServiceBindingResponse])
                res.list_service_binding_response = out

        return res

    
    def list_service_conversation(self, request: operations.ListServiceConversationRequest) -> operations.ListServiceConversationResponse:
        r"""Retrieve a list of conversations in your service
        """
        
        base_url = operations.LIST_SERVICE_CONVERSATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListServiceConversationListServiceConversationResponse])
                res.list_service_conversation_response = out

        return res

    
    def list_service_conversation_message(self, request: operations.ListServiceConversationMessageRequest) -> operations.ListServiceConversationMessageResponse:
        r"""Retrieve a list of all messages in the conversation
        """
        
        base_url = operations.LIST_SERVICE_CONVERSATION_MESSAGE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceConversationMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListServiceConversationMessageListServiceConversationMessageResponse])
                res.list_service_conversation_message_response = out

        return res

    
    def list_service_conversation_message_receipt(self, request: operations.ListServiceConversationMessageReceiptRequest) -> operations.ListServiceConversationMessageReceiptResponse:
        r"""Retrieve a list of all delivery and read receipts of the conversation message
        """
        
        base_url = operations.LIST_SERVICE_CONVERSATION_MESSAGE_RECEIPT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceConversationMessageReceiptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponse])
                res.list_service_conversation_message_receipt_response = out

        return res

    
    def list_service_conversation_participant(self, request: operations.ListServiceConversationParticipantRequest) -> operations.ListServiceConversationParticipantResponse:
        r"""Retrieve a list of all participants of the conversation
        """
        
        base_url = operations.LIST_SERVICE_CONVERSATION_PARTICIPANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceConversationParticipantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListServiceConversationParticipantListServiceConversationParticipantResponse])
                res.list_service_conversation_participant_response = out

        return res

    
    def list_service_conversation_scoped_webhook(self, request: operations.ListServiceConversationScopedWebhookRequest) -> operations.ListServiceConversationScopedWebhookResponse:
        r"""Retrieve a list of all webhooks scoped to the conversation
        """
        
        base_url = operations.LIST_SERVICE_CONVERSATION_SCOPED_WEBHOOK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceConversationScopedWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponse])
                res.list_service_conversation_scoped_webhook_response = out

        return res

    
    def list_service_participant_conversation(self, request: operations.ListServiceParticipantConversationRequest) -> operations.ListServiceParticipantConversationResponse:
        r"""Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.
        """
        
        base_url = operations.LIST_SERVICE_PARTICIPANT_CONVERSATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/ParticipantConversations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceParticipantConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListServiceParticipantConversationListServiceParticipantConversationResponse])
                res.list_service_participant_conversation_response = out

        return res

    
    def list_service_role(self, request: operations.ListServiceRoleRequest) -> operations.ListServiceRoleResponse:
        r"""Retrieve a list of all user roles in your service
        """
        
        base_url = operations.LIST_SERVICE_ROLE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Roles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceRoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListServiceRoleListServiceRoleResponse])
                res.list_service_role_response = out

        return res

    
    def list_service_user(self, request: operations.ListServiceUserRequest) -> operations.ListServiceUserResponse:
        r"""Retrieve a list of all conversation users in your service
        """
        
        base_url = operations.LIST_SERVICE_USER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Users", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListServiceUserListServiceUserResponse])
                res.list_service_user_response = out

        return res

    
    def list_service_user_conversation(self, request: operations.ListServiceUserConversationRequest) -> operations.ListServiceUserConversationResponse:
        r"""Retrieve a list of all User Conversations for the User.
        """
        
        base_url = operations.LIST_SERVICE_USER_CONVERSATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceUserConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListServiceUserConversationListServiceUserConversationResponse])
                res.list_service_user_conversation_response = out

        return res

    
    def list_user(self, request: operations.ListUserRequest) -> operations.ListUserResponse:
        r"""Retrieve a list of all conversation users in your account's default service
        """
        
        base_url = operations.LIST_USER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Users"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListUserListUserResponse])
                res.list_user_response = out

        return res

    
    def list_user_conversation(self, request: operations.ListUserConversationRequest) -> operations.ListUserConversationResponse:
        r"""Retrieve a list of all User Conversations for the User.
        """
        
        base_url = operations.LIST_USER_CONVERSATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Users/{UserSid}/Conversations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUserConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListUserConversationListUserConversationResponse])
                res.list_user_conversation_response = out

        return res

    
    def update_configuration(self, request: operations.UpdateConfigurationRequest) -> operations.UpdateConfigurationResponse:
        r"""Update the global configuration of conversations on your account
        """
        
        base_url = operations.UPDATE_CONFIGURATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Configuration"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1Configuration])
                res.conversations_v1_configuration = out

        return res

    
    def update_configuration_address(self, request: operations.UpdateConfigurationAddressRequest) -> operations.UpdateConfigurationAddressResponse:
        r"""Update an existing address configuration
        """
        
        base_url = operations.UPDATE_CONFIGURATION_ADDRESS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Configuration/Addresses/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateConfigurationAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConfigurationAddress])
                res.conversations_v1_configuration_address = out

        return res

    
    def update_configuration_webhook(self, request: operations.UpdateConfigurationWebhookRequest) -> operations.UpdateConfigurationWebhookResponse:
        base_url = operations.UPDATE_CONFIGURATION_WEBHOOK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Configuration/Webhooks"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateConfigurationWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConfigurationConfigurationWebhook])
                res.conversations_v1_configuration_configuration_webhook = out

        return res

    
    def update_conversation(self, request: operations.UpdateConversationRequest) -> operations.UpdateConversationResponse:
        r"""Update an existing conversation in your account's default service
        """
        
        base_url = operations.UPDATE_CONVERSATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Conversations/{Sid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1Conversation])
                res.conversations_v1_conversation = out

        return res

    
    def update_conversation_message(self, request: operations.UpdateConversationMessageRequest) -> operations.UpdateConversationMessageResponse:
        r"""Update an existing message in the conversation
        """
        
        base_url = operations.UPDATE_CONVERSATION_MESSAGE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Messages/{Sid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateConversationMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConversationConversationMessage])
                res.conversations_v1_conversation_conversation_message = out

        return res

    
    def update_conversation_participant(self, request: operations.UpdateConversationParticipantRequest) -> operations.UpdateConversationParticipantResponse:
        r"""Update an existing participant in the conversation
        """
        
        base_url = operations.UPDATE_CONVERSATION_PARTICIPANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Participants/{Sid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateConversationParticipantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConversationConversationParticipant])
                res.conversations_v1_conversation_conversation_participant = out

        return res

    
    def update_conversation_scoped_webhook(self, request: operations.UpdateConversationScopedWebhookRequest) -> operations.UpdateConversationScopedWebhookResponse:
        r"""Update an existing conversation-scoped webhook
        """
        
        base_url = operations.UPDATE_CONVERSATION_SCOPED_WEBHOOK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Webhooks/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateConversationScopedWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConversationConversationScopedWebhook])
                res.conversations_v1_conversation_conversation_scoped_webhook = out

        return res

    
    def update_credential(self, request: operations.UpdateCredentialRequest) -> operations.UpdateCredentialResponse:
        r"""Update an existing push notification credential on your account
        """
        
        base_url = operations.UPDATE_CREDENTIAL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Credentials/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateCredentialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1Credential])
                res.conversations_v1_credential = out

        return res

    
    def update_role(self, request: operations.UpdateRoleRequest) -> operations.UpdateRoleResponse:
        r"""Update an existing user role in your account's default service
        """
        
        base_url = operations.UPDATE_ROLE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Roles/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateRoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1Role])
                res.conversations_v1_role = out

        return res

    
    def update_service_configuration(self, request: operations.UpdateServiceConfigurationRequest) -> operations.UpdateServiceConfigurationResponse:
        r"""Update configuration settings of a conversation service
        """
        
        base_url = operations.UPDATE_SERVICE_CONFIGURATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Configuration", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateServiceConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConfiguration])
                res.conversations_v1_service_service_configuration = out

        return res

    
    def update_service_conversation(self, request: operations.UpdateServiceConversationRequest) -> operations.UpdateServiceConversationResponse:
        r"""Update an existing conversation in your service
        """
        
        base_url = operations.UPDATE_SERVICE_CONVERSATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{Sid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateServiceConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConversation])
                res.conversations_v1_service_service_conversation = out

        return res

    
    def update_service_conversation_message(self, request: operations.UpdateServiceConversationMessageRequest) -> operations.UpdateServiceConversationMessageResponse:
        r"""Update an existing message in the conversation
        """
        
        base_url = operations.UPDATE_SERVICE_CONVERSATION_MESSAGE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateServiceConversationMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationMessage])
                res.conversations_v1_service_service_conversation_service_conversation_message = out

        return res

    
    def update_service_conversation_participant(self, request: operations.UpdateServiceConversationParticipantRequest) -> operations.UpdateServiceConversationParticipantResponse:
        r"""Update an existing participant in the conversation
        """
        
        base_url = operations.UPDATE_SERVICE_CONVERSATION_PARTICIPANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateServiceConversationParticipantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant])
                res.conversations_v1_service_service_conversation_service_conversation_participant = out

        return res

    
    def update_service_conversation_scoped_webhook(self, request: operations.UpdateServiceConversationScopedWebhookRequest) -> operations.UpdateServiceConversationScopedWebhookResponse:
        r"""Update an existing conversation-scoped webhook
        """
        
        base_url = operations.UPDATE_SERVICE_CONVERSATION_SCOPED_WEBHOOK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateServiceConversationScopedWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook])
                res.conversations_v1_service_service_conversation_service_conversation_scoped_webhook = out

        return res

    
    def update_service_notification(self, request: operations.UpdateServiceNotificationRequest) -> operations.UpdateServiceNotificationResponse:
        r"""Update push notification service settings
        """
        
        base_url = operations.UPDATE_SERVICE_NOTIFICATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Configuration/Notifications", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateServiceNotificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConfigurationServiceNotification])
                res.conversations_v1_service_service_configuration_service_notification = out

        return res

    
    def update_service_role(self, request: operations.UpdateServiceRoleRequest) -> operations.UpdateServiceRoleResponse:
        r"""Update an existing user role in your service
        """
        
        base_url = operations.UPDATE_SERVICE_ROLE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Roles/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateServiceRoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceRole])
                res.conversations_v1_service_service_role = out

        return res

    
    def update_service_user(self, request: operations.UpdateServiceUserRequest) -> operations.UpdateServiceUserResponse:
        r"""Update an existing conversation user in your service
        """
        
        base_url = operations.UPDATE_SERVICE_USER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Users/{Sid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateServiceUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceUser])
                res.conversations_v1_service_service_user = out

        return res

    
    def update_service_user_conversation(self, request: operations.UpdateServiceUserConversationRequest) -> operations.UpdateServiceUserConversationResponse:
        r"""Update a specific User Conversation.
        """
        
        base_url = operations.UPDATE_SERVICE_USER_CONVERSATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateServiceUserConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceUserServiceUserConversation])
                res.conversations_v1_service_service_user_service_user_conversation = out

        return res

    
    def update_service_webhook_configuration(self, request: operations.UpdateServiceWebhookConfigurationRequest) -> operations.UpdateServiceWebhookConfigurationResponse:
        r"""Update a specific Webhook.
        """
        
        base_url = operations.UPDATE_SERVICE_WEBHOOK_CONFIGURATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Configuration/Webhooks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateServiceWebhookConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration])
                res.conversations_v1_service_service_configuration_service_webhook_configuration = out

        return res

    
    def update_user(self, request: operations.UpdateUserRequest) -> operations.UpdateUserResponse:
        r"""Update an existing conversation user in your account's default service
        """
        
        base_url = operations.UPDATE_USER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Users/{Sid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1User])
                res.conversations_v1_user = out

        return res

    
    def update_user_conversation(self, request: operations.UpdateUserConversationRequest) -> operations.UpdateUserConversationResponse:
        r"""Update a specific User Conversation.
        """
        
        base_url = operations.UPDATE_USER_CONVERSATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Users/{UserSid}/Conversations/{ConversationSid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUserConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1UserUserConversation])
                res.conversations_v1_user_user_conversation = out

        return res

    
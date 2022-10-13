import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://conversations.twilio.com",
]

class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url


    

    
    def create_configuration_address(self, request: operations.CreateConfigurationAddressRequest) -> operations.CreateConfigurationAddressResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_CONFIGURATION_ADDRESS_SERVERS[0]
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

        res = operations.CreateConfigurationAddressResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConfigurationAddress])
                res.responses[r.status_code][content_type] = operations.CreateConfigurationAddressResponses(conversations_v1_configuration_address=out)

        return res

    
    def create_conversation(self, request: operations.CreateConversationRequest) -> operations.CreateConversationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_CONVERSATION_SERVERS[0]
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

        res = operations.CreateConversationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1Conversation])
                res.responses[r.status_code][content_type] = operations.CreateConversationResponses(conversations_v1_conversation=out)

        return res

    
    def create_conversation_message(self, request: operations.CreateConversationMessageRequest) -> operations.CreateConversationMessageResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_CONVERSATION_MESSAGE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Messages", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateConversationMessageResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConversationConversationMessage])
                res.responses[r.status_code][content_type] = operations.CreateConversationMessageResponses(conversations_v1_conversation_conversation_message=out)

        return res

    
    def create_conversation_participant(self, request: operations.CreateConversationParticipantRequest) -> operations.CreateConversationParticipantResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_CONVERSATION_PARTICIPANT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Participants", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateConversationParticipantResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConversationConversationParticipant])
                res.responses[r.status_code][content_type] = operations.CreateConversationParticipantResponses(conversations_v1_conversation_conversation_participant=out)

        return res

    
    def create_conversation_scoped_webhook(self, request: operations.CreateConversationScopedWebhookRequest) -> operations.CreateConversationScopedWebhookResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_CONVERSATION_SCOPED_WEBHOOK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Webhooks", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateConversationScopedWebhookResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConversationConversationScopedWebhook])
                res.responses[r.status_code][content_type] = operations.CreateConversationScopedWebhookResponses(conversations_v1_conversation_conversation_scoped_webhook=out)

        return res

    
    def create_credential(self, request: operations.CreateCredentialRequest) -> operations.CreateCredentialResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_CREDENTIAL_SERVERS[0]
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

        res = operations.CreateCredentialResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1Credential])
                res.responses[r.status_code][content_type] = operations.CreateCredentialResponses(conversations_v1_credential=out)

        return res

    
    def create_role(self, request: operations.CreateRoleRequest) -> operations.CreateRoleResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_ROLE_SERVERS[0]
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

        res = operations.CreateRoleResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1Role])
                res.responses[r.status_code][content_type] = operations.CreateRoleResponses(conversations_v1_role=out)

        return res

    
    def create_service(self, request: operations.CreateServiceRequest) -> operations.CreateServiceResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_SERVICE_SERVERS[0]
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

        res = operations.CreateServiceResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1Service])
                res.responses[r.status_code][content_type] = operations.CreateServiceResponses(conversations_v1_service=out)

        return res

    
    def create_service_conversation(self, request: operations.CreateServiceConversationRequest) -> operations.CreateServiceConversationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_SERVICE_CONVERSATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateServiceConversationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConversation])
                res.responses[r.status_code][content_type] = operations.CreateServiceConversationResponses(conversations_v1_service_service_conversation=out)

        return res

    
    def create_service_conversation_message(self, request: operations.CreateServiceConversationMessageRequest) -> operations.CreateServiceConversationMessageResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_SERVICE_CONVERSATION_MESSAGE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateServiceConversationMessageResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationMessage])
                res.responses[r.status_code][content_type] = operations.CreateServiceConversationMessageResponses(conversations_v1_service_service_conversation_service_conversation_message=out)

        return res

    
    def create_service_conversation_participant(self, request: operations.CreateServiceConversationParticipantRequest) -> operations.CreateServiceConversationParticipantResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_SERVICE_CONVERSATION_PARTICIPANT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateServiceConversationParticipantResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant])
                res.responses[r.status_code][content_type] = operations.CreateServiceConversationParticipantResponses(conversations_v1_service_service_conversation_service_conversation_participant=out)

        return res

    
    def create_service_conversation_scoped_webhook(self, request: operations.CreateServiceConversationScopedWebhookRequest) -> operations.CreateServiceConversationScopedWebhookResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_SERVICE_CONVERSATION_SCOPED_WEBHOOK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateServiceConversationScopedWebhookResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook])
                res.responses[r.status_code][content_type] = operations.CreateServiceConversationScopedWebhookResponses(conversations_v1_service_service_conversation_service_conversation_scoped_webhook=out)

        return res

    
    def create_service_role(self, request: operations.CreateServiceRoleRequest) -> operations.CreateServiceRoleResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_SERVICE_ROLE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Roles", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateServiceRoleResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceRole])
                res.responses[r.status_code][content_type] = operations.CreateServiceRoleResponses(conversations_v1_service_service_role=out)

        return res

    
    def create_service_user(self, request: operations.CreateServiceUserRequest) -> operations.CreateServiceUserResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_SERVICE_USER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Users", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateServiceUserResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceUser])
                res.responses[r.status_code][content_type] = operations.CreateServiceUserResponses(conversations_v1_service_service_user=out)

        return res

    
    def create_user(self, request: operations.CreateUserRequest) -> operations.CreateUserResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_USER_SERVERS[0]
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

        res = operations.CreateUserResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1User])
                res.responses[r.status_code][content_type] = operations.CreateUserResponses(conversations_v1_user=out)

        return res

    
    def delete_configuration_address(self, request: operations.DeleteConfigurationAddressRequest) -> operations.DeleteConfigurationAddressResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_CONFIGURATION_ADDRESS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Configuration/Addresses/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConfigurationAddressResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_conversation(self, request: operations.DeleteConversationRequest) -> operations.DeleteConversationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_CONVERSATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Conversations/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConversationResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_conversation_message(self, request: operations.DeleteConversationMessageRequest) -> operations.DeleteConversationMessageResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_CONVERSATION_MESSAGE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Messages/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConversationMessageResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_conversation_participant(self, request: operations.DeleteConversationParticipantRequest) -> operations.DeleteConversationParticipantResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_CONVERSATION_PARTICIPANT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Participants/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConversationParticipantResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_conversation_scoped_webhook(self, request: operations.DeleteConversationScopedWebhookRequest) -> operations.DeleteConversationScopedWebhookResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_CONVERSATION_SCOPED_WEBHOOK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Webhooks/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConversationScopedWebhookResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_credential(self, request: operations.DeleteCredentialRequest) -> operations.DeleteCredentialResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_CREDENTIAL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Credentials/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCredentialResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_role(self, request: operations.DeleteRoleRequest) -> operations.DeleteRoleResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_ROLE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Roles/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRoleResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_service(self, request: operations.DeleteServiceRequest) -> operations.DeleteServiceResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_SERVICE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServiceResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_service_binding(self, request: operations.DeleteServiceBindingRequest) -> operations.DeleteServiceBindingResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_SERVICE_BINDING_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Bindings/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServiceBindingResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_service_conversation(self, request: operations.DeleteServiceConversationRequest) -> operations.DeleteServiceConversationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_SERVICE_CONVERSATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServiceConversationResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_service_conversation_message(self, request: operations.DeleteServiceConversationMessageRequest) -> operations.DeleteServiceConversationMessageResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_SERVICE_CONVERSATION_MESSAGE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServiceConversationMessageResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_service_conversation_participant(self, request: operations.DeleteServiceConversationParticipantRequest) -> operations.DeleteServiceConversationParticipantResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_SERVICE_CONVERSATION_PARTICIPANT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServiceConversationParticipantResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_service_conversation_scoped_webhook(self, request: operations.DeleteServiceConversationScopedWebhookRequest) -> operations.DeleteServiceConversationScopedWebhookResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_SERVICE_CONVERSATION_SCOPED_WEBHOOK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServiceConversationScopedWebhookResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_service_role(self, request: operations.DeleteServiceRoleRequest) -> operations.DeleteServiceRoleResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_SERVICE_ROLE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Roles/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServiceRoleResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_service_user(self, request: operations.DeleteServiceUserRequest) -> operations.DeleteServiceUserResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_SERVICE_USER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Users/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServiceUserResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_service_user_conversation(self, request: operations.DeleteServiceUserConversationRequest) -> operations.DeleteServiceUserConversationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_SERVICE_USER_CONVERSATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServiceUserConversationResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_user(self, request: operations.DeleteUserRequest) -> operations.DeleteUserResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_USER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Users/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_user_conversation(self, request: operations.DeleteUserConversationRequest) -> operations.DeleteUserConversationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_USER_CONVERSATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Users/{UserSid}/Conversations/{ConversationSid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserConversationResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def fetch_configuration(self, request: operations.FetchConfigurationRequest) -> operations.FetchConfigurationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_CONFIGURATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchConfigurationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1Configuration])
                res.responses[r.status_code][content_type] = operations.FetchConfigurationResponses(conversations_v1_configuration=out)

        return res

    
    def fetch_configuration_address(self, request: operations.FetchConfigurationAddressRequest) -> operations.FetchConfigurationAddressResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_CONFIGURATION_ADDRESS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Configuration/Addresses/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchConfigurationAddressResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConfigurationAddress])
                res.responses[r.status_code][content_type] = operations.FetchConfigurationAddressResponses(conversations_v1_configuration_address=out)

        return res

    
    def fetch_configuration_webhook(self, request: operations.FetchConfigurationWebhookRequest) -> operations.FetchConfigurationWebhookResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_CONFIGURATION_WEBHOOK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchConfigurationWebhookResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConfigurationConfigurationWebhook])
                res.responses[r.status_code][content_type] = operations.FetchConfigurationWebhookResponses(conversations_v1_configuration_configuration_webhook=out)

        return res

    
    def fetch_conversation(self, request: operations.FetchConversationRequest) -> operations.FetchConversationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_CONVERSATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Conversations/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchConversationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1Conversation])
                res.responses[r.status_code][content_type] = operations.FetchConversationResponses(conversations_v1_conversation=out)

        return res

    
    def fetch_conversation_message(self, request: operations.FetchConversationMessageRequest) -> operations.FetchConversationMessageResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_CONVERSATION_MESSAGE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Messages/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchConversationMessageResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConversationConversationMessage])
                res.responses[r.status_code][content_type] = operations.FetchConversationMessageResponses(conversations_v1_conversation_conversation_message=out)

        return res

    
    def fetch_conversation_message_receipt(self, request: operations.FetchConversationMessageReceiptRequest) -> operations.FetchConversationMessageReceiptResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_CONVERSATION_MESSAGE_RECEIPT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchConversationMessageReceiptResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConversationConversationMessageConversationMessageReceipt])
                res.responses[r.status_code][content_type] = operations.FetchConversationMessageReceiptResponses(conversations_v1_conversation_conversation_message_conversation_message_receipt=out)

        return res

    
    def fetch_conversation_participant(self, request: operations.FetchConversationParticipantRequest) -> operations.FetchConversationParticipantResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_CONVERSATION_PARTICIPANT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Participants/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchConversationParticipantResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConversationConversationParticipant])
                res.responses[r.status_code][content_type] = operations.FetchConversationParticipantResponses(conversations_v1_conversation_conversation_participant=out)

        return res

    
    def fetch_conversation_scoped_webhook(self, request: operations.FetchConversationScopedWebhookRequest) -> operations.FetchConversationScopedWebhookResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_CONVERSATION_SCOPED_WEBHOOK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Webhooks/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchConversationScopedWebhookResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConversationConversationScopedWebhook])
                res.responses[r.status_code][content_type] = operations.FetchConversationScopedWebhookResponses(conversations_v1_conversation_conversation_scoped_webhook=out)

        return res

    
    def fetch_credential(self, request: operations.FetchCredentialRequest) -> operations.FetchCredentialResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_CREDENTIAL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Credentials/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCredentialResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1Credential])
                res.responses[r.status_code][content_type] = operations.FetchCredentialResponses(conversations_v1_credential=out)

        return res

    
    def fetch_role(self, request: operations.FetchRoleRequest) -> operations.FetchRoleResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_ROLE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Roles/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRoleResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1Role])
                res.responses[r.status_code][content_type] = operations.FetchRoleResponses(conversations_v1_role=out)

        return res

    
    def fetch_service(self, request: operations.FetchServiceRequest) -> operations.FetchServiceResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SERVICE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1Service])
                res.responses[r.status_code][content_type] = operations.FetchServiceResponses(conversations_v1_service=out)

        return res

    
    def fetch_service_binding(self, request: operations.FetchServiceBindingRequest) -> operations.FetchServiceBindingResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SERVICE_BINDING_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Bindings/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceBindingResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceBinding])
                res.responses[r.status_code][content_type] = operations.FetchServiceBindingResponses(conversations_v1_service_service_binding=out)

        return res

    
    def fetch_service_configuration(self, request: operations.FetchServiceConfigurationRequest) -> operations.FetchServiceConfigurationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SERVICE_CONFIGURATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Configuration", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceConfigurationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConfiguration])
                res.responses[r.status_code][content_type] = operations.FetchServiceConfigurationResponses(conversations_v1_service_service_configuration=out)

        return res

    
    def fetch_service_conversation(self, request: operations.FetchServiceConversationRequest) -> operations.FetchServiceConversationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SERVICE_CONVERSATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceConversationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConversation])
                res.responses[r.status_code][content_type] = operations.FetchServiceConversationResponses(conversations_v1_service_service_conversation=out)

        return res

    
    def fetch_service_conversation_message(self, request: operations.FetchServiceConversationMessageRequest) -> operations.FetchServiceConversationMessageResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SERVICE_CONVERSATION_MESSAGE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceConversationMessageResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationMessage])
                res.responses[r.status_code][content_type] = operations.FetchServiceConversationMessageResponses(conversations_v1_service_service_conversation_service_conversation_message=out)

        return res

    
    def fetch_service_conversation_message_receipt(self, request: operations.FetchServiceConversationMessageReceiptRequest) -> operations.FetchServiceConversationMessageReceiptResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SERVICE_CONVERSATION_MESSAGE_RECEIPT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceConversationMessageReceiptResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt])
                res.responses[r.status_code][content_type] = operations.FetchServiceConversationMessageReceiptResponses(conversations_v1_service_service_conversation_service_conversation_message_service_conversation_message_receipt=out)

        return res

    
    def fetch_service_conversation_participant(self, request: operations.FetchServiceConversationParticipantRequest) -> operations.FetchServiceConversationParticipantResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SERVICE_CONVERSATION_PARTICIPANT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceConversationParticipantResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant])
                res.responses[r.status_code][content_type] = operations.FetchServiceConversationParticipantResponses(conversations_v1_service_service_conversation_service_conversation_participant=out)

        return res

    
    def fetch_service_conversation_scoped_webhook(self, request: operations.FetchServiceConversationScopedWebhookRequest) -> operations.FetchServiceConversationScopedWebhookResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SERVICE_CONVERSATION_SCOPED_WEBHOOK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceConversationScopedWebhookResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook])
                res.responses[r.status_code][content_type] = operations.FetchServiceConversationScopedWebhookResponses(conversations_v1_service_service_conversation_service_conversation_scoped_webhook=out)

        return res

    
    def fetch_service_notification(self, request: operations.FetchServiceNotificationRequest) -> operations.FetchServiceNotificationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SERVICE_NOTIFICATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Configuration/Notifications", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceNotificationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConfigurationServiceNotification])
                res.responses[r.status_code][content_type] = operations.FetchServiceNotificationResponses(conversations_v1_service_service_configuration_service_notification=out)

        return res

    
    def fetch_service_role(self, request: operations.FetchServiceRoleRequest) -> operations.FetchServiceRoleResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SERVICE_ROLE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Roles/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceRoleResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceRole])
                res.responses[r.status_code][content_type] = operations.FetchServiceRoleResponses(conversations_v1_service_service_role=out)

        return res

    
    def fetch_service_user(self, request: operations.FetchServiceUserRequest) -> operations.FetchServiceUserResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SERVICE_USER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Users/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceUserResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceUser])
                res.responses[r.status_code][content_type] = operations.FetchServiceUserResponses(conversations_v1_service_service_user=out)

        return res

    
    def fetch_service_user_conversation(self, request: operations.FetchServiceUserConversationRequest) -> operations.FetchServiceUserConversationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SERVICE_USER_CONVERSATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceUserConversationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceUserServiceUserConversation])
                res.responses[r.status_code][content_type] = operations.FetchServiceUserConversationResponses(conversations_v1_service_service_user_service_user_conversation=out)

        return res

    
    def fetch_service_webhook_configuration(self, request: operations.FetchServiceWebhookConfigurationRequest) -> operations.FetchServiceWebhookConfigurationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SERVICE_WEBHOOK_CONFIGURATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Configuration/Webhooks", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceWebhookConfigurationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration])
                res.responses[r.status_code][content_type] = operations.FetchServiceWebhookConfigurationResponses(conversations_v1_service_service_configuration_service_webhook_configuration=out)

        return res

    
    def fetch_user(self, request: operations.FetchUserRequest) -> operations.FetchUserResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_USER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Users/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchUserResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1User])
                res.responses[r.status_code][content_type] = operations.FetchUserResponses(conversations_v1_user=out)

        return res

    
    def fetch_user_conversation(self, request: operations.FetchUserConversationRequest) -> operations.FetchUserConversationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_USER_CONVERSATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Users/{UserSid}/Conversations/{ConversationSid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchUserConversationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1UserUserConversation])
                res.responses[r.status_code][content_type] = operations.FetchUserConversationResponses(conversations_v1_user_user_conversation=out)

        return res

    
    def list_configuration_address(self, request: operations.ListConfigurationAddressRequest) -> operations.ListConfigurationAddressResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_CONFIGURATION_ADDRESS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListConfigurationAddressResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListConfigurationAddress200ApplicationJSONListConfigurationAddressResponse])
                res.responses[r.status_code][content_type] = operations.ListConfigurationAddressResponses(list_configuration_address_response=out)

        return res

    
    def list_conversation(self, request: operations.ListConversationRequest) -> operations.ListConversationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_CONVERSATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListConversationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListConversation200ApplicationJSONListConversationResponse])
                res.responses[r.status_code][content_type] = operations.ListConversationResponses(list_conversation_response=out)

        return res

    
    def list_conversation_message(self, request: operations.ListConversationMessageRequest) -> operations.ListConversationMessageResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_CONVERSATION_MESSAGE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Messages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListConversationMessageResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListConversationMessage200ApplicationJSONListConversationMessageResponse])
                res.responses[r.status_code][content_type] = operations.ListConversationMessageResponses(list_conversation_message_response=out)

        return res

    
    def list_conversation_message_receipt(self, request: operations.ListConversationMessageReceiptRequest) -> operations.ListConversationMessageReceiptResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_CONVERSATION_MESSAGE_RECEIPT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListConversationMessageReceiptResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListConversationMessageReceipt200ApplicationJSONListConversationMessageReceiptResponse])
                res.responses[r.status_code][content_type] = operations.ListConversationMessageReceiptResponses(list_conversation_message_receipt_response=out)

        return res

    
    def list_conversation_participant(self, request: operations.ListConversationParticipantRequest) -> operations.ListConversationParticipantResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_CONVERSATION_PARTICIPANT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Participants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListConversationParticipantResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListConversationParticipant200ApplicationJSONListConversationParticipantResponse])
                res.responses[r.status_code][content_type] = operations.ListConversationParticipantResponses(list_conversation_participant_response=out)

        return res

    
    def list_conversation_scoped_webhook(self, request: operations.ListConversationScopedWebhookRequest) -> operations.ListConversationScopedWebhookResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_CONVERSATION_SCOPED_WEBHOOK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Webhooks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListConversationScopedWebhookResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListConversationScopedWebhook200ApplicationJSONListConversationScopedWebhookResponse])
                res.responses[r.status_code][content_type] = operations.ListConversationScopedWebhookResponses(list_conversation_scoped_webhook_response=out)

        return res

    
    def list_credential(self, request: operations.ListCredentialRequest) -> operations.ListCredentialResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_CREDENTIAL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCredentialResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCredential200ApplicationJSONListCredentialResponse])
                res.responses[r.status_code][content_type] = operations.ListCredentialResponses(list_credential_response=out)

        return res

    
    def list_participant_conversation(self, request: operations.ListParticipantConversationRequest) -> operations.ListParticipantConversationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_PARTICIPANT_CONVERSATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListParticipantConversationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListParticipantConversation200ApplicationJSONListParticipantConversationResponse])
                res.responses[r.status_code][content_type] = operations.ListParticipantConversationResponses(list_participant_conversation_response=out)

        return res

    
    def list_role(self, request: operations.ListRoleRequest) -> operations.ListRoleResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_ROLE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListRoleResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListRole200ApplicationJSONListRoleResponse])
                res.responses[r.status_code][content_type] = operations.ListRoleResponses(list_role_response=out)

        return res

    
    def list_service(self, request: operations.ListServiceRequest) -> operations.ListServiceResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_SERVICE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListService200ApplicationJSONListServiceResponse])
                res.responses[r.status_code][content_type] = operations.ListServiceResponses(list_service_response=out)

        return res

    
    def list_service_binding(self, request: operations.ListServiceBindingRequest) -> operations.ListServiceBindingResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_SERVICE_BINDING_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Bindings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceBindingResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListServiceBinding200ApplicationJSONListServiceBindingResponse])
                res.responses[r.status_code][content_type] = operations.ListServiceBindingResponses(list_service_binding_response=out)

        return res

    
    def list_service_conversation(self, request: operations.ListServiceConversationRequest) -> operations.ListServiceConversationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_SERVICE_CONVERSATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceConversationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListServiceConversation200ApplicationJSONListServiceConversationResponse])
                res.responses[r.status_code][content_type] = operations.ListServiceConversationResponses(list_service_conversation_response=out)

        return res

    
    def list_service_conversation_message(self, request: operations.ListServiceConversationMessageRequest) -> operations.ListServiceConversationMessageResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_SERVICE_CONVERSATION_MESSAGE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceConversationMessageResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListServiceConversationMessage200ApplicationJSONListServiceConversationMessageResponse])
                res.responses[r.status_code][content_type] = operations.ListServiceConversationMessageResponses(list_service_conversation_message_response=out)

        return res

    
    def list_service_conversation_message_receipt(self, request: operations.ListServiceConversationMessageReceiptRequest) -> operations.ListServiceConversationMessageReceiptResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_SERVICE_CONVERSATION_MESSAGE_RECEIPT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceConversationMessageReceiptResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListServiceConversationMessageReceipt200ApplicationJSONListServiceConversationMessageReceiptResponse])
                res.responses[r.status_code][content_type] = operations.ListServiceConversationMessageReceiptResponses(list_service_conversation_message_receipt_response=out)

        return res

    
    def list_service_conversation_participant(self, request: operations.ListServiceConversationParticipantRequest) -> operations.ListServiceConversationParticipantResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_SERVICE_CONVERSATION_PARTICIPANT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceConversationParticipantResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListServiceConversationParticipant200ApplicationJSONListServiceConversationParticipantResponse])
                res.responses[r.status_code][content_type] = operations.ListServiceConversationParticipantResponses(list_service_conversation_participant_response=out)

        return res

    
    def list_service_conversation_scoped_webhook(self, request: operations.ListServiceConversationScopedWebhookRequest) -> operations.ListServiceConversationScopedWebhookResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_SERVICE_CONVERSATION_SCOPED_WEBHOOK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceConversationScopedWebhookResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListServiceConversationScopedWebhook200ApplicationJSONListServiceConversationScopedWebhookResponse])
                res.responses[r.status_code][content_type] = operations.ListServiceConversationScopedWebhookResponses(list_service_conversation_scoped_webhook_response=out)

        return res

    
    def list_service_participant_conversation(self, request: operations.ListServiceParticipantConversationRequest) -> operations.ListServiceParticipantConversationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_SERVICE_PARTICIPANT_CONVERSATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/ParticipantConversations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceParticipantConversationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListServiceParticipantConversation200ApplicationJSONListServiceParticipantConversationResponse])
                res.responses[r.status_code][content_type] = operations.ListServiceParticipantConversationResponses(list_service_participant_conversation_response=out)

        return res

    
    def list_service_role(self, request: operations.ListServiceRoleRequest) -> operations.ListServiceRoleResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_SERVICE_ROLE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Roles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceRoleResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListServiceRole200ApplicationJSONListServiceRoleResponse])
                res.responses[r.status_code][content_type] = operations.ListServiceRoleResponses(list_service_role_response=out)

        return res

    
    def list_service_user(self, request: operations.ListServiceUserRequest) -> operations.ListServiceUserResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_SERVICE_USER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Users", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceUserResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListServiceUser200ApplicationJSONListServiceUserResponse])
                res.responses[r.status_code][content_type] = operations.ListServiceUserResponses(list_service_user_response=out)

        return res

    
    def list_service_user_conversation(self, request: operations.ListServiceUserConversationRequest) -> operations.ListServiceUserConversationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_SERVICE_USER_CONVERSATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceUserConversationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListServiceUserConversation200ApplicationJSONListServiceUserConversationResponse])
                res.responses[r.status_code][content_type] = operations.ListServiceUserConversationResponses(list_service_user_conversation_response=out)

        return res

    
    def list_user(self, request: operations.ListUserRequest) -> operations.ListUserResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_USER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUserResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListUser200ApplicationJSONListUserResponse])
                res.responses[r.status_code][content_type] = operations.ListUserResponses(list_user_response=out)

        return res

    
    def list_user_conversation(self, request: operations.ListUserConversationRequest) -> operations.ListUserConversationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_USER_CONVERSATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Users/{UserSid}/Conversations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUserConversationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListUserConversation200ApplicationJSONListUserConversationResponse])
                res.responses[r.status_code][content_type] = operations.ListUserConversationResponses(list_user_conversation_response=out)

        return res

    
    def update_configuration(self, request: operations.UpdateConfigurationRequest) -> operations.UpdateConfigurationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_CONFIGURATION_SERVERS[0]
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

        res = operations.UpdateConfigurationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1Configuration])
                res.responses[r.status_code][content_type] = operations.UpdateConfigurationResponses(conversations_v1_configuration=out)

        return res

    
    def update_configuration_address(self, request: operations.UpdateConfigurationAddressRequest) -> operations.UpdateConfigurationAddressResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_CONFIGURATION_ADDRESS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Configuration/Addresses/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateConfigurationAddressResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConfigurationAddress])
                res.responses[r.status_code][content_type] = operations.UpdateConfigurationAddressResponses(conversations_v1_configuration_address=out)

        return res

    
    def update_configuration_webhook(self, request: operations.UpdateConfigurationWebhookRequest) -> operations.UpdateConfigurationWebhookResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_CONFIGURATION_WEBHOOK_SERVERS[0]
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

        res = operations.UpdateConfigurationWebhookResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConfigurationConfigurationWebhook])
                res.responses[r.status_code][content_type] = operations.UpdateConfigurationWebhookResponses(conversations_v1_configuration_configuration_webhook=out)

        return res

    
    def update_conversation(self, request: operations.UpdateConversationRequest) -> operations.UpdateConversationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_CONVERSATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Conversations/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateConversationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1Conversation])
                res.responses[r.status_code][content_type] = operations.UpdateConversationResponses(conversations_v1_conversation=out)

        return res

    
    def update_conversation_message(self, request: operations.UpdateConversationMessageRequest) -> operations.UpdateConversationMessageResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_CONVERSATION_MESSAGE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Messages/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateConversationMessageResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConversationConversationMessage])
                res.responses[r.status_code][content_type] = operations.UpdateConversationMessageResponses(conversations_v1_conversation_conversation_message=out)

        return res

    
    def update_conversation_participant(self, request: operations.UpdateConversationParticipantRequest) -> operations.UpdateConversationParticipantResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_CONVERSATION_PARTICIPANT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Participants/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateConversationParticipantResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConversationConversationParticipant])
                res.responses[r.status_code][content_type] = operations.UpdateConversationParticipantResponses(conversations_v1_conversation_conversation_participant=out)

        return res

    
    def update_conversation_scoped_webhook(self, request: operations.UpdateConversationScopedWebhookRequest) -> operations.UpdateConversationScopedWebhookResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_CONVERSATION_SCOPED_WEBHOOK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Conversations/{ConversationSid}/Webhooks/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateConversationScopedWebhookResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ConversationConversationScopedWebhook])
                res.responses[r.status_code][content_type] = operations.UpdateConversationScopedWebhookResponses(conversations_v1_conversation_conversation_scoped_webhook=out)

        return res

    
    def update_credential(self, request: operations.UpdateCredentialRequest) -> operations.UpdateCredentialResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_CREDENTIAL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Credentials/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateCredentialResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1Credential])
                res.responses[r.status_code][content_type] = operations.UpdateCredentialResponses(conversations_v1_credential=out)

        return res

    
    def update_role(self, request: operations.UpdateRoleRequest) -> operations.UpdateRoleResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_ROLE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Roles/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateRoleResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1Role])
                res.responses[r.status_code][content_type] = operations.UpdateRoleResponses(conversations_v1_role=out)

        return res

    
    def update_service_configuration(self, request: operations.UpdateServiceConfigurationRequest) -> operations.UpdateServiceConfigurationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_SERVICE_CONFIGURATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Configuration", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateServiceConfigurationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConfiguration])
                res.responses[r.status_code][content_type] = operations.UpdateServiceConfigurationResponses(conversations_v1_service_service_configuration=out)

        return res

    
    def update_service_conversation(self, request: operations.UpdateServiceConversationRequest) -> operations.UpdateServiceConversationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_SERVICE_CONVERSATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateServiceConversationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConversation])
                res.responses[r.status_code][content_type] = operations.UpdateServiceConversationResponses(conversations_v1_service_service_conversation=out)

        return res

    
    def update_service_conversation_message(self, request: operations.UpdateServiceConversationMessageRequest) -> operations.UpdateServiceConversationMessageResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_SERVICE_CONVERSATION_MESSAGE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateServiceConversationMessageResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationMessage])
                res.responses[r.status_code][content_type] = operations.UpdateServiceConversationMessageResponses(conversations_v1_service_service_conversation_service_conversation_message=out)

        return res

    
    def update_service_conversation_participant(self, request: operations.UpdateServiceConversationParticipantRequest) -> operations.UpdateServiceConversationParticipantResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_SERVICE_CONVERSATION_PARTICIPANT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateServiceConversationParticipantResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant])
                res.responses[r.status_code][content_type] = operations.UpdateServiceConversationParticipantResponses(conversations_v1_service_service_conversation_service_conversation_participant=out)

        return res

    
    def update_service_conversation_scoped_webhook(self, request: operations.UpdateServiceConversationScopedWebhookRequest) -> operations.UpdateServiceConversationScopedWebhookResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_SERVICE_CONVERSATION_SCOPED_WEBHOOK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateServiceConversationScopedWebhookResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook])
                res.responses[r.status_code][content_type] = operations.UpdateServiceConversationScopedWebhookResponses(conversations_v1_service_service_conversation_service_conversation_scoped_webhook=out)

        return res

    
    def update_service_notification(self, request: operations.UpdateServiceNotificationRequest) -> operations.UpdateServiceNotificationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_SERVICE_NOTIFICATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Configuration/Notifications", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateServiceNotificationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConfigurationServiceNotification])
                res.responses[r.status_code][content_type] = operations.UpdateServiceNotificationResponses(conversations_v1_service_service_configuration_service_notification=out)

        return res

    
    def update_service_role(self, request: operations.UpdateServiceRoleRequest) -> operations.UpdateServiceRoleResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_SERVICE_ROLE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Roles/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateServiceRoleResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceRole])
                res.responses[r.status_code][content_type] = operations.UpdateServiceRoleResponses(conversations_v1_service_service_role=out)

        return res

    
    def update_service_user(self, request: operations.UpdateServiceUserRequest) -> operations.UpdateServiceUserResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_SERVICE_USER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Users/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateServiceUserResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceUser])
                res.responses[r.status_code][content_type] = operations.UpdateServiceUserResponses(conversations_v1_service_service_user=out)

        return res

    
    def update_service_user_conversation(self, request: operations.UpdateServiceUserConversationRequest) -> operations.UpdateServiceUserConversationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_SERVICE_USER_CONVERSATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateServiceUserConversationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceUserServiceUserConversation])
                res.responses[r.status_code][content_type] = operations.UpdateServiceUserConversationResponses(conversations_v1_service_service_user_service_user_conversation=out)

        return res

    
    def update_service_webhook_configuration(self, request: operations.UpdateServiceWebhookConfigurationRequest) -> operations.UpdateServiceWebhookConfigurationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_SERVICE_WEBHOOK_CONFIGURATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ChatServiceSid}/Configuration/Webhooks", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateServiceWebhookConfigurationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration])
                res.responses[r.status_code][content_type] = operations.UpdateServiceWebhookConfigurationResponses(conversations_v1_service_service_configuration_service_webhook_configuration=out)

        return res

    
    def update_user(self, request: operations.UpdateUserRequest) -> operations.UpdateUserResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_USER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Users/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUserResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1User])
                res.responses[r.status_code][content_type] = operations.UpdateUserResponses(conversations_v1_user=out)

        return res

    
    def update_user_conversation(self, request: operations.UpdateUserConversationRequest) -> operations.UpdateUserConversationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_USER_CONVERSATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Users/{UserSid}/Conversations/{ConversationSid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUserConversationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsV1UserUserConversation])
                res.responses[r.status_code][content_type] = operations.UpdateUserConversationResponses(conversations_v1_user_user_conversation=out)

        return res

    
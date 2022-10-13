import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://ip-messaging.twilio.com",
]

class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url


    

    
    def create_channel(self, request: operations.CreateChannelRequest) -> operations.CreateChannelResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_CHANNEL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Channels", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateChannelResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPMessagingV1ServiceChannel])
                res.responses[r.status_code][content_type] = operations.CreateChannelResponses(ip_messaging_v1_service_channel=out)

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
                out = utils.unmarshal_json(r.text, Optional[shared.IPMessagingV1Credential])
                res.responses[r.status_code][content_type] = operations.CreateCredentialResponses(ip_messaging_v1_credential=out)

        return res

    
    def create_invite(self, request: operations.CreateInviteRequest) -> operations.CreateInviteResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_INVITE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Invites", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateInviteResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPMessagingV1ServiceChannelInvite])
                res.responses[r.status_code][content_type] = operations.CreateInviteResponses(ip_messaging_v1_service_channel_invite=out)

        return res

    
    def create_member(self, request: operations.CreateMemberRequest) -> operations.CreateMemberResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_MEMBER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Members", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateMemberResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPMessagingV1ServiceChannelMember])
                res.responses[r.status_code][content_type] = operations.CreateMemberResponses(ip_messaging_v1_service_channel_member=out)

        return res

    
    def create_message(self, request: operations.CreateMessageRequest) -> operations.CreateMessageResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_MESSAGE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Messages", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateMessageResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPMessagingV1ServiceChannelMessage])
                res.responses[r.status_code][content_type] = operations.CreateMessageResponses(ip_messaging_v1_service_channel_message=out)

        return res

    
    def create_role(self, request: operations.CreateRoleRequest) -> operations.CreateRoleResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_ROLE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Roles", request.path_params)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.IPMessagingV1ServiceRole])
                res.responses[r.status_code][content_type] = operations.CreateRoleResponses(ip_messaging_v1_service_role=out)

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
                out = utils.unmarshal_json(r.text, Optional[shared.IPMessagingV1Service])
                res.responses[r.status_code][content_type] = operations.CreateServiceResponses(ip_messaging_v1_service=out)

        return res

    
    def create_user(self, request: operations.CreateUserRequest) -> operations.CreateUserResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_USER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Users", request.path_params)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.IPMessagingV1ServiceUser])
                res.responses[r.status_code][content_type] = operations.CreateUserResponses(ip_messaging_v1_service_user=out)

        return res

    
    def delete_channel(self, request: operations.DeleteChannelRequest) -> operations.DeleteChannelResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_CHANNEL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Channels/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteChannelResponse(status_code=r.status_code, content_type=content_type)

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

    
    def delete_invite(self, request: operations.DeleteInviteRequest) -> operations.DeleteInviteResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_INVITE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Invites/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteInviteResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_member(self, request: operations.DeleteMemberRequest) -> operations.DeleteMemberResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_MEMBER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Members/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMemberResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_message(self, request: operations.DeleteMessageRequest) -> operations.DeleteMessageResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_MESSAGE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Messages/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMessageResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_role(self, request: operations.DeleteRoleRequest) -> operations.DeleteRoleResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_ROLE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Roles/{Sid}", request.path_params)
        
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

    
    def delete_user(self, request: operations.DeleteUserRequest) -> operations.DeleteUserResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_USER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Users/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def fetch_channel(self, request: operations.FetchChannelRequest) -> operations.FetchChannelResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_CHANNEL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Channels/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchChannelResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPMessagingV1ServiceChannel])
                res.responses[r.status_code][content_type] = operations.FetchChannelResponses(ip_messaging_v1_service_channel=out)

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
                out = utils.unmarshal_json(r.text, Optional[shared.IPMessagingV1Credential])
                res.responses[r.status_code][content_type] = operations.FetchCredentialResponses(ip_messaging_v1_credential=out)

        return res

    
    def fetch_invite(self, request: operations.FetchInviteRequest) -> operations.FetchInviteResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_INVITE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Invites/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchInviteResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPMessagingV1ServiceChannelInvite])
                res.responses[r.status_code][content_type] = operations.FetchInviteResponses(ip_messaging_v1_service_channel_invite=out)

        return res

    
    def fetch_member(self, request: operations.FetchMemberRequest) -> operations.FetchMemberResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_MEMBER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Members/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchMemberResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPMessagingV1ServiceChannelMember])
                res.responses[r.status_code][content_type] = operations.FetchMemberResponses(ip_messaging_v1_service_channel_member=out)

        return res

    
    def fetch_message(self, request: operations.FetchMessageRequest) -> operations.FetchMessageResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_MESSAGE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Messages/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchMessageResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPMessagingV1ServiceChannelMessage])
                res.responses[r.status_code][content_type] = operations.FetchMessageResponses(ip_messaging_v1_service_channel_message=out)

        return res

    
    def fetch_role(self, request: operations.FetchRoleRequest) -> operations.FetchRoleResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_ROLE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Roles/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRoleResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPMessagingV1ServiceRole])
                res.responses[r.status_code][content_type] = operations.FetchRoleResponses(ip_messaging_v1_service_role=out)

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
                out = utils.unmarshal_json(r.text, Optional[shared.IPMessagingV1Service])
                res.responses[r.status_code][content_type] = operations.FetchServiceResponses(ip_messaging_v1_service=out)

        return res

    
    def fetch_user(self, request: operations.FetchUserRequest) -> operations.FetchUserResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_USER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Users/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchUserResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPMessagingV1ServiceUser])
                res.responses[r.status_code][content_type] = operations.FetchUserResponses(ip_messaging_v1_service_user=out)

        return res

    
    def list_channel(self, request: operations.ListChannelRequest) -> operations.ListChannelResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_CHANNEL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Channels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListChannelResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListChannel200ApplicationJSONListChannelResponse])
                res.responses[r.status_code][content_type] = operations.ListChannelResponses(list_channel_response=out)

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

    
    def list_invite(self, request: operations.ListInviteRequest) -> operations.ListInviteResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_INVITE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Invites", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListInviteResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListInvite200ApplicationJSONListInviteResponse])
                res.responses[r.status_code][content_type] = operations.ListInviteResponses(list_invite_response=out)

        return res

    
    def list_member(self, request: operations.ListMemberRequest) -> operations.ListMemberResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_MEMBER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Members", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListMemberResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListMember200ApplicationJSONListMemberResponse])
                res.responses[r.status_code][content_type] = operations.ListMemberResponses(list_member_response=out)

        return res

    
    def list_message(self, request: operations.ListMessageRequest) -> operations.ListMessageResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_MESSAGE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Messages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListMessageResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListMessage200ApplicationJSONListMessageResponse])
                res.responses[r.status_code][content_type] = operations.ListMessageResponses(list_message_response=out)

        return res

    
    def list_role(self, request: operations.ListRoleRequest) -> operations.ListRoleResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_ROLE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Roles", request.path_params)
        
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

    
    def list_user(self, request: operations.ListUserRequest) -> operations.ListUserResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_USER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Users", request.path_params)
        
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

    
    def list_user_channel(self, request: operations.ListUserChannelRequest) -> operations.ListUserChannelResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_USER_CHANNEL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Users/{UserSid}/Channels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUserChannelResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListUserChannel200ApplicationJSONListUserChannelResponse])
                res.responses[r.status_code][content_type] = operations.ListUserChannelResponses(list_user_channel_response=out)

        return res

    
    def update_channel(self, request: operations.UpdateChannelRequest) -> operations.UpdateChannelResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_CHANNEL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Channels/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateChannelResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPMessagingV1ServiceChannel])
                res.responses[r.status_code][content_type] = operations.UpdateChannelResponses(ip_messaging_v1_service_channel=out)

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
                out = utils.unmarshal_json(r.text, Optional[shared.IPMessagingV1Credential])
                res.responses[r.status_code][content_type] = operations.UpdateCredentialResponses(ip_messaging_v1_credential=out)

        return res

    
    def update_member(self, request: operations.UpdateMemberRequest) -> operations.UpdateMemberResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_MEMBER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Members/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateMemberResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPMessagingV1ServiceChannelMember])
                res.responses[r.status_code][content_type] = operations.UpdateMemberResponses(ip_messaging_v1_service_channel_member=out)

        return res

    
    def update_message(self, request: operations.UpdateMessageRequest) -> operations.UpdateMessageResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_MESSAGE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Messages/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateMessageResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPMessagingV1ServiceChannelMessage])
                res.responses[r.status_code][content_type] = operations.UpdateMessageResponses(ip_messaging_v1_service_channel_message=out)

        return res

    
    def update_role(self, request: operations.UpdateRoleRequest) -> operations.UpdateRoleResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_ROLE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Roles/{Sid}", request.path_params)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.IPMessagingV1ServiceRole])
                res.responses[r.status_code][content_type] = operations.UpdateRoleResponses(ip_messaging_v1_service_role=out)

        return res

    
    def update_service(self, request: operations.UpdateServiceRequest) -> operations.UpdateServiceResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_SERVICE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateServiceResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPMessagingV1Service])
                res.responses[r.status_code][content_type] = operations.UpdateServiceResponses(ip_messaging_v1_service=out)

        return res

    
    def update_user(self, request: operations.UpdateUserRequest) -> operations.UpdateUserResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_USER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Users/{Sid}", request.path_params)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.IPMessagingV1ServiceUser])
                res.responses[r.status_code][content_type] = operations.UpdateUserResponses(ip_messaging_v1_service_user=out)

        return res

    
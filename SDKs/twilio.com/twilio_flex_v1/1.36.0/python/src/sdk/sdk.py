import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://flex-api.twilio.com",
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
        url = base_url.removesuffix("/") + "/v1/Channels"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateChannelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlexV1Channel])
                res.flex_v1_channel = out

        return res

    
    
    def create_flex_flow(self, request: operations.CreateFlexFlowRequest) -> operations.CreateFlexFlowResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_FLEX_FLOW_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/FlexFlows"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateFlexFlowResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlexV1FlexFlow])
                res.flex_v1_flex_flow = out

        return res

    
    
    def create_interaction(self, request: operations.CreateInteractionRequest) -> operations.CreateInteractionResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_INTERACTION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/Interactions"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateInteractionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlexV1Interaction])
                res.flex_v1_interaction = out

        return res

    
    
    def create_interaction_channel_invite(self, request: operations.CreateInteractionChannelInviteRequest) -> operations.CreateInteractionChannelInviteResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_INTERACTION_CHANNEL_INVITE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Invites", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateInteractionChannelInviteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlexV1InteractionInteractionChannelInteractionChannelInvite])
                res.flex_v1_interaction_interaction_channel_interaction_channel_invite = out

        return res

    
    
    def create_interaction_channel_participant(self, request: operations.CreateInteractionChannelParticipantRequest) -> operations.CreateInteractionChannelParticipantResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_INTERACTION_CHANNEL_PARTICIPANT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Participants", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateInteractionChannelParticipantResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant])
                res.flex_v1_interaction_interaction_channel_interaction_channel_participant = out

        return res

    
    
    def create_web_channel(self, request: operations.CreateWebChannelRequest) -> operations.CreateWebChannelResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_WEB_CHANNEL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/WebChannels"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateWebChannelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlexV1WebChannel])
                res.flex_v1_web_channel = out

        return res

    
    
    def delete_channel(self, request: operations.DeleteChannelRequest) -> operations.DeleteChannelResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_CHANNEL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Channels/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteChannelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_flex_flow(self, request: operations.DeleteFlexFlowRequest) -> operations.DeleteFlexFlowResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_FLEX_FLOW_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/FlexFlows/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFlexFlowResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_web_channel(self, request: operations.DeleteWebChannelRequest) -> operations.DeleteWebChannelResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_WEB_CHANNEL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/WebChannels/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWebChannelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def fetch_channel(self, request: operations.FetchChannelRequest) -> operations.FetchChannelResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_CHANNEL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Channels/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchChannelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlexV1Channel])
                res.flex_v1_channel = out

        return res

    
    
    def fetch_configuration(self, request: operations.FetchConfigurationRequest) -> operations.FetchConfigurationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_CONFIGURATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/Configuration"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchConfigurationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlexV1Configuration])
                res.flex_v1_configuration = out

        return res

    
    
    def fetch_flex_flow(self, request: operations.FetchFlexFlowRequest) -> operations.FetchFlexFlowResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_FLEX_FLOW_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/FlexFlows/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchFlexFlowResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlexV1FlexFlow])
                res.flex_v1_flex_flow = out

        return res

    
    
    def fetch_interaction(self, request: operations.FetchInteractionRequest) -> operations.FetchInteractionResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_INTERACTION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Interactions/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchInteractionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlexV1Interaction])
                res.flex_v1_interaction = out

        return res

    
    
    def fetch_interaction_channel(self, request: operations.FetchInteractionChannelRequest) -> operations.FetchInteractionChannelResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_INTERACTION_CHANNEL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Interactions/{InteractionSid}/Channels/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchInteractionChannelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlexV1InteractionInteractionChannel])
                res.flex_v1_interaction_interaction_channel = out

        return res

    
    
    def fetch_web_channel(self, request: operations.FetchWebChannelRequest) -> operations.FetchWebChannelResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_WEB_CHANNEL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/WebChannels/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchWebChannelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlexV1WebChannel])
                res.flex_v1_web_channel = out

        return res

    
    
    def list_channel(self, request: operations.ListChannelRequest) -> operations.ListChannelResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_CHANNEL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/Channels"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListChannelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListChannelListChannelResponse])
                res.list_channel_response = out

        return res

    
    
    def list_flex_flow(self, request: operations.ListFlexFlowRequest) -> operations.ListFlexFlowResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_FLEX_FLOW_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/FlexFlows"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListFlexFlowResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListFlexFlowListFlexFlowResponse])
                res.list_flex_flow_response = out

        return res

    
    
    def list_interaction_channel(self, request: operations.ListInteractionChannelRequest) -> operations.ListInteractionChannelResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_INTERACTION_CHANNEL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Interactions/{InteractionSid}/Channels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListInteractionChannelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListInteractionChannelListInteractionChannelResponse])
                res.list_interaction_channel_response = out

        return res

    
    
    def list_interaction_channel_invite(self, request: operations.ListInteractionChannelInviteRequest) -> operations.ListInteractionChannelInviteResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_INTERACTION_CHANNEL_INVITE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Invites", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListInteractionChannelInviteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListInteractionChannelInviteListInteractionChannelInviteResponse])
                res.list_interaction_channel_invite_response = out

        return res

    
    
    def list_interaction_channel_participant(self, request: operations.ListInteractionChannelParticipantRequest) -> operations.ListInteractionChannelParticipantResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_INTERACTION_CHANNEL_PARTICIPANT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Participants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListInteractionChannelParticipantResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListInteractionChannelParticipantListInteractionChannelParticipantResponse])
                res.list_interaction_channel_participant_response = out

        return res

    
    
    def list_web_channel(self, request: operations.ListWebChannelRequest) -> operations.ListWebChannelResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_WEB_CHANNEL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/WebChannels"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListWebChannelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListWebChannelListWebChannelResponse])
                res.list_web_channel_response = out

        return res

    
    
    def update_flex_flow(self, request: operations.UpdateFlexFlowRequest) -> operations.UpdateFlexFlowResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_FLEX_FLOW_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/FlexFlows/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateFlexFlowResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlexV1FlexFlow])
                res.flex_v1_flex_flow = out

        return res

    
    
    def update_interaction_channel(self, request: operations.UpdateInteractionChannelRequest) -> operations.UpdateInteractionChannelResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_INTERACTION_CHANNEL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Interactions/{InteractionSid}/Channels/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateInteractionChannelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlexV1InteractionInteractionChannel])
                res.flex_v1_interaction_interaction_channel = out

        return res

    
    
    def update_interaction_channel_participant(self, request: operations.UpdateInteractionChannelParticipantRequest) -> operations.UpdateInteractionChannelParticipantResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_INTERACTION_CHANNEL_PARTICIPANT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Participants/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateInteractionChannelParticipantResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant])
                res.flex_v1_interaction_interaction_channel_interaction_channel_participant = out

        return res

    
    
    def update_web_channel(self, request: operations.UpdateWebChannelRequest) -> operations.UpdateWebChannelResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_WEB_CHANNEL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/WebChannels/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateWebChannelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlexV1WebChannel])
                res.flex_v1_web_channel = out

        return res

    
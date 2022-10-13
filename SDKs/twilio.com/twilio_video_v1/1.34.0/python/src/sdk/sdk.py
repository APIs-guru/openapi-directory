import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://video.twilio.com",
]

class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url


    

    
    def create_composition(self, request: operations.CreateCompositionRequest) -> operations.CreateCompositionResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_COMPOSITION_SERVERS[0]
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

        res = operations.CreateCompositionResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1Composition])
                res.responses[r.status_code][content_type] = operations.CreateCompositionResponses(video_v1_composition=out)

        return res

    
    def create_composition_hook(self, request: operations.CreateCompositionHookRequest) -> operations.CreateCompositionHookResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_COMPOSITION_HOOK_SERVERS[0]
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

        res = operations.CreateCompositionHookResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1CompositionHook])
                res.responses[r.status_code][content_type] = operations.CreateCompositionHookResponses(video_v1_composition_hook=out)

        return res

    
    def create_composition_settings(self, request: operations.CreateCompositionSettingsRequest) -> operations.CreateCompositionSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_COMPOSITION_SETTINGS_SERVERS[0]
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

        res = operations.CreateCompositionSettingsResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1CompositionSettings])
                res.responses[r.status_code][content_type] = operations.CreateCompositionSettingsResponses(video_v1_composition_settings=out)

        return res

    
    def create_recording_settings(self, request: operations.CreateRecordingSettingsRequest) -> operations.CreateRecordingSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_RECORDING_SETTINGS_SERVERS[0]
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

        res = operations.CreateRecordingSettingsResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1RecordingSettings])
                res.responses[r.status_code][content_type] = operations.CreateRecordingSettingsResponses(video_v1_recording_settings=out)

        return res

    
    def create_room(self, request: operations.CreateRoomRequest) -> operations.CreateRoomResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_ROOM_SERVERS[0]
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

        res = operations.CreateRoomResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1Room])
                res.responses[r.status_code][content_type] = operations.CreateRoomResponses(video_v1_room=out)

        return res

    
    def delete_composition(self, request: operations.DeleteCompositionRequest) -> operations.DeleteCompositionResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_COMPOSITION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Compositions/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCompositionResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_composition_hook(self, request: operations.DeleteCompositionHookRequest) -> operations.DeleteCompositionHookResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_COMPOSITION_HOOK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/CompositionHooks/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCompositionHookResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_recording(self, request: operations.DeleteRecordingRequest) -> operations.DeleteRecordingResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_RECORDING_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Recordings/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRecordingResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_room_recording(self, request: operations.DeleteRoomRecordingRequest) -> operations.DeleteRoomRecordingResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_ROOM_RECORDING_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Rooms/{RoomSid}/Recordings/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRoomRecordingResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def fetch_composition(self, request: operations.FetchCompositionRequest) -> operations.FetchCompositionResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_COMPOSITION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Compositions/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCompositionResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1Composition])
                res.responses[r.status_code][content_type] = operations.FetchCompositionResponses(video_v1_composition=out)

        return res

    
    def fetch_composition_hook(self, request: operations.FetchCompositionHookRequest) -> operations.FetchCompositionHookResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_COMPOSITION_HOOK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/CompositionHooks/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCompositionHookResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1CompositionHook])
                res.responses[r.status_code][content_type] = operations.FetchCompositionHookResponses(video_v1_composition_hook=out)

        return res

    
    def fetch_composition_settings(self, request: operations.FetchCompositionSettingsRequest) -> operations.FetchCompositionSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_COMPOSITION_SETTINGS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCompositionSettingsResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1CompositionSettings])
                res.responses[r.status_code][content_type] = operations.FetchCompositionSettingsResponses(video_v1_composition_settings=out)

        return res

    
    def fetch_recording(self, request: operations.FetchRecordingRequest) -> operations.FetchRecordingResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_RECORDING_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Recordings/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRecordingResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1Recording])
                res.responses[r.status_code][content_type] = operations.FetchRecordingResponses(video_v1_recording=out)

        return res

    
    def fetch_recording_settings(self, request: operations.FetchRecordingSettingsRequest) -> operations.FetchRecordingSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_RECORDING_SETTINGS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRecordingSettingsResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1RecordingSettings])
                res.responses[r.status_code][content_type] = operations.FetchRecordingSettingsResponses(video_v1_recording_settings=out)

        return res

    
    def fetch_room(self, request: operations.FetchRoomRequest) -> operations.FetchRoomResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_ROOM_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Rooms/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRoomResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1Room])
                res.responses[r.status_code][content_type] = operations.FetchRoomResponses(video_v1_room=out)

        return res

    
    def fetch_room_participant(self, request: operations.FetchRoomParticipantRequest) -> operations.FetchRoomParticipantResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_ROOM_PARTICIPANT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Rooms/{RoomSid}/Participants/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRoomParticipantResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1RoomRoomParticipant])
                res.responses[r.status_code][content_type] = operations.FetchRoomParticipantResponses(video_v1_room_room_participant=out)

        return res

    
    def fetch_room_participant_published_track(self, request: operations.FetchRoomParticipantPublishedTrackRequest) -> operations.FetchRoomParticipantPublishedTrackResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_ROOM_PARTICIPANT_PUBLISHED_TRACK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/PublishedTracks/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRoomParticipantPublishedTrackResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1RoomRoomParticipantRoomParticipantPublishedTrack])
                res.responses[r.status_code][content_type] = operations.FetchRoomParticipantPublishedTrackResponses(video_v1_room_room_participant_room_participant_published_track=out)

        return res

    
    def fetch_room_participant_subscribe_rule(self, request: operations.FetchRoomParticipantSubscribeRuleRequest) -> operations.FetchRoomParticipantSubscribeRuleResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_ROOM_PARTICIPANT_SUBSCRIBE_RULE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribeRules", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRoomParticipantSubscribeRuleResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule])
                res.responses[r.status_code][content_type] = operations.FetchRoomParticipantSubscribeRuleResponses(video_v1_room_room_participant_room_participant_subscribe_rule=out)

        return res

    
    def fetch_room_participant_subscribed_track(self, request: operations.FetchRoomParticipantSubscribedTrackRequest) -> operations.FetchRoomParticipantSubscribedTrackResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_ROOM_PARTICIPANT_SUBSCRIBED_TRACK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribedTracks/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRoomParticipantSubscribedTrackResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack])
                res.responses[r.status_code][content_type] = operations.FetchRoomParticipantSubscribedTrackResponses(video_v1_room_room_participant_room_participant_subscribed_track=out)

        return res

    
    def fetch_room_recording(self, request: operations.FetchRoomRecordingRequest) -> operations.FetchRoomRecordingResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_ROOM_RECORDING_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Rooms/{RoomSid}/Recordings/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRoomRecordingResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1RoomRoomRecording])
                res.responses[r.status_code][content_type] = operations.FetchRoomRecordingResponses(video_v1_room_room_recording=out)

        return res

    
    def fetch_room_recording_rule(self, request: operations.FetchRoomRecordingRuleRequest) -> operations.FetchRoomRecordingRuleResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_ROOM_RECORDING_RULE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Rooms/{RoomSid}/RecordingRules", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRoomRecordingRuleResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1RoomRoomRecordingRule])
                res.responses[r.status_code][content_type] = operations.FetchRoomRecordingRuleResponses(video_v1_room_room_recording_rule=out)

        return res

    
    def list_composition(self, request: operations.ListCompositionRequest) -> operations.ListCompositionResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_COMPOSITION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCompositionResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListComposition200ApplicationJSONListCompositionResponse])
                res.responses[r.status_code][content_type] = operations.ListCompositionResponses(list_composition_response=out)

        return res

    
    def list_composition_hook(self, request: operations.ListCompositionHookRequest) -> operations.ListCompositionHookResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_COMPOSITION_HOOK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCompositionHookResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCompositionHook200ApplicationJSONListCompositionHookResponse])
                res.responses[r.status_code][content_type] = operations.ListCompositionHookResponses(list_composition_hook_response=out)

        return res

    
    def list_recording(self, request: operations.ListRecordingRequest) -> operations.ListRecordingResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_RECORDING_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListRecordingResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListRecording200ApplicationJSONListRecordingResponse])
                res.responses[r.status_code][content_type] = operations.ListRecordingResponses(list_recording_response=out)

        return res

    
    def list_room(self, request: operations.ListRoomRequest) -> operations.ListRoomResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_ROOM_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListRoomResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListRoom200ApplicationJSONListRoomResponse])
                res.responses[r.status_code][content_type] = operations.ListRoomResponses(list_room_response=out)

        return res

    
    def list_room_participant(self, request: operations.ListRoomParticipantRequest) -> operations.ListRoomParticipantResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_ROOM_PARTICIPANT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Rooms/{RoomSid}/Participants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListRoomParticipantResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListRoomParticipant200ApplicationJSONListRoomParticipantResponse])
                res.responses[r.status_code][content_type] = operations.ListRoomParticipantResponses(list_room_participant_response=out)

        return res

    
    def list_room_participant_published_track(self, request: operations.ListRoomParticipantPublishedTrackRequest) -> operations.ListRoomParticipantPublishedTrackResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_ROOM_PARTICIPANT_PUBLISHED_TRACK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/PublishedTracks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListRoomParticipantPublishedTrackResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListRoomParticipantPublishedTrack200ApplicationJSONListRoomParticipantPublishedTrackResponse])
                res.responses[r.status_code][content_type] = operations.ListRoomParticipantPublishedTrackResponses(list_room_participant_published_track_response=out)

        return res

    
    def list_room_participant_subscribed_track(self, request: operations.ListRoomParticipantSubscribedTrackRequest) -> operations.ListRoomParticipantSubscribedTrackResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_ROOM_PARTICIPANT_SUBSCRIBED_TRACK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribedTracks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListRoomParticipantSubscribedTrackResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListRoomParticipantSubscribedTrack200ApplicationJSONListRoomParticipantSubscribedTrackResponse])
                res.responses[r.status_code][content_type] = operations.ListRoomParticipantSubscribedTrackResponses(list_room_participant_subscribed_track_response=out)

        return res

    
    def list_room_recording(self, request: operations.ListRoomRecordingRequest) -> operations.ListRoomRecordingResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_ROOM_RECORDING_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Rooms/{RoomSid}/Recordings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListRoomRecordingResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListRoomRecording200ApplicationJSONListRoomRecordingResponse])
                res.responses[r.status_code][content_type] = operations.ListRoomRecordingResponses(list_room_recording_response=out)

        return res

    
    def update_composition_hook(self, request: operations.UpdateCompositionHookRequest) -> operations.UpdateCompositionHookResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_COMPOSITION_HOOK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/CompositionHooks/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateCompositionHookResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1CompositionHook])
                res.responses[r.status_code][content_type] = operations.UpdateCompositionHookResponses(video_v1_composition_hook=out)

        return res

    
    def update_room(self, request: operations.UpdateRoomRequest) -> operations.UpdateRoomResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_ROOM_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Rooms/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateRoomResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1Room])
                res.responses[r.status_code][content_type] = operations.UpdateRoomResponses(video_v1_room=out)

        return res

    
    def update_room_participant(self, request: operations.UpdateRoomParticipantRequest) -> operations.UpdateRoomParticipantResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_ROOM_PARTICIPANT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Rooms/{RoomSid}/Participants/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateRoomParticipantResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1RoomRoomParticipant])
                res.responses[r.status_code][content_type] = operations.UpdateRoomParticipantResponses(video_v1_room_room_participant=out)

        return res

    
    def update_room_participant_subscribe_rule(self, request: operations.UpdateRoomParticipantSubscribeRuleRequest) -> operations.UpdateRoomParticipantSubscribeRuleResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_ROOM_PARTICIPANT_SUBSCRIBE_RULE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribeRules", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateRoomParticipantSubscribeRuleResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule])
                res.responses[r.status_code][content_type] = operations.UpdateRoomParticipantSubscribeRuleResponses(video_v1_room_room_participant_room_participant_subscribe_rule=out)

        return res

    
    def update_room_recording_rule(self, request: operations.UpdateRoomRecordingRuleRequest) -> operations.UpdateRoomRecordingRuleResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_ROOM_RECORDING_RULE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Rooms/{RoomSid}/RecordingRules", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateRoomRecordingRuleResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1RoomRoomRecordingRule])
                res.responses[r.status_code][content_type] = operations.UpdateRoomRecordingRuleResponses(video_v1_room_room_recording_rule=out)

        return res

    
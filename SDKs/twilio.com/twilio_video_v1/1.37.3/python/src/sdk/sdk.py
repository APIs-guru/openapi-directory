

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://video.twilio.com",
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
        
    
    
    
    def create_composition(self, request: operations.CreateCompositionRequest) -> operations.CreateCompositionResponse:
        base_url = operations.CREATE_COMPOSITION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Compositions"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCompositionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1Composition])
                res.video_v1_composition = out

        return res

    
    def create_composition_hook(self, request: operations.CreateCompositionHookRequest) -> operations.CreateCompositionHookResponse:
        base_url = operations.CREATE_COMPOSITION_HOOK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/CompositionHooks"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCompositionHookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1CompositionHook])
                res.video_v1_composition_hook = out

        return res

    
    def create_composition_settings(self, request: operations.CreateCompositionSettingsRequest) -> operations.CreateCompositionSettingsResponse:
        base_url = operations.CREATE_COMPOSITION_SETTINGS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/CompositionSettings/Default"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCompositionSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1CompositionSettings])
                res.video_v1_composition_settings = out

        return res

    
    def create_recording_settings(self, request: operations.CreateRecordingSettingsRequest) -> operations.CreateRecordingSettingsResponse:
        base_url = operations.CREATE_RECORDING_SETTINGS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/RecordingSettings/Default"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateRecordingSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1RecordingSettings])
                res.video_v1_recording_settings = out

        return res

    
    def create_room(self, request: operations.CreateRoomRequest) -> operations.CreateRoomResponse:
        base_url = operations.CREATE_ROOM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Rooms"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateRoomResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1Room])
                res.video_v1_room = out

        return res

    
    def delete_composition(self, request: operations.DeleteCompositionRequest) -> operations.DeleteCompositionResponse:
        r"""Delete a Recording Composition resource identified by a Composition SID.
        """
        
        base_url = operations.DELETE_COMPOSITION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Compositions/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCompositionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_composition_hook(self, request: operations.DeleteCompositionHookRequest) -> operations.DeleteCompositionHookResponse:
        r"""Delete a Recording CompositionHook resource identified by a `CompositionHook SID`.
        """
        
        base_url = operations.DELETE_COMPOSITION_HOOK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/CompositionHooks/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCompositionHookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_recording(self, request: operations.DeleteRecordingRequest) -> operations.DeleteRecordingResponse:
        r"""Delete a Recording resource identified by a Recording SID.
        """
        
        base_url = operations.DELETE_RECORDING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Recordings/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRecordingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_room_recording(self, request: operations.DeleteRoomRecordingRequest) -> operations.DeleteRoomRecordingResponse:
        base_url = operations.DELETE_ROOM_RECORDING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Rooms/{RoomSid}/Recordings/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRoomRecordingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def fetch_composition(self, request: operations.FetchCompositionRequest) -> operations.FetchCompositionResponse:
        r"""Returns a single Composition resource identified by a Composition SID.
        """
        
        base_url = operations.FETCH_COMPOSITION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Compositions/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCompositionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1Composition])
                res.video_v1_composition = out

        return res

    
    def fetch_composition_hook(self, request: operations.FetchCompositionHookRequest) -> operations.FetchCompositionHookResponse:
        r"""Returns a single CompositionHook resource identified by a CompositionHook SID.
        """
        
        base_url = operations.FETCH_COMPOSITION_HOOK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/CompositionHooks/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCompositionHookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1CompositionHook])
                res.video_v1_composition_hook = out

        return res

    
    def fetch_composition_settings(self, request: operations.FetchCompositionSettingsRequest) -> operations.FetchCompositionSettingsResponse:
        base_url = operations.FETCH_COMPOSITION_SETTINGS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/CompositionSettings/Default"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCompositionSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1CompositionSettings])
                res.video_v1_composition_settings = out

        return res

    
    def fetch_recording(self, request: operations.FetchRecordingRequest) -> operations.FetchRecordingResponse:
        r"""Returns a single Recording resource identified by a Recording SID.
        """
        
        base_url = operations.FETCH_RECORDING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Recordings/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRecordingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1Recording])
                res.video_v1_recording = out

        return res

    
    def fetch_recording_settings(self, request: operations.FetchRecordingSettingsRequest) -> operations.FetchRecordingSettingsResponse:
        base_url = operations.FETCH_RECORDING_SETTINGS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/RecordingSettings/Default"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRecordingSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1RecordingSettings])
                res.video_v1_recording_settings = out

        return res

    
    def fetch_room(self, request: operations.FetchRoomRequest) -> operations.FetchRoomResponse:
        base_url = operations.FETCH_ROOM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Rooms/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRoomResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1Room])
                res.video_v1_room = out

        return res

    
    def fetch_room_participant(self, request: operations.FetchRoomParticipantRequest) -> operations.FetchRoomParticipantResponse:
        base_url = operations.FETCH_ROOM_PARTICIPANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Rooms/{RoomSid}/Participants/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRoomParticipantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1RoomRoomParticipant])
                res.video_v1_room_room_participant = out

        return res

    
    def fetch_room_participant_published_track(self, request: operations.FetchRoomParticipantPublishedTrackRequest) -> operations.FetchRoomParticipantPublishedTrackResponse:
        r"""Returns a single Track resource represented by TrackName or SID.
        """
        
        base_url = operations.FETCH_ROOM_PARTICIPANT_PUBLISHED_TRACK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/PublishedTracks/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRoomParticipantPublishedTrackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1RoomRoomParticipantRoomParticipantPublishedTrack])
                res.video_v1_room_room_participant_room_participant_published_track = out

        return res

    
    def fetch_room_participant_subscribe_rule(self, request: operations.FetchRoomParticipantSubscribeRuleRequest) -> operations.FetchRoomParticipantSubscribeRuleResponse:
        r"""Returns a list of Subscribe Rules for the Participant.
        """
        
        base_url = operations.FETCH_ROOM_PARTICIPANT_SUBSCRIBE_RULE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribeRules", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRoomParticipantSubscribeRuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule])
                res.video_v1_room_room_participant_room_participant_subscribe_rule = out

        return res

    
    def fetch_room_participant_subscribed_track(self, request: operations.FetchRoomParticipantSubscribedTrackRequest) -> operations.FetchRoomParticipantSubscribedTrackResponse:
        r"""Returns a single Track resource represented by `track_sid`.  Note: This is one resource with the Video API that requires a SID, be Track Name on the subscriber side is not guaranteed to be unique.
        """
        
        base_url = operations.FETCH_ROOM_PARTICIPANT_SUBSCRIBED_TRACK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribedTracks/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRoomParticipantSubscribedTrackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack])
                res.video_v1_room_room_participant_room_participant_subscribed_track = out

        return res

    
    def fetch_room_recording(self, request: operations.FetchRoomRecordingRequest) -> operations.FetchRoomRecordingResponse:
        base_url = operations.FETCH_ROOM_RECORDING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Rooms/{RoomSid}/Recordings/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRoomRecordingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1RoomRoomRecording])
                res.video_v1_room_room_recording = out

        return res

    
    def fetch_room_recording_rule(self, request: operations.FetchRoomRecordingRuleRequest) -> operations.FetchRoomRecordingRuleResponse:
        r"""Returns a list of Recording Rules for the Room.
        """
        
        base_url = operations.FETCH_ROOM_RECORDING_RULE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Rooms/{RoomSid}/RecordingRules", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRoomRecordingRuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1RoomRoomRecordingRule])
                res.video_v1_room_room_recording_rule = out

        return res

    
    def list_composition(self, request: operations.ListCompositionRequest) -> operations.ListCompositionResponse:
        r"""List of all Recording compositions.
        """
        
        base_url = operations.LIST_COMPOSITION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Compositions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCompositionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCompositionListCompositionResponse])
                res.list_composition_response = out

        return res

    
    def list_composition_hook(self, request: operations.ListCompositionHookRequest) -> operations.ListCompositionHookResponse:
        r"""List of all Recording CompositionHook resources.
        """
        
        base_url = operations.LIST_COMPOSITION_HOOK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/CompositionHooks"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCompositionHookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCompositionHookListCompositionHookResponse])
                res.list_composition_hook_response = out

        return res

    
    def list_recording(self, request: operations.ListRecordingRequest) -> operations.ListRecordingResponse:
        r"""List of all Track recordings.
        """
        
        base_url = operations.LIST_RECORDING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Recordings"
        
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

    
    def list_room(self, request: operations.ListRoomRequest) -> operations.ListRoomResponse:
        base_url = operations.LIST_ROOM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Rooms"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListRoomResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListRoomListRoomResponse])
                res.list_room_response = out

        return res

    
    def list_room_participant(self, request: operations.ListRoomParticipantRequest) -> operations.ListRoomParticipantResponse:
        base_url = operations.LIST_ROOM_PARTICIPANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Rooms/{RoomSid}/Participants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListRoomParticipantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListRoomParticipantListRoomParticipantResponse])
                res.list_room_participant_response = out

        return res

    
    def list_room_participant_published_track(self, request: operations.ListRoomParticipantPublishedTrackRequest) -> operations.ListRoomParticipantPublishedTrackResponse:
        r"""Returns a list of tracks associated with a given Participant. Only `currently` Published Tracks are in the list resource.
        """
        
        base_url = operations.LIST_ROOM_PARTICIPANT_PUBLISHED_TRACK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/PublishedTracks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListRoomParticipantPublishedTrackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponse])
                res.list_room_participant_published_track_response = out

        return res

    
    def list_room_participant_subscribed_track(self, request: operations.ListRoomParticipantSubscribedTrackRequest) -> operations.ListRoomParticipantSubscribedTrackResponse:
        r"""Returns a list of tracks that are subscribed for the participant.
        """
        
        base_url = operations.LIST_ROOM_PARTICIPANT_SUBSCRIBED_TRACK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribedTracks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListRoomParticipantSubscribedTrackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponse])
                res.list_room_participant_subscribed_track_response = out

        return res

    
    def list_room_recording(self, request: operations.ListRoomRecordingRequest) -> operations.ListRoomRecordingResponse:
        base_url = operations.LIST_ROOM_RECORDING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Rooms/{RoomSid}/Recordings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListRoomRecordingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListRoomRecordingListRoomRecordingResponse])
                res.list_room_recording_response = out

        return res

    
    def update_composition_hook(self, request: operations.UpdateCompositionHookRequest) -> operations.UpdateCompositionHookResponse:
        base_url = operations.UPDATE_COMPOSITION_HOOK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/CompositionHooks/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateCompositionHookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1CompositionHook])
                res.video_v1_composition_hook = out

        return res

    
    def update_room(self, request: operations.UpdateRoomRequest) -> operations.UpdateRoomResponse:
        base_url = operations.UPDATE_ROOM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Rooms/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateRoomResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1Room])
                res.video_v1_room = out

        return res

    
    def update_room_participant(self, request: operations.UpdateRoomParticipantRequest) -> operations.UpdateRoomParticipantResponse:
        base_url = operations.UPDATE_ROOM_PARTICIPANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Rooms/{RoomSid}/Participants/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateRoomParticipantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1RoomRoomParticipant])
                res.video_v1_room_room_participant = out

        return res

    
    def update_room_participant_anonymize(self, request: operations.UpdateRoomParticipantAnonymizeRequest) -> operations.UpdateRoomParticipantAnonymizeResponse:
        base_url = operations.UPDATE_ROOM_PARTICIPANT_ANONYMIZE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Rooms/{RoomSid}/Participants/{Sid}/Anonymize", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateRoomParticipantAnonymizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1RoomRoomParticipantRoomParticipantAnonymize])
                res.video_v1_room_room_participant_room_participant_anonymize = out

        return res

    
    def update_room_participant_subscribe_rule(self, request: operations.UpdateRoomParticipantSubscribeRuleRequest) -> operations.UpdateRoomParticipantSubscribeRuleResponse:
        r"""Update the Subscribe Rules for the Participant
        """
        
        base_url = operations.UPDATE_ROOM_PARTICIPANT_SUBSCRIBE_RULE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribeRules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateRoomParticipantSubscribeRuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule])
                res.video_v1_room_room_participant_room_participant_subscribe_rule = out

        return res

    
    def update_room_recording_rule(self, request: operations.UpdateRoomRecordingRuleRequest) -> operations.UpdateRoomRecordingRuleResponse:
        r"""Update the Recording Rules for the Room
        """
        
        base_url = operations.UPDATE_ROOM_RECORDING_RULE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Rooms/{RoomSid}/RecordingRules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateRoomRecordingRuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoV1RoomRoomRecordingRule])
                res.video_v1_room_room_recording_rule = out

        return res

    
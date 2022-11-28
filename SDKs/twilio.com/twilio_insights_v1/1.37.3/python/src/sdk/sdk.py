

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://insights.twilio.com",
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
        
    
    
    
    def fetch_account_settings(self, request: operations.FetchAccountSettingsRequest) -> operations.FetchAccountSettingsResponse:
        base_url = operations.FETCH_ACCOUNT_SETTINGS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Voice/Settings"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchAccountSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InsightsV1AccountSettings])
                res.insights_v1_account_settings = out

        return res

    
    def fetch_annotation(self, request: operations.FetchAnnotationRequest) -> operations.FetchAnnotationResponse:
        r"""Fetch a specific Annotation.
        """
        
        base_url = operations.FETCH_ANNOTATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Voice/{CallSid}/Annotation", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchAnnotationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InsightsV1CallAnnotation])
                res.insights_v1_call_annotation = out

        return res

    
    def fetch_call(self, request: operations.FetchCallRequest) -> operations.FetchCallResponse:
        base_url = operations.FETCH_CALL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Voice/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InsightsV1Call])
                res.insights_v1_call = out

        return res

    
    def fetch_conference(self, request: operations.FetchConferenceRequest) -> operations.FetchConferenceResponse:
        r"""Fetch a specific Conference.
        """
        
        base_url = operations.FETCH_CONFERENCE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Conferences/{ConferenceSid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchConferenceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InsightsV1Conference])
                res.insights_v1_conference = out

        return res

    
    def fetch_conference_participant(self, request: operations.FetchConferenceParticipantRequest) -> operations.FetchConferenceParticipantResponse:
        r"""Fetch a specific Conference Participant Summary.
        """
        
        base_url = operations.FETCH_CONFERENCE_PARTICIPANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Conferences/{ConferenceSid}/Participants/{ParticipantSid}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchConferenceParticipantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InsightsV1ConferenceConferenceParticipant])
                res.insights_v1_conference_conference_participant = out

        return res

    
    def fetch_summary(self, request: operations.FetchSummaryRequest) -> operations.FetchSummaryResponse:
        base_url = operations.FETCH_SUMMARY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Voice/{CallSid}/Summary", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InsightsV1CallSummary])
                res.insights_v1_call_summary = out

        return res

    
    def fetch_video_participant_summary(self, request: operations.FetchVideoParticipantSummaryRequest) -> operations.FetchVideoParticipantSummaryResponse:
        r"""Get Video Log Analyzer data for a Room Participant.
        """
        
        base_url = operations.FETCH_VIDEO_PARTICIPANT_SUMMARY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Video/Rooms/{RoomSid}/Participants/{ParticipantSid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchVideoParticipantSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InsightsV1VideoRoomSummaryVideoParticipantSummary])
                res.insights_v1_video_room_summary_video_participant_summary = out

        return res

    
    def fetch_video_room_summary(self, request: operations.FetchVideoRoomSummaryRequest) -> operations.FetchVideoRoomSummaryResponse:
        r"""Get Video Log Analyzer data for a Room.
        """
        
        base_url = operations.FETCH_VIDEO_ROOM_SUMMARY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Video/Rooms/{RoomSid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchVideoRoomSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InsightsV1VideoRoomSummary])
                res.insights_v1_video_room_summary = out

        return res

    
    def list_call_summaries(self, request: operations.ListCallSummariesRequest) -> operations.ListCallSummariesResponse:
        base_url = operations.LIST_CALL_SUMMARIES_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Voice/Summaries"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCallSummariesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCallSummariesListCallSummariesResponse])
                res.list_call_summaries_response = out

        return res

    
    def list_conference(self, request: operations.ListConferenceRequest) -> operations.ListConferenceResponse:
        r"""Retrieve a list of Conferences.
        """
        
        base_url = operations.LIST_CONFERENCE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Conferences"
        
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

    
    def list_conference_participant(self, request: operations.ListConferenceParticipantRequest) -> operations.ListConferenceParticipantResponse:
        r"""List Conference Participants.
        """
        
        base_url = operations.LIST_CONFERENCE_PARTICIPANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Conferences/{ConferenceSid}/Participants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListConferenceParticipantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListConferenceParticipantListConferenceParticipantResponse])
                res.list_conference_participant_response = out

        return res

    
    def list_event(self, request: operations.ListEventRequest) -> operations.ListEventResponse:
        base_url = operations.LIST_EVENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Voice/{CallSid}/Events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListEventResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListEventListEventResponse])
                res.list_event_response = out

        return res

    
    def list_metric(self, request: operations.ListMetricRequest) -> operations.ListMetricResponse:
        base_url = operations.LIST_METRIC_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Voice/{CallSid}/Metrics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListMetricResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListMetricListMetricResponse])
                res.list_metric_response = out

        return res

    
    def list_video_participant_summary(self, request: operations.ListVideoParticipantSummaryRequest) -> operations.ListVideoParticipantSummaryResponse:
        r"""Get a list of room participants.
        """
        
        base_url = operations.LIST_VIDEO_PARTICIPANT_SUMMARY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Video/Rooms/{RoomSid}/Participants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListVideoParticipantSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListVideoParticipantSummaryListVideoParticipantSummaryResponse])
                res.list_video_participant_summary_response = out

        return res

    
    def list_video_room_summary(self, request: operations.ListVideoRoomSummaryRequest) -> operations.ListVideoRoomSummaryResponse:
        r"""Get a list of Programmable Video Rooms.
        """
        
        base_url = operations.LIST_VIDEO_ROOM_SUMMARY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Video/Rooms"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListVideoRoomSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListVideoRoomSummaryListVideoRoomSummaryResponse])
                res.list_video_room_summary_response = out

        return res

    
    def update_account_settings(self, request: operations.UpdateAccountSettingsRequest) -> operations.UpdateAccountSettingsResponse:
        base_url = operations.UPDATE_ACCOUNT_SETTINGS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Voice/Settings"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAccountSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InsightsV1AccountSettings])
                res.insights_v1_account_settings = out

        return res

    
    def update_annotation(self, request: operations.UpdateAnnotationRequest) -> operations.UpdateAnnotationResponse:
        r"""Create/Update the annotation for the call
        """
        
        base_url = operations.UPDATE_ANNOTATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Voice/{CallSid}/Annotation", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAnnotationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InsightsV1CallAnnotation])
                res.insights_v1_call_annotation = out

        return res

    
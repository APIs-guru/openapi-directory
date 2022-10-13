import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://insights.twilio.com",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def fetch_account_settings(self, request: operations.FetchAccountSettingsRequest) -> operations.FetchAccountSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_ACCOUNT_SETTINGS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/Voice/Settings"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchAccountSettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InsightsV1AccountSettings])
                res.insights_v1_account_settings = out

        return res

    
    
    def fetch_annotation(self, request: operations.FetchAnnotationRequest) -> operations.FetchAnnotationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_ANNOTATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Voice/{CallSid}/Annotation", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchAnnotationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InsightsV1CallAnnotation])
                res.insights_v1_call_annotation = out

        return res

    
    
    def fetch_call(self, request: operations.FetchCallRequest) -> operations.FetchCallResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_CALL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Voice/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCallResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InsightsV1Call])
                res.insights_v1_call = out

        return res

    
    
    def fetch_conference(self, request: operations.FetchConferenceRequest) -> operations.FetchConferenceResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_CONFERENCE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Conferences/{ConferenceSid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchConferenceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InsightsV1Conference])
                res.insights_v1_conference = out

        return res

    
    
    def fetch_conference_participant(self, request: operations.FetchConferenceParticipantRequest) -> operations.FetchConferenceParticipantResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_CONFERENCE_PARTICIPANT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Conferences/{ConferenceSid}/Participants/{ParticipantSid}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchConferenceParticipantResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InsightsV1ConferenceConferenceParticipant])
                res.insights_v1_conference_conference_participant = out

        return res

    
    
    def fetch_summary(self, request: operations.FetchSummaryRequest) -> operations.FetchSummaryResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SUMMARY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Voice/{CallSid}/Summary", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSummaryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InsightsV1CallSummary])
                res.insights_v1_call_summary = out

        return res

    
    
    def fetch_video_participant_summary(self, request: operations.FetchVideoParticipantSummaryRequest) -> operations.FetchVideoParticipantSummaryResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_VIDEO_PARTICIPANT_SUMMARY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Video/Rooms/{RoomSid}/Participants/{ParticipantSid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchVideoParticipantSummaryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InsightsV1VideoRoomSummaryVideoParticipantSummary])
                res.insights_v1_video_room_summary_video_participant_summary = out

        return res

    
    
    def fetch_video_room_summary(self, request: operations.FetchVideoRoomSummaryRequest) -> operations.FetchVideoRoomSummaryResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_VIDEO_ROOM_SUMMARY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Video/Rooms/{RoomSid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchVideoRoomSummaryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InsightsV1VideoRoomSummary])
                res.insights_v1_video_room_summary = out

        return res

    
    
    def list_call_summaries(self, request: operations.ListCallSummariesRequest) -> operations.ListCallSummariesResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_CALL_SUMMARIES_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/Voice/Summaries"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCallSummariesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCallSummaries200ApplicationJSONListCallSummariesResponse])
                res.list_call_summaries_response = out

        return res

    
    
    def list_conference(self, request: operations.ListConferenceRequest) -> operations.ListConferenceResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_CONFERENCE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/Conferences"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListConferenceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListConference200ApplicationJSONListConferenceResponse])
                res.list_conference_response = out

        return res

    
    
    def list_conference_participant(self, request: operations.ListConferenceParticipantRequest) -> operations.ListConferenceParticipantResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_CONFERENCE_PARTICIPANT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Conferences/{ConferenceSid}/Participants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListConferenceParticipantResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListConferenceParticipant200ApplicationJSONListConferenceParticipantResponse])
                res.list_conference_participant_response = out

        return res

    
    
    def list_event(self, request: operations.ListEventRequest) -> operations.ListEventResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_EVENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Voice/{CallSid}/Events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListEventResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListEvent200ApplicationJSONListEventResponse])
                res.list_event_response = out

        return res

    
    
    def list_metric(self, request: operations.ListMetricRequest) -> operations.ListMetricResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_METRIC_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Voice/{CallSid}/Metrics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListMetricResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListMetric200ApplicationJSONListMetricResponse])
                res.list_metric_response = out

        return res

    
    
    def list_video_participant_summary(self, request: operations.ListVideoParticipantSummaryRequest) -> operations.ListVideoParticipantSummaryResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_VIDEO_PARTICIPANT_SUMMARY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Video/Rooms/{RoomSid}/Participants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListVideoParticipantSummaryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListVideoParticipantSummary200ApplicationJSONListVideoParticipantSummaryResponse])
                res.list_video_participant_summary_response = out

        return res

    
    
    def list_video_room_summary(self, request: operations.ListVideoRoomSummaryRequest) -> operations.ListVideoRoomSummaryResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_VIDEO_ROOM_SUMMARY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/Video/Rooms"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListVideoRoomSummaryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListVideoRoomSummary200ApplicationJSONListVideoRoomSummaryResponse])
                res.list_video_room_summary_response = out

        return res

    
    
    def update_account_settings(self, request: operations.UpdateAccountSettingsRequest) -> operations.UpdateAccountSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_ACCOUNT_SETTINGS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/Voice/Settings"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAccountSettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InsightsV1AccountSettings])
                res.insights_v1_account_settings = out

        return res

    
    
    def update_annotation(self, request: operations.UpdateAnnotationRequest) -> operations.UpdateAnnotationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_ANNOTATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Voice/{CallSid}/Annotation", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAnnotationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InsightsV1CallAnnotation])
                res.insights_v1_call_annotation = out

        return res

    
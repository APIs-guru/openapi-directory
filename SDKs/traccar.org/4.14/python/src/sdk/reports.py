import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Reports:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def get_reports_events(self, request: operations.GetReportsEventsRequest) -> operations.GetReportsEventsResponse:
        r"""Fetch a list of Events within the time period for the Devices or Groups
        At least one _deviceId_ or one _groupId_ must be passed
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/reports/events"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReportsEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Event]])
                res.events = out
            if utils.match_content_type(content_type, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"):
                res.body = r.content

        return res

    
    def get_reports_route(self, request: operations.GetReportsRouteRequest) -> operations.GetReportsRouteResponse:
        r"""Fetch a list of Positions within the time period for the Devices or Groups
        At least one _deviceId_ or one _groupId_ must be passed
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/reports/route"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReportsRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Position]])
                res.positions = out
            if utils.match_content_type(content_type, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"):
                res.body = r.content

        return res

    
    def get_reports_stops(self, request: operations.GetReportsStopsRequest) -> operations.GetReportsStopsResponse:
        r"""Fetch a list of ReportStops within the time period for the Devices or Groups
        At least one _deviceId_ or one _groupId_ must be passed
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/reports/stops"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReportsStopsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ReportStops]])
                res.report_stops = out
            if utils.match_content_type(content_type, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"):
                res.body = r.content

        return res

    
    def get_reports_summary(self, request: operations.GetReportsSummaryRequest) -> operations.GetReportsSummaryResponse:
        r"""Fetch a list of ReportSummary within the time period for the Devices or Groups
        At least one _deviceId_ or one _groupId_ must be passed
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/reports/summary"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReportsSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ReportSummary]])
                res.report_summaries = out
            if utils.match_content_type(content_type, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"):
                res.body = r.content

        return res

    
    def get_reports_trips(self, request: operations.GetReportsTripsRequest) -> operations.GetReportsTripsResponse:
        r"""Fetch a list of ReportTrips within the time period for the Devices or Groups
        At least one _deviceId_ or one _groupId_ must be passed
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/reports/trips"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReportsTripsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ReportTrips]])
                res.report_trips = out
            if utils.match_content_type(content_type, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"):
                res.body = r.content

        return res

    
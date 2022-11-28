

import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"http://api.sportsdata.io",
	"https://api.sportsdata.io",
	"http://azure-api.sportsdata.io",
	"https://azure-api.sportsdata.io",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
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
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def driver_details(self, request: operations.DriverDetailsRequest) -> operations.DriverDetailsResponse:
        r"""Driver Details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/driver/{driverid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DriverDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.driver = out

        return res

    
    def driver_race_projections_entry_list(self, request: operations.DriverRaceProjectionsEntryListRequest) -> operations.DriverRaceProjectionsEntryListResponse:
        r"""Driver Race Projections (Entry List)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/DriverRaceProjections/{raceid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DriverRaceProjectionsEntryListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.driver_race_projections = out

        return res

    
    def drivers(self, request: operations.DriversRequest) -> operations.DriversResponse:
        r"""Drivers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/drivers", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DriversResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.drivers = out

        return res

    
    def race_results(self, request: operations.RaceResultsRequest) -> operations.RaceResultsResponse:
        r"""Race Results
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/raceresult/{raceid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RaceResultsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.race_result = out

        return res

    
    def races_schedule(self, request: operations.RacesScheduleRequest) -> operations.RacesScheduleResponse:
        r"""Races / Schedule
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/races/{season}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RacesScheduleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.races = out

        return res

    
    def series(self, request: operations.SeriesRequest) -> operations.SeriesResponse:
        r"""Series
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/series", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SeriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.series = out

        return res

    
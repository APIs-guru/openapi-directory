
__doc__ = """ SDK Documentation: https://www.visualcrossing.com/weather-api-documentation - https://www.visualcrossing.com/weather-api-documentation"""
import requests
from sdk.models import operations
from . import utils




SERVERS = [
	"https://weather.visualcrossing.com",
]


class SDK:
    r"""SDK Documentation: https://www.visualcrossing.com/weather-api-documentation - https://www.visualcrossing.com/weather-api-documentation"""

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
        
    
    
    
    def get_visual_crossing_web_services_rest_services_weatherdata_forecast(self, request: operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest) -> operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse:
        r"""Weather Forecast API
        Provides access to weather forecast information. The forecast is available for up to 15 days at the hourly, 12 hour and daily summary level.
        """
        
        base_url = operations.GET_VISUAL_CROSSING_WEB_SERVICES_REST_SERVICES_WEATHERDATA_FORECAST_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/VisualCrossingWebServices/rest/services/weatherdata/forecast"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_visual_crossing_web_services_rest_services_weatherdata_history(self, request: operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest) -> operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse:
        r"""Retrieves hourly or daily historical weather records.
        The weather history data is suitable for retrieving hourly or daily historical weather records.
        """
        
        base_url = operations.GET_VISUAL_CROSSING_WEB_SERVICES_REST_SERVICES_WEATHERDATA_HISTORY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/VisualCrossingWebServices/rest/services/weatherdata/history"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
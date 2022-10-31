import warnings
import requests
from sdk.models import operations
from . import utils


SERVERS = [
	"https://weather.visualcrossing.com",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def get_visual_crossing_web_services_rest_services_weatherdata_forecast(self, request: operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest) -> operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse:
        warnings.simplefilter("ignore")

        base_url = operations.GET_VISUAL_CROSSING_WEB_SERVICES_REST_SERVICES_WEATHERDATA_FORECAST_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/VisualCrossingWebServices/rest/services/weatherdata/forecast"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_visual_crossing_web_services_rest_services_weatherdata_history(self, request: operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest) -> operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse:
        warnings.simplefilter("ignore")

        base_url = operations.GET_VISUAL_CROSSING_WEB_SERVICES_REST_SERVICES_WEATHERDATA_HISTORY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/VisualCrossingWebServices/rest/services/weatherdata/history"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
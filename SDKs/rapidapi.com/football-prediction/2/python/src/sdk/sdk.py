import warnings
import requests
from typing import List,Optional
from sdk.models import operations
from . import utils


SERVERS = [
	"https://football-prediction-api.p.rapidapi.com",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def get_api_v2_list_federations(self, request: operations.GetAPIV2ListFederationsRequest) -> operations.GetAPIV2ListFederationsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/api/v2/list-federations"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV2ListFederationsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAPIV2ListFederations200ApplicationJSON])
                res.get_api_v2_list_federations_200_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAPIV2ListFederations404ApplicationJSON])
                res.get_api_v2_list_federations_404_application_json_object = out

        return res

    
    
    def get_api_v2_list_markets(self, request: operations.GetAPIV2ListMarketsRequest) -> operations.GetAPIV2ListMarketsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/api/v2/list-markets"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV2ListMarketsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAPIV2ListMarkets200ApplicationJSON])
                res.get_api_v2_list_markets_200_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAPIV2ListMarkets404ApplicationJSON])
                res.get_api_v2_list_markets_404_application_json_object = out

        return res

    
    
    def get_api_v2_performance_stats(self, request: operations.GetAPIV2PerformanceStatsRequest) -> operations.GetAPIV2PerformanceStatsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/api/v2/performance-stats"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV2PerformanceStatsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAPIV2PerformanceStats200ApplicationJSON])
                res.get_api_v2_performance_stats_200_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAPIV2PerformanceStats404ApplicationJSON])
                res.get_api_v2_performance_stats_404_application_json_object = out

        return res

    
    
    def get_api_v2_predictions(self, request: operations.GetAPIV2PredictionsRequest) -> operations.GetAPIV2PredictionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/api/v2/predictions"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV2PredictionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAPIV2Predictions404ApplicationJSON])
                res.get_api_v2_predictions_404_application_json_object = out

        return res

    
    
    def get_api_v2_predictions_id_(self, request: operations.GetAPIV2PredictionsIDRequest) -> operations.GetAPIV2PredictionsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v2/predictions/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV2PredictionsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAPIV2PredictionsID200ApplicationJSON])
                res.get_api_v2_predictions_id_200_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAPIV2PredictionsID404ApplicationJSON])
                res.get_api_v2_predictions_id_404_application_json_object = out

        return res

    
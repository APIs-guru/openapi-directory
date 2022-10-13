import warnings
import requests
from typing import Optional
from sdk.models import operations
from . import utils


SERVERS = [
	"https://api.telematicssdk.com",
	"https://mobilesdk.telematicssdk.com",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def root_v1_scorings_consolidated(self, request: operations.RootV1ScoringsConsolidatedRequest) -> operations.RootV1ScoringsConsolidatedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/statistics/v1/Scorings/consolidated"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RootV1ScoringsConsolidatedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers

        return res

    
    
    def root_v1_scorings_consolidated_daily(self, request: operations.RootV1ScoringsConsolidatedDailyRequest) -> operations.RootV1ScoringsConsolidatedDailyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/statistics/v1/Scorings/consolidated/daily"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RootV1ScoringsConsolidatedDailyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RootV1ScoringsConsolidatedDaily200ApplicationJSON])
                res.root_v1_scorings_consolidated_daily_200_application_json_object = out

        return res

    
    
    def root_v1_statistics_consolidated(self, request: operations.RootV1StatisticsConsolidatedRequest) -> operations.RootV1StatisticsConsolidatedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/statistics/v1/Statistics/consolidated"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RootV1StatisticsConsolidatedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers

        return res

    
    
    def root_v1_statistics_consolidated_daily(self, request: operations.RootV1StatisticsConsolidatedDailyRequest) -> operations.RootV1StatisticsConsolidatedDailyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/statistics/v1/Statistics/consolidated/daily"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RootV1StatisticsConsolidatedDailyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers

        return res

    
    
    def trips_trip_details(self, request: operations.TripsTripDetailsRequest) -> operations.TripsTripDetailsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mobilesdk/stage/track/get_track/v1"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TripsTripDetailsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TripsTripDetails200ApplicationJSON])
                res.trips_trip_details_200_application_json_object = out

        return res

    
    
    def user_safe_scoring_accumulated_value_v1_scorings_individual(self, request: operations.UserSafeScoringAccumulatedValueV1ScoringsIndividualRequest) -> operations.UserSafeScoringAccumulatedValueV1ScoringsIndividualResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/statistics/v1/Scorings/individual/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserSafeScoringAccumulatedValueV1ScoringsIndividualResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSON])
                res.user_safe_scoring_accumulated_value_v1_scorings_individual_200_application_json_object = out

        return res

    
    
    def user_safe_scoring_daily_value_v1_scorings_individual_daily(self, request: operations.UserSafeScoringDailyValueV1ScoringsIndividualDailyRequest) -> operations.UserSafeScoringDailyValueV1ScoringsIndividualDailyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/statistics/v1/Scorings/individual/daily"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserSafeScoringDailyValueV1ScoringsIndividualDailyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJSON])
                res.user_safe_scoring_daily_value_v1_scorings_individual_daily_200_application_json_object = out

        return res

    
    
    def user_statistice_daily_value_v1_statistics_individual_daily(self, request: operations.UserStatisticeDailyValueV1StatisticsIndividualDailyRequest) -> operations.UserStatisticeDailyValueV1StatisticsIndividualDailyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/statistics/v1/Statistics/individual/daily/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserStatisticeDailyValueV1StatisticsIndividualDailyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJSON])
                res.user_statistice_daily_value_v1_statistics_individual_daily_200_application_json_object = out

        return res

    
    
    def user_statistics_accumulated_value_v1_statistics_individual(self, request: operations.UserStatisticsAccumulatedValueV1StatisticsIndividualRequest) -> operations.UserStatisticsAccumulatedValueV1StatisticsIndividualResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/statistics/v1/Statistics/individual/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserStatisticsAccumulatedValueV1StatisticsIndividualResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJSON])
                res.user_statistics_accumulated_value_v1_statistics_individual_200_application_json_object = out

        return res

    
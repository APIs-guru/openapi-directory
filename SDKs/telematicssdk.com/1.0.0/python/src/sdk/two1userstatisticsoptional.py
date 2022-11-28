import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Two1UserStatisticsOptional:
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

    
    def user_statistice_daily_value_v1_statistics_individual_daily(self, request: operations.UserStatisticeDailyValueV1StatisticsIndividualDailyRequest) -> operations.UserStatisticeDailyValueV1StatisticsIndividualDailyResponse:
        r"""User statistice - Daily value - v1/Statistics/individual/daily
        User statistice - Daily value - v1/Statistics/individual/daily
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/statistics/v1/Statistics/individual/daily/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
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
        r"""User statistics - Accumulated value - /v1/Statistics/individual
        User statistics - Accumulated value - /v1/Statistics/individual
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/statistics/v1/Statistics/individual/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserStatisticsAccumulatedValueV1StatisticsIndividualResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJSON])
                res.user_statistics_accumulated_value_v1_statistics_individual_200_application_json_object = out

        return res

    
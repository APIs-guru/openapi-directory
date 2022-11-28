

import requests

from . import utils

from .two_for_mobile_app_optional_ import TwoForMobileAppOptional
from .two_1_user_statistics_optional_ import Two1UserStatisticsOptional
from .two_2_user_trips_optional_ import Two2UserTripsOptional
from .two_4_user_safe_scoring_optional_ import Two4UserSafeScoringOptional
from .three_for_back_end_optional_ import ThreeForBackEndOptional
from .consolidated_safe_scoring import ConsolidatedSafeScoring
from .consolidated_statistics import ConsolidatedStatistics


SERVERS = [
	"https://api.telematicssdk.com",
	"https://mobilesdk.telematicssdk.com",
]


class SDK:
    
    two_for_mobile_app_optional_: TwoForMobileAppOptional
    two_1_user_statistics_optional_: Two1UserStatisticsOptional
    two_2_user_trips_optional_: Two2UserTripsOptional
    two_4_user_safe_scoring_optional_: Two4UserSafeScoringOptional
    three_for_back_end_optional_: ThreeForBackEndOptional
    consolidated_safe_scoring: ConsolidatedSafeScoring
    consolidated_statistics: ConsolidatedStatistics

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        self._init_sdks()


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        self._init_sdks()
    

    def config_client(self, client: requests.Session):
        self._client = client
        self._init_sdks()
    
    
    def _init_sdks(self):
        
        self.two_for_mobile_app_optional_ = TwoForMobileAppOptional(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.two_1_user_statistics_optional_ = Two1UserStatisticsOptional(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.two_2_user_trips_optional_ = Two2UserTripsOptional(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.two_4_user_safe_scoring_optional_ = Two4UserSafeScoringOptional(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.three_for_back_end_optional_ = ThreeForBackEndOptional(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.consolidated_safe_scoring = ConsolidatedSafeScoring(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.consolidated_statistics = ConsolidatedStatistics(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    
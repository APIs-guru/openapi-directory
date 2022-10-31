from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetDistrictRankingsPathParams:
    district_key: str = field(default=None, metadata={'path_param': { 'field_name': 'district_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictRankingsHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictRankingsSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDistrictRankingsRequest:
    path_params: GetDistrictRankingsPathParams = field(default=None)
    headers: GetDistrictRankingsHeaders = field(default=None)
    security: GetDistrictRankingsSecurity = field(default=None)
    

@dataclass
class GetDistrictRankingsResponse:
    content_type: str = field(default=None)
    district_rankings: Optional[List[shared.DistrictRanking]] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    

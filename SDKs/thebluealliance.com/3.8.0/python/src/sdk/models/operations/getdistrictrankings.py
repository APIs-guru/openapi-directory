from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetDistrictRankingsPathParams:
    district_key: str = field(metadata={'path_param': { 'field_name': 'district_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictRankingsHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictRankingsSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDistrictRankingsRequest:
    headers: GetDistrictRankingsHeaders = field()
    path_params: GetDistrictRankingsPathParams = field()
    security: GetDistrictRankingsSecurity = field()
    

@dataclass
class GetDistrictRankingsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    district_rankings: Optional[List[shared.DistrictRanking]] = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamDistrictsPathParams:
    team_key: str = field(default=None, metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamDistrictsHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    

@dataclass
class GetTeamDistrictsSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamDistrictsRequest:
    path_params: GetTeamDistrictsPathParams = field(default=None)
    headers: GetTeamDistrictsHeaders = field(default=None)
    security: GetTeamDistrictsSecurity = field(default=None)
    

@dataclass
class GetTeamDistrictsResponse:
    content_type: str = field(default=None)
    district_lists: Optional[List[shared.DistrictList]] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    

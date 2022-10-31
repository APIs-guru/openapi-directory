from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetDistrictTeamsPathParams:
    district_key: str = field(default=None, metadata={'path_param': { 'field_name': 'district_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictTeamsHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictTeamsSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDistrictTeamsRequest:
    path_params: GetDistrictTeamsPathParams = field(default=None)
    headers: GetDistrictTeamsHeaders = field(default=None)
    security: GetDistrictTeamsSecurity = field(default=None)
    

@dataclass
class GetDistrictTeamsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    teams: Optional[List[shared.Team]] = field(default=None)
    

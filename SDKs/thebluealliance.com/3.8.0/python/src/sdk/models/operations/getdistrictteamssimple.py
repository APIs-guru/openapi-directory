from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetDistrictTeamsSimplePathParams:
    district_key: str = field(default=None, metadata={'path_param': { 'field_name': 'district_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictTeamsSimpleHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    

@dataclass
class GetDistrictTeamsSimpleSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDistrictTeamsSimpleRequest:
    path_params: GetDistrictTeamsSimplePathParams = field(default=None)
    headers: GetDistrictTeamsSimpleHeaders = field(default=None)
    security: GetDistrictTeamsSimpleSecurity = field(default=None)
    

@dataclass
class GetDistrictTeamsSimpleResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    team_simples: Optional[List[shared.TeamSimple]] = field(default=None)
    

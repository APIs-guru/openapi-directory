from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetDistrictTeamsSimplePathParams:
    district_key: str = field(metadata={'path_param': { 'field_name': 'district_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictTeamsSimpleHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictTeamsSimpleSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDistrictTeamsSimpleRequest:
    headers: GetDistrictTeamsSimpleHeaders = field()
    path_params: GetDistrictTeamsSimplePathParams = field()
    security: GetDistrictTeamsSimpleSecurity = field()
    

@dataclass
class GetDistrictTeamsSimpleResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    team_simples: Optional[List[shared.TeamSimple]] = field(default=None)
    

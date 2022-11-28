from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamPathParams:
    team_key: str = field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamRequest:
    headers: GetTeamHeaders = field()
    path_params: GetTeamPathParams = field()
    security: GetTeamSecurity = field()
    

@dataclass
class GetTeamResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    team: Optional[shared.Team] = field(default=None)
    

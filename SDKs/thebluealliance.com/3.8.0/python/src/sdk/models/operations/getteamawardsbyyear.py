from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamAwardsByYearPathParams:
    team_key: str = field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    year: int = field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamAwardsByYearHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamAwardsByYearSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamAwardsByYearRequest:
    headers: GetTeamAwardsByYearHeaders = field()
    path_params: GetTeamAwardsByYearPathParams = field()
    security: GetTeamAwardsByYearSecurity = field()
    

@dataclass
class GetTeamAwardsByYearResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    awards: Optional[List[shared.Award]] = field(default=None)
    

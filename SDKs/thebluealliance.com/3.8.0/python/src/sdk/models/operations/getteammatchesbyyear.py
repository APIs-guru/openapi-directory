from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamMatchesByYearPathParams:
    team_key: str = field(default=None, metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    year: int = field(default=None, metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamMatchesByYearHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    

@dataclass
class GetTeamMatchesByYearSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamMatchesByYearRequest:
    path_params: GetTeamMatchesByYearPathParams = field(default=None)
    headers: GetTeamMatchesByYearHeaders = field(default=None)
    security: GetTeamMatchesByYearSecurity = field(default=None)
    

@dataclass
class GetTeamMatchesByYearResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    matches: Optional[List[shared.Match]] = field(default=None)
    status_code: int = field(default=None)
    

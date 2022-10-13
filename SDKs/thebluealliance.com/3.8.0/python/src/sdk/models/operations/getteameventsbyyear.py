from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamEventsByYearPathParams:
    team_key: str = field(default=None, metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    year: int = field(default=None, metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamEventsByYearHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    

@dataclass
class GetTeamEventsByYearSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamEventsByYearRequest:
    path_params: GetTeamEventsByYearPathParams = field(default=None)
    headers: GetTeamEventsByYearHeaders = field(default=None)
    security: GetTeamEventsByYearSecurity = field(default=None)
    

@dataclass
class GetTeamEventsByYearResponse:
    content_type: str = field(default=None)
    events: Optional[List[shared.Event]] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamEventsByYearPathParams:
    team_key: str = field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    year: int = field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamEventsByYearHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamEventsByYearSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamEventsByYearRequest:
    headers: GetTeamEventsByYearHeaders = field()
    path_params: GetTeamEventsByYearPathParams = field()
    security: GetTeamEventsByYearSecurity = field()
    

@dataclass
class GetTeamEventsByYearResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    events: Optional[List[shared.Event]] = field(default=None)
    

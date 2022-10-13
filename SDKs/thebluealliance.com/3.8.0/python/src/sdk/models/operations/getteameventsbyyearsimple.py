from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamEventsByYearSimplePathParams:
    team_key: str = field(default=None, metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    year: int = field(default=None, metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamEventsByYearSimpleHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    

@dataclass
class GetTeamEventsByYearSimpleSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamEventsByYearSimpleRequest:
    path_params: GetTeamEventsByYearSimplePathParams = field(default=None)
    headers: GetTeamEventsByYearSimpleHeaders = field(default=None)
    security: GetTeamEventsByYearSimpleSecurity = field(default=None)
    

@dataclass
class GetTeamEventsByYearSimpleResponse:
    content_type: str = field(default=None)
    event_simples: Optional[List[shared.EventSimple]] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    

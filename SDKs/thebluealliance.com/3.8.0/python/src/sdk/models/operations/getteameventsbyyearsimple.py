from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamEventsByYearSimplePathParams:
    team_key: str = field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    year: int = field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamEventsByYearSimpleHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamEventsByYearSimpleSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamEventsByYearSimpleRequest:
    headers: GetTeamEventsByYearSimpleHeaders = field()
    path_params: GetTeamEventsByYearSimplePathParams = field()
    security: GetTeamEventsByYearSimpleSecurity = field()
    

@dataclass
class GetTeamEventsByYearSimpleResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    event_simples: Optional[List[shared.EventSimple]] = field(default=None)
    

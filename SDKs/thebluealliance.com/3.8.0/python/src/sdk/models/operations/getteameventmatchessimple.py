from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamEventMatchesSimplePathParams:
    event_key: str = field(metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    team_key: str = field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamEventMatchesSimpleHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamEventMatchesSimpleSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamEventMatchesSimpleRequest:
    headers: GetTeamEventMatchesSimpleHeaders = field()
    path_params: GetTeamEventMatchesSimplePathParams = field()
    security: GetTeamEventMatchesSimpleSecurity = field()
    

@dataclass
class GetTeamEventMatchesSimpleResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    matches: Optional[List[shared.Match]] = field(default=None)
    

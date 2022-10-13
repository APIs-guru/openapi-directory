from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamEventMatchesPathParams:
    event_key: str = field(default=None, metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    team_key: str = field(default=None, metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamEventMatchesHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    

@dataclass
class GetTeamEventMatchesSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamEventMatchesRequest:
    path_params: GetTeamEventMatchesPathParams = field(default=None)
    headers: GetTeamEventMatchesHeaders = field(default=None)
    security: GetTeamEventMatchesSecurity = field(default=None)
    

@dataclass
class GetTeamEventMatchesResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    matches: Optional[List[shared.Match]] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamEventStatusPathParams:
    event_key: str = field(default=None, metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    team_key: str = field(default=None, metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamEventStatusHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamEventStatusSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamEventStatusRequest:
    path_params: GetTeamEventStatusPathParams = field(default=None)
    headers: GetTeamEventStatusHeaders = field(default=None)
    security: GetTeamEventStatusSecurity = field(default=None)
    

@dataclass
class GetTeamEventStatusResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    team_event_status: Optional[shared.TeamEventStatus] = field(default=None)
    

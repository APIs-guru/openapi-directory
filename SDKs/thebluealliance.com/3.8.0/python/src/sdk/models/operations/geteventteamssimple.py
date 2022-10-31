from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEventTeamsSimplePathParams:
    event_key: str = field(default=None, metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventTeamsSimpleHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventTeamsSimpleSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEventTeamsSimpleRequest:
    path_params: GetEventTeamsSimplePathParams = field(default=None)
    headers: GetEventTeamsSimpleHeaders = field(default=None)
    security: GetEventTeamsSimpleSecurity = field(default=None)
    

@dataclass
class GetEventTeamsSimpleResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    team_simples: Optional[List[shared.TeamSimple]] = field(default=None)
    

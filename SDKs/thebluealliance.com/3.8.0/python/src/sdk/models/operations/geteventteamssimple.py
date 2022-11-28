from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEventTeamsSimplePathParams:
    event_key: str = field(metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventTeamsSimpleHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventTeamsSimpleSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEventTeamsSimpleRequest:
    headers: GetEventTeamsSimpleHeaders = field()
    path_params: GetEventTeamsSimplePathParams = field()
    security: GetEventTeamsSimpleSecurity = field()
    

@dataclass
class GetEventTeamsSimpleResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    team_simples: Optional[List[shared.TeamSimple]] = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamSimplePathParams:
    team_key: str = field(default=None, metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamSimpleHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamSimpleSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamSimpleRequest:
    path_params: GetTeamSimplePathParams = field(default=None)
    headers: GetTeamSimpleHeaders = field(default=None)
    security: GetTeamSimpleSecurity = field(default=None)
    

@dataclass
class GetTeamSimpleResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    team_simple: Optional[shared.TeamSimple] = field(default=None)
    

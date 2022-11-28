from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamsPathParams:
    page_num: int = field(metadata={'path_param': { 'field_name': 'page_num', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamsRequest:
    headers: GetTeamsHeaders = field()
    path_params: GetTeamsPathParams = field()
    security: GetTeamsSecurity = field()
    

@dataclass
class GetTeamsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    teams: Optional[List[shared.Team]] = field(default=None)
    

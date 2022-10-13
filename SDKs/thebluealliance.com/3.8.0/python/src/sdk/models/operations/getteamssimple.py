from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamsSimplePathParams:
    page_num: int = field(default=None, metadata={'path_param': { 'field_name': 'page_num', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsSimpleHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    

@dataclass
class GetTeamsSimpleSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamsSimpleRequest:
    path_params: GetTeamsSimplePathParams = field(default=None)
    headers: GetTeamsSimpleHeaders = field(default=None)
    security: GetTeamsSimpleSecurity = field(default=None)
    

@dataclass
class GetTeamsSimpleResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    team_simples: Optional[List[shared.TeamSimple]] = field(default=None)
    

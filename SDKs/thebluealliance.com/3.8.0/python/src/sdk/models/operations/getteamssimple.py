from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamsSimplePathParams:
    page_num: int = field(metadata={'path_param': { 'field_name': 'page_num', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsSimpleHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsSimpleSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamsSimpleRequest:
    headers: GetTeamsSimpleHeaders = field()
    path_params: GetTeamsSimplePathParams = field()
    security: GetTeamsSimpleSecurity = field()
    

@dataclass
class GetTeamsSimpleResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    team_simples: Optional[List[shared.TeamSimple]] = field(default=None)
    

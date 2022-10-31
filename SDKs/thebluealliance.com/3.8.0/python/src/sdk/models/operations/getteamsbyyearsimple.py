from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamsByYearSimplePathParams:
    page_num: int = field(default=None, metadata={'path_param': { 'field_name': 'page_num', 'style': 'simple', 'explode': False }})
    year: int = field(default=None, metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsByYearSimpleHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsByYearSimpleSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamsByYearSimpleRequest:
    path_params: GetTeamsByYearSimplePathParams = field(default=None)
    headers: GetTeamsByYearSimpleHeaders = field(default=None)
    security: GetTeamsByYearSimpleSecurity = field(default=None)
    

@dataclass
class GetTeamsByYearSimpleResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    team_simples: Optional[List[shared.TeamSimple]] = field(default=None)
    

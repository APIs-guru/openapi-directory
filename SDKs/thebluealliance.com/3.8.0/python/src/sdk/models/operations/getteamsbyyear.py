from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamsByYearPathParams:
    page_num: int = field(metadata={'path_param': { 'field_name': 'page_num', 'style': 'simple', 'explode': False }})
    year: int = field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsByYearHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsByYearSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamsByYearRequest:
    headers: GetTeamsByYearHeaders = field()
    path_params: GetTeamsByYearPathParams = field()
    security: GetTeamsByYearSecurity = field()
    

@dataclass
class GetTeamsByYearResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    teams: Optional[List[shared.Team]] = field(default=None)
    

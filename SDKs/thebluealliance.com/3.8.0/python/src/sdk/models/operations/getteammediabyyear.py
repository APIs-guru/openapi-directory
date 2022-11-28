from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamMediaByYearPathParams:
    team_key: str = field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    year: int = field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamMediaByYearHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamMediaByYearSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamMediaByYearRequest:
    headers: GetTeamMediaByYearHeaders = field()
    path_params: GetTeamMediaByYearPathParams = field()
    security: GetTeamMediaByYearSecurity = field()
    

@dataclass
class GetTeamMediaByYearResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    media: Optional[List[shared.Media]] = field(default=None)
    

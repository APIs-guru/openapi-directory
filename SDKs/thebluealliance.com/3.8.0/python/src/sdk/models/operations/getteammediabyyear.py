from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamMediaByYearPathParams:
    team_key: str = field(default=None, metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    year: int = field(default=None, metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamMediaByYearHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    

@dataclass
class GetTeamMediaByYearSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamMediaByYearRequest:
    path_params: GetTeamMediaByYearPathParams = field(default=None)
    headers: GetTeamMediaByYearHeaders = field(default=None)
    security: GetTeamMediaByYearSecurity = field(default=None)
    

@dataclass
class GetTeamMediaByYearResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    media: Optional[List[shared.Media]] = field(default=None)
    status_code: int = field(default=None)
    

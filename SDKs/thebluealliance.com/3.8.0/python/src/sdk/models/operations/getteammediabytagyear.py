from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamMediaByTagYearPathParams:
    media_tag: str = field(metadata={'path_param': { 'field_name': 'media_tag', 'style': 'simple', 'explode': False }})
    team_key: str = field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    year: int = field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamMediaByTagYearHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamMediaByTagYearSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamMediaByTagYearRequest:
    headers: GetTeamMediaByTagYearHeaders = field()
    path_params: GetTeamMediaByTagYearPathParams = field()
    security: GetTeamMediaByTagYearSecurity = field()
    

@dataclass
class GetTeamMediaByTagYearResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    media: Optional[List[shared.Media]] = field(default=None)
    

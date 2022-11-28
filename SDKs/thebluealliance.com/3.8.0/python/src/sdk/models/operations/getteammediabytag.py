from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamMediaByTagPathParams:
    media_tag: str = field(metadata={'path_param': { 'field_name': 'media_tag', 'style': 'simple', 'explode': False }})
    team_key: str = field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamMediaByTagHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamMediaByTagSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamMediaByTagRequest:
    headers: GetTeamMediaByTagHeaders = field()
    path_params: GetTeamMediaByTagPathParams = field()
    security: GetTeamMediaByTagSecurity = field()
    

@dataclass
class GetTeamMediaByTagResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    media: Optional[List[shared.Media]] = field(default=None)
    

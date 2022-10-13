from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamMediaByTagPathParams:
    media_tag: str = field(default=None, metadata={'path_param': { 'field_name': 'media_tag', 'style': 'simple', 'explode': False }})
    team_key: str = field(default=None, metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamMediaByTagHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    

@dataclass
class GetTeamMediaByTagSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamMediaByTagRequest:
    path_params: GetTeamMediaByTagPathParams = field(default=None)
    headers: GetTeamMediaByTagHeaders = field(default=None)
    security: GetTeamMediaByTagSecurity = field(default=None)
    

@dataclass
class GetTeamMediaByTagResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    media: Optional[List[shared.Media]] = field(default=None)
    status_code: int = field(default=None)
    

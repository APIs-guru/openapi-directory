from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamSocialMediaPathParams:
    team_key: str = field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamSocialMediaHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamSocialMediaSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamSocialMediaRequest:
    headers: GetTeamSocialMediaHeaders = field()
    path_params: GetTeamSocialMediaPathParams = field()
    security: GetTeamSocialMediaSecurity = field()
    

@dataclass
class GetTeamSocialMediaResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    media: Optional[List[shared.Media]] = field(default=None)
    

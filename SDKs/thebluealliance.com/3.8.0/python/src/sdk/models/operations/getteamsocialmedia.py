from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamSocialMediaPathParams:
    team_key: str = field(default=None, metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamSocialMediaHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    

@dataclass
class GetTeamSocialMediaSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamSocialMediaRequest:
    path_params: GetTeamSocialMediaPathParams = field(default=None)
    headers: GetTeamSocialMediaHeaders = field(default=None)
    security: GetTeamSocialMediaSecurity = field(default=None)
    

@dataclass
class GetTeamSocialMediaResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    media: Optional[List[shared.Media]] = field(default=None)
    status_code: int = field(default=None)
    

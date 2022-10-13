from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPostPathParams:
    post_id: str = field(default=None, metadata={'path_param': { 'field_name': 'post_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPostSecurityOption1:
    oauth2_implicit: shared.SchemeOauth2Implicit = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPostSecurityOption2:
    oauth2_code: shared.SchemeOauth2Code = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPostSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetPostSecurity:
    option1: Optional[GetPostSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetPostSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetPostSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetPostRequest:
    path_params: GetPostPathParams = field(default=None)
    security: GetPostSecurity = field(default=None)
    

@dataclass
class GetPostResponse:
    content_type: str = field(default=None)
    post: Optional[shared.Post] = field(default=None)
    status_code: int = field(default=None)
    

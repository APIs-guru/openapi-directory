from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPostPathParams:
    post_id: str = field(metadata={'path_param': { 'field_name': 'post_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPostSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_code: Optional[shared.SchemeOauth2Code] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2_implicit: Optional[shared.SchemeOauth2Implicit] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPostRequest:
    path_params: GetPostPathParams = field()
    security: GetPostSecurity = field()
    

@dataclass
class GetPostResponse:
    content_type: str = field()
    status_code: int = field()
    post: Optional[shared.Post] = field(default=None)
    

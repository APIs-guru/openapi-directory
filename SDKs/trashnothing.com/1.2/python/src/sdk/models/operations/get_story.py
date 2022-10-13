from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetStoryPathParams:
    story_id: str = field(default=None, metadata={'path_param': { 'field_name': 'story_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStoryQueryParams:
    device_pixel_ratio: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'device_pixel_ratio', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStorySecurityOption1:
    oauth2_implicit: shared.SchemeOauth2Implicit = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetStorySecurityOption2:
    oauth2_code: shared.SchemeOauth2Code = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetStorySecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetStorySecurity:
    option1: Optional[GetStorySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetStorySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetStorySecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetStoryRequest:
    path_params: GetStoryPathParams = field(default=None)
    query_params: GetStoryQueryParams = field(default=None)
    security: GetStorySecurity = field(default=None)
    

@dataclass
class GetStoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    story: Optional[shared.Story] = field(default=None)
    

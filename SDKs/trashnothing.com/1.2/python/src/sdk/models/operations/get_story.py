from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetStoryPathParams:
    story_id: str = field(metadata={'path_param': { 'field_name': 'story_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStoryQueryParams:
    device_pixel_ratio: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'device_pixel_ratio', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStorySecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_code: Optional[shared.SchemeOauth2Code] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2_implicit: Optional[shared.SchemeOauth2Implicit] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetStoryRequest:
    path_params: GetStoryPathParams = field()
    query_params: GetStoryQueryParams = field()
    security: GetStorySecurity = field()
    

@dataclass
class GetStoryResponse:
    content_type: str = field()
    status_code: int = field()
    story: Optional[shared.Story] = field(default=None)
    

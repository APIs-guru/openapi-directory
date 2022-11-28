from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ViewedStoryPathParams:
    story_id: str = field(metadata={'path_param': { 'field_name': 'story_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ViewedStorySecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_code: Optional[shared.SchemeOauth2Code] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2_implicit: Optional[shared.SchemeOauth2Implicit] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ViewedStoryRequest:
    path_params: ViewedStoryPathParams = field()
    security: ViewedStorySecurity = field()
    

@dataclass
class ViewedStoryResponse:
    content_type: str = field()
    status_code: int = field()
    

from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ViewedStoryPathParams:
    story_id: str = field(default=None, metadata={'path_param': { 'field_name': 'story_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ViewedStorySecurityOption1:
    oauth2_implicit: shared.SchemeOauth2Implicit = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ViewedStorySecurityOption2:
    oauth2_code: shared.SchemeOauth2Code = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ViewedStorySecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class ViewedStorySecurity:
    option1: Optional[ViewedStorySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ViewedStorySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[ViewedStorySecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ViewedStoryRequest:
    path_params: ViewedStoryPathParams = field(default=None)
    security: ViewedStorySecurity = field(default=None)
    

@dataclass
class ViewedStoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

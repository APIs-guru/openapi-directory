from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PromisePostPathParams:
    post_id: str = field(default=None, metadata={'path_param': { 'field_name': 'post_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PromisePostRequest:
    path_params: PromisePostPathParams = field(default=None)
    

@dataclass
class PromisePostResponse:
    content_type: str = field(default=None)
    post: Optional[shared.Post] = field(default=None)
    status_code: int = field(default=None)
    

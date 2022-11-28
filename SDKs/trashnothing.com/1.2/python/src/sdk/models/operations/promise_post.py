from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PromisePostPathParams:
    post_id: str = field(metadata={'path_param': { 'field_name': 'post_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PromisePostRequest:
    path_params: PromisePostPathParams = field()
    

@dataclass
class PromisePostResponse:
    content_type: str = field()
    status_code: int = field()
    post: Optional[shared.Post] = field(default=None)
    

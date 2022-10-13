from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SatisfyPostPathParams:
    post_id: str = field(default=None, metadata={'path_param': { 'field_name': 'post_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SatisfyPostRequest:
    path_params: SatisfyPostPathParams = field(default=None)
    

@dataclass
class SatisfyPostResponse:
    content_type: str = field(default=None)
    post: Optional[shared.Post] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UnpromisePostPathParams:
    post_id: str = field(default=None, metadata={'path_param': { 'field_name': 'post_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnpromisePostRequest:
    path_params: UnpromisePostPathParams = field(default=None)
    

@dataclass
class UnpromisePostResponse:
    content_type: str = field(default=None)
    post: Optional[shared.Post] = field(default=None)
    status_code: int = field(default=None)
    

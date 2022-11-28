from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UnpromisePostPathParams:
    post_id: str = field(metadata={'path_param': { 'field_name': 'post_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnpromisePostRequest:
    path_params: UnpromisePostPathParams = field()
    

@dataclass
class UnpromisePostResponse:
    content_type: str = field()
    status_code: int = field()
    post: Optional[shared.Post] = field(default=None)
    

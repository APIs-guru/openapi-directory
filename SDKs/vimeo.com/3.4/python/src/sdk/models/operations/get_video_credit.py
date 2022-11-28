from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVideoCreditPathParams:
    credit_id: float = field(metadata={'path_param': { 'field_name': 'credit_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideoCreditRequest:
    path_params: GetVideoCreditPathParams = field()
    

@dataclass
class GetVideoCreditResponse:
    content_type: str = field()
    status_code: int = field()
    credit: Optional[shared.Credit] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    

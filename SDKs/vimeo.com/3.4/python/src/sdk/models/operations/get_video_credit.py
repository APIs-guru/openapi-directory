from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVideoCreditPathParams:
    credit_id: float = field(default=None, metadata={'path_param': { 'field_name': 'credit_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideoCreditRequest:
    path_params: GetVideoCreditPathParams = field(default=None)
    

@dataclass
class GetVideoCreditResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    credit: Optional[shared.Credit] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    

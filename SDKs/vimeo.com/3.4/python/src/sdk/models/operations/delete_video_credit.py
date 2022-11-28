from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteVideoCreditPathParams:
    credit_id: float = field(metadata={'path_param': { 'field_name': 'credit_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVideoCreditSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteVideoCreditRequest:
    path_params: DeleteVideoCreditPathParams = field()
    security: DeleteVideoCreditSecurity = field()
    

@dataclass
class DeleteVideoCreditResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    

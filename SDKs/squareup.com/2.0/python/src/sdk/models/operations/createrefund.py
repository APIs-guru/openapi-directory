from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateRefundPathParams:
    location_id: str = field(default=None, metadata={'path_param': { 'field_name': 'location_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateRefundSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateRefundRequest:
    path_params: CreateRefundPathParams = field(default=None)
    request: shared.V1CreateRefundRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateRefundSecurity = field(default=None)
    

@dataclass
class CreateRefundResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    v1_refund: Optional[shared.V1Refund] = field(default=None)
    

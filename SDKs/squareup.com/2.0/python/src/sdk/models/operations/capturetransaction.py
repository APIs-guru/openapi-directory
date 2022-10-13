from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CaptureTransactionPathParams:
    location_id: str = field(default=None, metadata={'path_param': { 'field_name': 'location_id', 'style': 'simple', 'explode': False }})
    transaction_id: str = field(default=None, metadata={'path_param': { 'field_name': 'transaction_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CaptureTransactionSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CaptureTransactionRequest:
    path_params: CaptureTransactionPathParams = field(default=None)
    security: CaptureTransactionSecurity = field(default=None)
    

@dataclass
class CaptureTransactionResponse:
    capture_transaction_response: Optional[shared.CaptureTransactionResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

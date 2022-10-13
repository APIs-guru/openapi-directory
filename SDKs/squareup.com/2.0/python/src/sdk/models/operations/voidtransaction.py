from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VoidTransactionPathParams:
    location_id: str = field(default=None, metadata={'path_param': { 'field_name': 'location_id', 'style': 'simple', 'explode': False }})
    transaction_id: str = field(default=None, metadata={'path_param': { 'field_name': 'transaction_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VoidTransactionSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class VoidTransactionRequest:
    path_params: VoidTransactionPathParams = field(default=None)
    security: VoidTransactionSecurity = field(default=None)
    

@dataclass
class VoidTransactionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    void_transaction_response: Optional[shared.VoidTransactionResponse] = field(default=None)
    

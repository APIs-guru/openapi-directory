from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveTransactionPathParams:
    location_id: str = field(default=None, metadata={'path_param': { 'field_name': 'location_id', 'style': 'simple', 'explode': False }})
    transaction_id: str = field(default=None, metadata={'path_param': { 'field_name': 'transaction_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveTransactionSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveTransactionRequest:
    path_params: RetrieveTransactionPathParams = field(default=None)
    security: RetrieveTransactionSecurity = field(default=None)
    

@dataclass
class RetrieveTransactionResponse:
    content_type: str = field(default=None)
    retrieve_transaction_response: Optional[shared.RetrieveTransactionResponse] = field(default=None)
    status_code: int = field(default=None)
    

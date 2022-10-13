from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV2LocationsLocationIDTransactionsTransactionIDRefundPathParams:
    location_id: str = field(default=None, metadata={'path_param': { 'field_name': 'location_id', 'style': 'simple', 'explode': False }})
    transaction_id: str = field(default=None, metadata={'path_param': { 'field_name': 'transaction_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV2LocationsLocationIDTransactionsTransactionIDRefundSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostV2LocationsLocationIDTransactionsTransactionIDRefundRequest:
    path_params: PostV2LocationsLocationIDTransactionsTransactionIDRefundPathParams = field(default=None)
    request: shared.CreateRefundRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostV2LocationsLocationIDTransactionsTransactionIDRefundSecurity = field(default=None)
    

@dataclass
class PostV2LocationsLocationIDTransactionsTransactionIDRefundResponse:
    content_type: str = field(default=None)
    create_refund_response: Optional[shared.CreateRefundResponse] = field(default=None)
    status_code: int = field(default=None)
    

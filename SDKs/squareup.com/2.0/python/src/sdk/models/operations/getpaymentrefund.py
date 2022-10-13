from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPaymentRefundPathParams:
    refund_id: str = field(default=None, metadata={'path_param': { 'field_name': 'refund_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPaymentRefundSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPaymentRefundRequest:
    path_params: GetPaymentRefundPathParams = field(default=None)
    security: GetPaymentRefundSecurity = field(default=None)
    

@dataclass
class GetPaymentRefundResponse:
    content_type: str = field(default=None)
    get_payment_refund_response: Optional[shared.GetPaymentRefundResponse] = field(default=None)
    status_code: int = field(default=None)
    

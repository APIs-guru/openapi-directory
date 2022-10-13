from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetPaymentsForPayoutV3PathParams:
    payout_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payoutId', 'style': 'simple', 'explode': False }})
    
class GetPaymentsForPayoutV3StatusEnum(str, Enum):
    ACCEPTED = "ACCEPTED"
    REJECTED = "REJECTED"
    WITHDRAWN = "WITHDRAWN"
    WITHDRAWABLE = "WITHDRAWABLE"

class GetPaymentsForPayoutV3TransmissionTypeEnum(str, Enum):
    ACH = "ACH"
    SAME_DAY_ACH = "SAME_DAY_ACH"
    WIRE = "WIRE"


@dataclass
class GetPaymentsForPayoutV3QueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    payment_memo: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'paymentMemo', 'style': 'form', 'explode': True }})
    payor_payment_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'payorPaymentId', 'style': 'form', 'explode': True }})
    remote_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'remoteId', 'style': 'form', 'explode': True }})
    source_account_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sourceAccountName', 'style': 'form', 'explode': True }})
    status: Optional[GetPaymentsForPayoutV3StatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    transmission_type: Optional[GetPaymentsForPayoutV3TransmissionTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'transmissionType', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPaymentsForPayoutV3Request:
    path_params: GetPaymentsForPayoutV3PathParams = field(default=None)
    query_params: GetPaymentsForPayoutV3QueryParams = field(default=None)
    

@dataclass
class GetPaymentsForPayoutV3Response:
    content_type: str = field(default=None)
    paged_payments_response_v3: Optional[shared.PagedPaymentsResponseV3] = field(default=None)
    status_code: int = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    

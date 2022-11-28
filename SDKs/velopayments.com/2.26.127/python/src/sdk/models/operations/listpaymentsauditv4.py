from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class ListPaymentsAuditV4StatusEnum(str, Enum):
    ACCEPTED = "ACCEPTED"
    AWAITING_FUNDS = "AWAITING_FUNDS"
    FUNDED = "FUNDED"
    UNFUNDED = "UNFUNDED"
    BANK_PAYMENT_REQUESTED = "BANK_PAYMENT_REQUESTED"
    REJECTED = "REJECTED"
    ACCEPTED_BY_RAILS = "ACCEPTED_BY_RAILS"
    CONFIRMED = "CONFIRMED"
    FAILED = "FAILED"
    RETURNED = "RETURNED"
    WITHDRAWN = "WITHDRAWN"

class ListPaymentsAuditV4TransmissionTypeEnum(str, Enum):
    ACH = "ACH"
    SAME_DAY_ACH = "SAME_DAY_ACH"
    WIRE = "WIRE"


@dataclass
class ListPaymentsAuditV4QueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    payee_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'payeeId', 'style': 'form', 'explode': True }})
    payment_amount_from: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'paymentAmountFrom', 'style': 'form', 'explode': True }})
    payment_amount_to: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'paymentAmountTo', 'style': 'form', 'explode': True }})
    payment_currency: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'paymentCurrency', 'style': 'form', 'explode': True }})
    payment_memo: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'paymentMemo', 'style': 'form', 'explode': True }})
    payor_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    payor_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'payorName', 'style': 'form', 'explode': True }})
    remote_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'remoteId', 'style': 'form', 'explode': True }})
    remote_system_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'remoteSystemId', 'style': 'form', 'explode': True }})
    sensitive: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sensitive', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    source_account_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sourceAccountName', 'style': 'form', 'explode': True }})
    source_amount_from: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'sourceAmountFrom', 'style': 'form', 'explode': True }})
    source_amount_to: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'sourceAmountTo', 'style': 'form', 'explode': True }})
    source_currency: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sourceCurrency', 'style': 'form', 'explode': True }})
    status: Optional[ListPaymentsAuditV4StatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    submitted_date_from: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'submittedDateFrom', 'style': 'form', 'explode': True }})
    submitted_date_to: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'submittedDateTo', 'style': 'form', 'explode': True }})
    transmission_type: Optional[ListPaymentsAuditV4TransmissionTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'transmissionType', 'style': 'form', 'explode': True }})
    

@dataclass
class ListPaymentsAuditV4Request:
    query_params: ListPaymentsAuditV4QueryParams = field()
    

@dataclass
class ListPaymentsAuditV4Response:
    content_type: str = field()
    status_code: int = field()
    list_payments_response_v4: Optional[shared.ListPaymentsResponseV4] = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    

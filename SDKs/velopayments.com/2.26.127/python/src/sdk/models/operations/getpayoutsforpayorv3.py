from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from sdk.models import shared

class GetPayoutsForPayorV3StatusEnum(str, Enum):
    ACCEPTED = "ACCEPTED"
    REJECTED = "REJECTED"
    SUBMITTED = "SUBMITTED"
    QUOTED = "QUOTED"
    INSTRUCTED = "INSTRUCTED"
    COMPLETED = "COMPLETED"
    INCOMPLETE = "INCOMPLETE"
    CONFIRMED = "CONFIRMED"
    WITHDRAWN = "WITHDRAWN"


@dataclass
class GetPayoutsForPayorV3QueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    payor_id: str = field(default=None, metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    payout_memo: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'payoutMemo', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    status: Optional[GetPayoutsForPayorV3StatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    submitted_date_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'submittedDateFrom', 'style': 'form', 'explode': True }})
    submitted_date_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'submittedDateTo', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPayoutsForPayorV3Request:
    query_params: GetPayoutsForPayorV3QueryParams = field(default=None)
    

@dataclass
class GetPayoutsForPayorV3Response:
    content_type: str = field(default=None)
    get_payouts_response_v3: Optional[shared.GetPayoutsResponseV3] = field(default=None)
    status_code: int = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    

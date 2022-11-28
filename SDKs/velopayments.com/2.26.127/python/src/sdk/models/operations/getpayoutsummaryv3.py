from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetPayoutSummaryV3PathParams:
    payout_id: str = field(metadata={'path_param': { 'field_name': 'payoutId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayoutSummaryV3Request:
    path_params: GetPayoutSummaryV3PathParams = field()
    

@dataclass
class GetPayoutSummaryV3Response:
    content_type: str = field()
    status_code: int = field()
    payout_summary_response_v3: Optional[shared.PayoutSummaryResponseV3] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    

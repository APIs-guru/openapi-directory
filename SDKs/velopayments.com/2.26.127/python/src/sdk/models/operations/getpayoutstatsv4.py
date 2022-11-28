from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetPayoutStatsV4QueryParams:
    payor_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPayoutStatsV4Request:
    query_params: GetPayoutStatsV4QueryParams = field()
    

@dataclass
class GetPayoutStatsV4Response:
    content_type: str = field()
    status_code: int = field()
    get_payout_statistics: Optional[shared.GetPayoutStatistics] = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    

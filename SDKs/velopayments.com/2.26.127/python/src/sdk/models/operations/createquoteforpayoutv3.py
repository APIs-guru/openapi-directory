from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CreateQuoteForPayoutV3PathParams:
    payout_id: str = field(metadata={'path_param': { 'field_name': 'payoutId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateQuoteForPayoutV3Request:
    path_params: CreateQuoteForPayoutV3PathParams = field()
    

@dataclass
class CreateQuoteForPayoutV3Response:
    content_type: str = field()
    status_code: int = field()
    quote_response_v3: Optional[shared.QuoteResponseV3] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    inline_response_409: Optional[Any] = field(default=None)
    

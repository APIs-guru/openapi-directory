from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListSupportedCurrenciesV2Response:
    content_type: str = field()
    status_code: int = field()
    supported_currency_response_v2: Optional[shared.SupportedCurrencyResponseV2] = field(default=None)
    

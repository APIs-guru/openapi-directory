from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ListPaymentChannelRulesV1Response:
    content_type: str = field()
    status_code: int = field()
    payment_channel_rules_response: Optional[shared.PaymentChannelRulesResponse] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    

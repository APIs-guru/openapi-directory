from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class ListPaymentChannelRulesV1Response:
    content_type: str = field(default=None)
    payment_channel_rules_response: Optional[shared.PaymentChannelRulesResponse] = field(default=None)
    status_code: int = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    

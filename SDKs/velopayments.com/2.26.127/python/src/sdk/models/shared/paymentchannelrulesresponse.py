from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import paymentchannelcountry


@dataclass_json
@dataclass
class PaymentChannelRulesResponse:
    bank: Optional[List[paymentchannelcountry.PaymentChannelCountry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bank' }})
    

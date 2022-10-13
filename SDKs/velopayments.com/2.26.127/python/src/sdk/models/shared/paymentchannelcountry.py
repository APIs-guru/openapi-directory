from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import paymentchannelrule


@dataclass_json
@dataclass
class PaymentChannelCountry:
    iso_country_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isoCountryCode' }})
    rules: List[paymentchannelrule.PaymentChannelRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    

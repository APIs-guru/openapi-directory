from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PricingV1VoiceVoiceNumberInboundCallPrice:
    r"""PricingV1VoiceVoiceNumberInboundCallPrice
    The InboundCallPrice record
    """
    
    base_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base_price') }})
    current_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_price') }})
    number_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number_type') }})
    

@dataclass_json
@dataclass
class PricingV1VoiceVoiceNumberOutboundCallPrice:
    r"""PricingV1VoiceVoiceNumberOutboundCallPrice
    The OutboundCallPrice record
    """
    
    base_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base_price') }})
    current_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_price') }})
    

@dataclass_json
@dataclass
class PricingV1VoiceVoiceNumber:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    inbound_call_price: Optional[PricingV1VoiceVoiceNumberInboundCallPrice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inbound_call_price') }})
    iso_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso_country') }})
    number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    outbound_call_price: Optional[PricingV1VoiceVoiceNumberOutboundCallPrice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outbound_call_price') }})
    price_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_unit') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

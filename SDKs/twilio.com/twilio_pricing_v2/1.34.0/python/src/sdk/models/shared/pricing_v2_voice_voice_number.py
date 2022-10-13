from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PricingV2VoiceVoiceNumberInboundCallPrice:
    base_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base_price' }})
    current_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_price' }})
    number_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number_type' }})
    

@dataclass_json
@dataclass
class PricingV2VoiceVoiceNumberOutboundCallPrices:
    base_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base_price' }})
    current_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_price' }})
    origination_prefixes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'origination_prefixes' }})
    

@dataclass_json
@dataclass
class PricingV2VoiceVoiceNumber:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    destination_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_number' }})
    inbound_call_price: Optional[PricingV2VoiceVoiceNumberInboundCallPrice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inbound_call_price' }})
    iso_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso_country' }})
    origination_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'origination_number' }})
    outbound_call_prices: Optional[List[PricingV2VoiceVoiceNumberOutboundCallPrices]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outbound_call_prices' }})
    price_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_unit' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

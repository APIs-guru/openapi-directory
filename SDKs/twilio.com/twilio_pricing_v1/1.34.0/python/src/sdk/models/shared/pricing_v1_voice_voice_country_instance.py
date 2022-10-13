from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PricingV1VoiceVoiceCountryInstanceInboundCallPrices:
    base_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base_price' }})
    current_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_price' }})
    number_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number_type' }})
    

@dataclass_json
@dataclass
class PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices:
    base_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base_price' }})
    current_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_price' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    prefixes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefixes' }})
    

@dataclass_json
@dataclass
class PricingV1VoiceVoiceCountryInstance:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    inbound_call_prices: Optional[List[PricingV1VoiceVoiceCountryInstanceInboundCallPrices]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inbound_call_prices' }})
    iso_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso_country' }})
    outbound_prefix_prices: Optional[List[PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outbound_prefix_prices' }})
    price_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_unit' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

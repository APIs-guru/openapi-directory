from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PricingV2VoiceVoiceCountryInstanceInboundCallPrices:
    base_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base_price' }})
    current_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_price' }})
    number_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number_type' }})
    

@dataclass_json
@dataclass
class PricingV2VoiceVoiceCountryInstanceOutboundPrefixPrices:
    base_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base_price' }})
    current_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_price' }})
    destination_prefixes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_prefixes' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    origination_prefixes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'origination_prefixes' }})
    

@dataclass_json
@dataclass
class PricingV2VoiceVoiceCountryInstance:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    inbound_call_prices: Optional[List[PricingV2VoiceVoiceCountryInstanceInboundCallPrices]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inbound_call_prices' }})
    iso_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso_country' }})
    outbound_prefix_prices: Optional[List[PricingV2VoiceVoiceCountryInstanceOutboundPrefixPrices]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outbound_prefix_prices' }})
    price_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_unit' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

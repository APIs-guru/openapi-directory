from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PricingV2TrunkingNumberOriginatingCallPrice:
    base_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base_price' }})
    current_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_price' }})
    number_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number_type' }})
    

@dataclass_json
@dataclass
class PricingV2TrunkingNumberTerminatingPrefixPrices:
    base_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base_price' }})
    current_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_price' }})
    destination_prefixes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_prefixes' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    origination_prefixes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'origination_prefixes' }})
    

@dataclass_json
@dataclass
class PricingV2TrunkingNumber:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    destination_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_number' }})
    iso_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso_country' }})
    originating_call_price: Optional[PricingV2TrunkingNumberOriginatingCallPrice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originating_call_price' }})
    origination_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'origination_number' }})
    price_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_unit' }})
    terminating_prefix_prices: Optional[List[PricingV2TrunkingNumberTerminatingPrefixPrices]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'terminating_prefix_prices' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

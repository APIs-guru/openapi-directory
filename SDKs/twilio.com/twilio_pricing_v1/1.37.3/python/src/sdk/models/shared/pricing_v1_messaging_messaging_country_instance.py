from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PricingV1MessagingMessagingCountryInstanceInboundSmsPrices:
    base_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base_price') }})
    current_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_price') }})
    number_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number_type') }})
    

@dataclass_json
@dataclass
class PricingV1MessagingMessagingCountryInstanceOutboundSmsPricesPrices:
    base_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base_price') }})
    current_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_price') }})
    number_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number_type') }})
    

@dataclass_json
@dataclass
class PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices:
    carrier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier') }})
    mcc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcc') }})
    mnc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mnc') }})
    prices: Optional[List[PricingV1MessagingMessagingCountryInstanceOutboundSmsPricesPrices]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    

@dataclass_json
@dataclass
class PricingV1MessagingMessagingCountryInstance:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    inbound_sms_prices: Optional[List[PricingV1MessagingMessagingCountryInstanceInboundSmsPrices]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inbound_sms_prices') }})
    iso_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso_country') }})
    outbound_sms_prices: Optional[List[PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outbound_sms_prices') }})
    price_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_unit') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

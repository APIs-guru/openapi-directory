from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PricingV1PhoneNumberPhoneNumberCountryInstancePhoneNumberPrices:
    base_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base_price') }})
    current_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_price') }})
    number_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number_type') }})
    

@dataclass_json
@dataclass
class PricingV1PhoneNumberPhoneNumberCountryInstance:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    iso_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso_country') }})
    phone_number_prices: Optional[List[PricingV1PhoneNumberPhoneNumberCountryInstancePhoneNumberPrices]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_number_prices') }})
    price_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_unit') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PricingV1PhoneNumberPhoneNumberCountry:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    iso_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso_country' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

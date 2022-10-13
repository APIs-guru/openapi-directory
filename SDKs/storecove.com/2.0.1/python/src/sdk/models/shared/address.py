from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import country_enum


@dataclass_json
@dataclass
class Address:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    country: country_enum.CountryEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    county: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'county' }})
    street1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'street1' }})
    street2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'street2' }})
    zip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zip' }})
    

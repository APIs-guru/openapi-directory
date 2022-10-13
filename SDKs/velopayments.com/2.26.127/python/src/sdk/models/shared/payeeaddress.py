from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PayeeAddress:
    city: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    country: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    county_or_province: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countyOrProvince' }})
    line1: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line1' }})
    line2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line2' }})
    line3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line3' }})
    line4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line4' }})
    zip_or_postcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zipOrPostcode' }})
    

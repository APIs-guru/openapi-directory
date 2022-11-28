from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PayorAddress:
    city: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    line1: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('line1') }})
    county_or_province: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countyOrProvince') }})
    line2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line2') }})
    line3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line3') }})
    line4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line4') }})
    zip_or_postcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zipOrPostcode') }})
    

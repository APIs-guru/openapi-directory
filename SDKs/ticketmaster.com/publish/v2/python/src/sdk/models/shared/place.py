from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Place:
    r"""Place
    Place
    """
    
    address: Optional[Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    area: Optional[Area] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('area') }})
    city: Optional[City] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[Country] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    location: Optional[Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    names: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    state: Optional[State] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

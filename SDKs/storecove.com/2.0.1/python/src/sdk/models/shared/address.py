from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Address:
    r"""Address
    The address
    """
    
    country: CountryEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    county: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('county') }})
    street1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('street1') }})
    street2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('street2') }})
    zip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip') }})
    

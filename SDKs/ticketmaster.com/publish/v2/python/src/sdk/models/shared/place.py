from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import address
from . import area
from . import city
from . import country
from . import location
from . import state


@dataclass_json
@dataclass
class Place:
    address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    area: Optional[area.Area] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'area' }})
    city: Optional[city.City] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    country: Optional[country.Country] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    names: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'names' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCode' }})
    state: Optional[state.State] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

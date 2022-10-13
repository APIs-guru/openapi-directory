from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import state_enum


@dataclass_json
@dataclass
class HomeAddress:
    address_line1: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddressLine1' }})
    address_line2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddressLine2' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'City' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Country' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostalCode' }})
    region: Optional[state_enum.StateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Region' }})
    

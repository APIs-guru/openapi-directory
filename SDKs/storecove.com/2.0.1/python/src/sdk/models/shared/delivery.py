from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import address


@dataclass_json
@dataclass
class DeliveryLocation:
    address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    scheme_agency_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemeAgencyId' }})
    scheme_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemeId' }})
    

@dataclass_json
@dataclass
class Delivery:
    actual_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actualDate' }})
    location: Optional[DeliveryLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    

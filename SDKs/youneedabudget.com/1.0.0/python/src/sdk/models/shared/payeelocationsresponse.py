from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import payeelocation


@dataclass_json
@dataclass
class PayeeLocationsResponseData:
    payee_locations: List[payeelocation.PayeeLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee_locations' }})
    

@dataclass_json
@dataclass
class PayeeLocationsResponse:
    data: PayeeLocationsResponseData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

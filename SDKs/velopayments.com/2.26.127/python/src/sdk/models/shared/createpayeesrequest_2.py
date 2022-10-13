from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import createpayee_2


@dataclass_json
@dataclass
class CreatePayeesRequest2:
    payees: List[createpayee_2.CreatePayee2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payees' }})
    payor_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorId' }})
    

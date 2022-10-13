from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import createpayee


@dataclass_json
@dataclass
class CreatePayeesRequest:
    payees: List[createpayee.CreatePayee] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payees' }})
    payor_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorId' }})
    

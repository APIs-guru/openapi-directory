from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import payee


@dataclass_json
@dataclass
class PayeesResponseData:
    payees: List[payee.Payee] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payees' }})
    server_knowledge: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_knowledge' }})
    

@dataclass_json
@dataclass
class PayeesResponse:
    data: PayeesResponseData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

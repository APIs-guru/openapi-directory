from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import payee


@dataclass_json
@dataclass
class PayeeResponseData:
    payee: payee.Payee = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee' }})
    

@dataclass_json
@dataclass
class PayeeResponse:
    data: PayeeResponseData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

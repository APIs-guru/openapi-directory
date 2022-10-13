from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import payeelocation


@dataclass_json
@dataclass
class PayeeLocationResponseData:
    payee_location: payeelocation.PayeeLocation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee_location' }})
    

@dataclass_json
@dataclass
class PayeeLocationResponse:
    data: PayeeLocationResponseData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

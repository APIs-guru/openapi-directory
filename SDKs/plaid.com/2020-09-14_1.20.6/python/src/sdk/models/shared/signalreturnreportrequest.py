from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SignalReturnReportRequest:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    client_transaction_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_transaction_id' }})
    return_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'return_code' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    

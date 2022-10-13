from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BankTransferMigrateAccountRequest:
    account_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_number' }})
    account_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_type' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    routing_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routing_number' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    

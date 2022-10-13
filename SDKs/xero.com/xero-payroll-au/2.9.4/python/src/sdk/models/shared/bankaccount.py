from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BankAccount:
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountName' }})
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountNumber' }})
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    bsb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BSB' }})
    remainder: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Remainder' }})
    statement_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatementText' }})
    

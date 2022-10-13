from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bankaccount
from . import error


@dataclass_json
@dataclass
class ListBankAccountsResponse:
    bank_accounts: Optional[List[bankaccount.BankAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bank_accounts' }})
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

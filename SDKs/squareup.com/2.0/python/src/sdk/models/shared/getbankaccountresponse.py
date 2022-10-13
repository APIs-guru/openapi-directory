from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bankaccount
from . import error


@dataclass_json
@dataclass
class GetBankAccountResponse:
    bank_account: Optional[bankaccount.BankAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bank_account' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

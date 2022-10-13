from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import account


@dataclass_json
@dataclass
class AccountResponseData:
    account: account.Account = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    

@dataclass_json
@dataclass
class AccountResponse:
    data: AccountResponseData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

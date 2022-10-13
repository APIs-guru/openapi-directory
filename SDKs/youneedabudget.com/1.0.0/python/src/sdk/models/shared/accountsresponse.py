from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import account


@dataclass_json
@dataclass
class AccountsResponseData:
    accounts: List[account.Account] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accounts' }})
    server_knowledge: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_knowledge' }})
    

@dataclass_json
@dataclass
class AccountsResponse:
    data: AccountsResponseData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountsResponseData:
    accounts: List[Account] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    server_knowledge: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_knowledge') }})
    

@dataclass_json
@dataclass
class AccountsResponse:
    data: AccountsResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

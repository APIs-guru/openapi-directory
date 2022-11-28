from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountResponseData:
    account: Account = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    

@dataclass_json
@dataclass
class AccountResponse:
    data: AccountResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

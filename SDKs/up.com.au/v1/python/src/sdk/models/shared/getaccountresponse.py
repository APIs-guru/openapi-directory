from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetAccountResponse:
    r"""GetAccountResponse
    Successful response to get a single account.
    
    """
    
    data: AccountResource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

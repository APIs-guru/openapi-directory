from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAccountsResponseLinks:
    next: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    prev: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    

@dataclass_json
@dataclass
class ListAccountsResponse:
    r"""ListAccountsResponse
    Successful response to get all accounts. This returns a paginated list of
    accounts, which can be scrolled by following the `prev` and `next` links
    if present.
    
    """
    
    data: List[AccountResource] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: ListAccountsResponseLinks = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

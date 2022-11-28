from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTransactionsResponseLinks:
    next: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    prev: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    

@dataclass_json
@dataclass
class ListTransactionsResponse:
    r"""ListTransactionsResponse
    Successful response to get all transactions. This returns a paginated
    list of transactions, which can be scrolled by following the `prev` and
    `next` links if present.
    
    """
    
    data: List[TransactionResource] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: ListTransactionsResponseLinks = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

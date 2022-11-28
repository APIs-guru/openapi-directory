from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FeedConnections:
    r"""FeedConnections

    https://developer.xero.com/documentation/bank-feeds-api/feed-connections
    """
    
    items: Optional[List[FeedConnection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    pagination: Optional[Pagination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

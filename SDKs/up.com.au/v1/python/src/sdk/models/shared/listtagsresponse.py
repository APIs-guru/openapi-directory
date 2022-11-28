from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTagsResponseLinks:
    next: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    prev: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    

@dataclass_json
@dataclass
class ListTagsResponse:
    r"""ListTagsResponse
    Successful response to get all tags. This returns a paginated list of
    tags, which can be scrolled by following the `prev` and `next` links if
    present.
    
    """
    
    data: List[TagResource] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: ListTagsResponseLinks = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

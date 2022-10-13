from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import accountresource


@dataclass_json
@dataclass
class ListAccountsResponseLinks:
    next: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    prev: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prev' }})
    

@dataclass_json
@dataclass
class ListAccountsResponse:
    data: List[accountresource.AccountResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    links: ListAccountsResponseLinks = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    

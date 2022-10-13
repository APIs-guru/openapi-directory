from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import link
from . import statementsviewmodel


@dataclass_json
@dataclass
class StatementsViewModelItem:
    links: Optional[List[link.Link]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    value: Optional[statementsviewmodel.StatementsViewModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

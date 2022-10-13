from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import link
from . import registeredinterestcategory


@dataclass_json
@dataclass
class RegisteredInterestCategoryListItem:
    links: Optional[List[link.Link]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    value: Optional[List[registeredinterestcategory.RegisteredInterestCategory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

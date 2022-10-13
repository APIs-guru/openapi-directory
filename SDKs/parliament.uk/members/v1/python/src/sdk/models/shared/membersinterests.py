from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import registeredinterestcategory
from . import member


@dataclass_json
@dataclass
class MembersInterests:
    interest_categories: Optional[List[registeredinterestcategory.RegisteredInterestCategory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interestCategories' }})
    member: Optional[member.Member] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'member' }})
    

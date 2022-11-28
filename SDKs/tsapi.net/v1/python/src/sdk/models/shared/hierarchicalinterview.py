from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HierarchicalInterviewLevel:
    ident: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ident') }})
    

@dataclass_json
@dataclass
class HierarchicalInterview:
    data_items: Optional[List[DataItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataItems') }})
    hierarchical_interviews: Optional[List[HierarchicalInterview]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hierarchicalInterviews') }})
    ident: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ident') }})
    level: Optional[HierarchicalInterviewLevel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HierarchyMetadata:
    interview_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interviewCount') }})
    languages: Optional[List[Language]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    variables: Optional[List[Variable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variables') }})
    

@dataclass_json
@dataclass
class HierarchyParent:
    level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    link_var: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkVar') }})
    ordered: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ordered') }})
    

@dataclass_json
@dataclass
class Hierarchy:
    ident: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ident') }})
    metadata: Optional[HierarchyMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    parent: Optional[HierarchyParent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    

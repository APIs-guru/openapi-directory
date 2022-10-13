from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import language
from . import variable


@dataclass_json
@dataclass
class HierarchyMetadata:
    interview_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interviewCount' }})
    languages: Optional[List[language.Language]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languages' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    variables: Optional[List[variable.Variable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variables' }})
    

@dataclass_json
@dataclass
class HierarchyParent:
    level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'level' }})
    link_var: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkVar' }})
    ordered: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ordered' }})
    

@dataclass_json
@dataclass
class Hierarchy:
    ident: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ident' }})
    metadata: Optional[HierarchyMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    parent: Optional[HierarchyParent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    

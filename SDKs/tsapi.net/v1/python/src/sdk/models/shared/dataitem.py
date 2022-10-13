from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DataItemParentIdent:
    parent_value_ident: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentValueIdent' }})
    parent_variable_ident: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentVariableIdent' }})
    

@dataclass_json
@dataclass
class DataItem:
    ident: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ident' }})
    parent_ident: Optional[DataItemParentIdent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentIdent' }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    

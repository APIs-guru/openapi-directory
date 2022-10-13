from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import meta31
from . import meta32


@dataclass_json
@dataclass
class SavedQueryRestAPIGet:
    created_by: Optional[meta31.Meta31] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    database: Optional[meta32.Meta32] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sql' }})
    sql_tables: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sql_tables' }})
    

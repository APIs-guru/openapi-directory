from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SavedQueryRestAPIGet:
    created_by: Optional[Meta31] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    database: Optional[Meta32] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sql') }})
    sql_tables: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sql_tables') }})
    

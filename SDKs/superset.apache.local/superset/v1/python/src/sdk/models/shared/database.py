from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Database:
    allow_multi_schema_metadata_fetch: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_multi_schema_metadata_fetch') }})
    allows_cost_estimate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allows_cost_estimate') }})
    allows_subquery: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allows_subquery') }})
    allows_virtual_table_explore: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allows_virtual_table_explore') }})
    backend: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backend') }})
    explore_database_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explore_database_id') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

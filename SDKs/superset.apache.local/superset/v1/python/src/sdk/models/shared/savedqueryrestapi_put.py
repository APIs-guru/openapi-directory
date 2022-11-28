from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SavedQueryRestAPIPut:
    db_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('db_id') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sql') }})
    

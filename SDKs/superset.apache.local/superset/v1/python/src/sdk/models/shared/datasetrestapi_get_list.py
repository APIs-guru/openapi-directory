from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DatasetRestAPIGetList:
    database: Meta21 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('table_name') }})
    changed_by: Optional[Meta19] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_by') }})
    changed_by_name: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_by_name') }})
    changed_by_url: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_by_url') }})
    changed_on_delta_humanized: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_on_delta_humanized') }})
    changed_on_utc: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_on_utc') }})
    default_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_endpoint') }})
    explore_url: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explore_url') }})
    extra: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extra') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    owners: Optional[Meta20] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owners') }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sql') }})
    

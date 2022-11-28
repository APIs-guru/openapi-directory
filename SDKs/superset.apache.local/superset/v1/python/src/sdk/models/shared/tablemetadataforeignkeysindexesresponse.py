from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TableMetadataForeignKeysIndexesResponse:
    column_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column_names') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    options: Optional[TableMetadataOptionsResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    referred_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referred_columns') }})
    referred_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referred_schema') }})
    referred_table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referred_table') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

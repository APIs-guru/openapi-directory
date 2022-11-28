from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TableMetadataResponseSchema:
    columns: Optional[List[TableMetadataColumnsResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    foreign_keys: Optional[List[TableMetadataForeignKeysIndexesResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('foreignKeys') }})
    indexes: Optional[List[TableMetadataForeignKeysIndexesResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexes') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    primary_key: Optional[TableMetadataPrimaryKeyResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryKey') }})
    select_star: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectStar') }})
    

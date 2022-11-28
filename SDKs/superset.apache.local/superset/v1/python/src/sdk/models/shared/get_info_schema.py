from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetInfoSchemaAddColumns:
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    

@dataclass_json
@dataclass
class GetInfoSchemaEditColumns:
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    
class GetInfoSchemaKeysEnum(str, Enum):
    ADD_COLUMNS = "add_columns"
    EDIT_COLUMNS = "edit_columns"
    FILTERS = "filters"
    PERMISSIONS = "permissions"
    ADD_TITLE = "add_title"
    EDIT_TITLE = "edit_title"
    NONE = "none"


@dataclass_json
@dataclass
class GetInfoSchema:
    add_columns: Optional[dict[str, GetInfoSchemaAddColumns]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_columns') }})
    edit_columns: Optional[dict[str, GetInfoSchemaEditColumns]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('edit_columns') }})
    keys: Optional[List[GetInfoSchemaKeysEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keys') }})
    

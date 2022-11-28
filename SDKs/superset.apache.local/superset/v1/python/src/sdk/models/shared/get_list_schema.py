from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetListSchemaFilters:
    col: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('col') }})
    opr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('opr') }})
    value: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class GetListSchemaKeysEnum(str, Enum):
    LIST_COLUMNS = "list_columns"
    ORDER_COLUMNS = "order_columns"
    LABEL_COLUMNS = "label_columns"
    DESCRIPTION_COLUMNS = "description_columns"
    LIST_TITLE = "list_title"
    NONE = "none"

class GetListSchemaOrderDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclass_json
@dataclass
class GetListSchema:
    columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    filters: Optional[List[GetListSchemaFilters]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    keys: Optional[List[GetListSchemaKeysEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keys') }})
    order_column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_column') }})
    order_direction: Optional[GetListSchemaOrderDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_direction') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    

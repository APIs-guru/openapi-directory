from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetItemSchemaKeysEnum(str, Enum):
    SHOW_COLUMNS = "show_columns"
    DESCRIPTION_COLUMNS = "description_columns"
    LABEL_COLUMNS = "label_columns"
    SHOW_TITLE = "show_title"
    NONE = "none"


@dataclass_json
@dataclass
class GetItemSchema:
    columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    keys: Optional[List[GetItemSchemaKeysEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keys') }})
    

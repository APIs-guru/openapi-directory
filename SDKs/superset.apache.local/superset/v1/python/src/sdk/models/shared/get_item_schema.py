from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GetItemSchemaKeysEnum(str, Enum):
    SHOW_COLUMNS = "show_columns"
    DESCRIPTION_COLUMNS = "description_columns"
    LABEL_COLUMNS = "label_columns"
    SHOW_TITLE = "show_title"
    NONE = "none"


@dataclass_json
@dataclass
class GetItemSchema:
    columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns' }})
    keys: Optional[List[GetItemSchemaKeysEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keys' }})
    

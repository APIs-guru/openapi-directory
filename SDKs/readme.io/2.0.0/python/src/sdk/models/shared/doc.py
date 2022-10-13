from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DocTypeEnum(str, Enum):
    BASIC = "basic"
    ERROR = "error"
    LINK = "link"


@dataclass_json
@dataclass
class Doc:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    category: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    hidden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hidden' }})
    parent_doc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentDoc' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[DocTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

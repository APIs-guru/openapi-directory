from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DocTypeEnum(str, Enum):
    BASIC = "basic"
    ERROR = "error"
    LINK = "link"


@dataclass_json
@dataclass
class Doc:
    category: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    hidden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hidden') }})
    parent_doc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentDoc') }})
    type: Optional[DocTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

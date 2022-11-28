from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ChangelogTypeEnum(str, Enum):
    UNKNOWN = ""
    ADDED = "added"
    FIXED = "fixed"
    IMPROVED = "improved"
    DEPRECATED = "deprecated"
    REMOVED = "removed"


@dataclass_json
@dataclass
class Changelog:
    body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    hidden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hidden') }})
    type: Optional[ChangelogTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

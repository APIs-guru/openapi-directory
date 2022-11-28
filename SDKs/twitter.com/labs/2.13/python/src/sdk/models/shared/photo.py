from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PhotoTypeEnum(str, Enum):
    PHOTO = "photo"


@dataclass_json
@dataclass
class Photo:
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    media_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media_key') }})
    type: Optional[PhotoTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PictureSizes:
    height: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    width: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    link_with_play_button: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link_with_play_button') }})
    
class PictureTypeEnum(str, Enum):
    CAUTION = "caution"
    CUSTOM = "custom"
    DEFAULT = "default"


@dataclass_json
@dataclass
class Picture:
    active: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    resource_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    sizes: List[PictureSizes] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizes') }})
    type: PictureTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    

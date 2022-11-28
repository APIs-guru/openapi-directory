from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AnimatedGifTypeEnum(str, Enum):
    ANIMATED_GIF = "animated_gif"


@dataclass_json
@dataclass
class AnimatedGif:
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    media_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media_key') }})
    preview_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preview_image_url') }})
    type: Optional[AnimatedGifTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

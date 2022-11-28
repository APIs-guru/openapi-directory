from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VideoAsset:
    r"""VideoAsset
    The VideoAsset is used to create video sequences from video files. The src must be a publicly accessible URL to a video resource such as an mp4 file.
    """
    
    src: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('src') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    crop: Optional[Crop] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crop') }})
    trim: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trim') }})
    volume: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume') }})
    

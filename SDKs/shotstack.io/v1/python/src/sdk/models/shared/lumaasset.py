from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LumaAsset:
    r"""LumaAsset
    The LumaAsset is used to create luma matte masks, transitions and effects between other assets. A luma matte is a grey scale image or animated video where the black areas are transparent and the white areas solid. The luma matte animation should be provided as an mp4 video file. The src must be a publicly accessible URL to the file.
    """
    
    src: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('src') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    trim: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trim') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImageAsset:
    r"""ImageAsset
    The ImageAsset is used to create video from images to compose an image. The src must be a publicly accessible URL to an image resource such as a jpg or png file.
    """
    
    src: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('src') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    crop: Optional[Crop] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crop') }})
    

from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AudioAssetEffectEnum(str, Enum):
    FADE_IN = "fadeIn"
    FADE_OUT = "fadeOut"
    FADE_IN_FADE_OUT = "fadeInFadeOut"


@dataclass_json
@dataclass
class AudioAsset:
    r"""AudioAsset
    The AudioAsset is used to add sound effects and audio at specific intervals on the timeline. The src must be a publicly accessible URL to an audio resource such  as an mp3 file.
    """
    
    src: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('src') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    effect: Optional[AudioAssetEffectEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effect') }})
    trim: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trim') }})
    volume: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume') }})
    

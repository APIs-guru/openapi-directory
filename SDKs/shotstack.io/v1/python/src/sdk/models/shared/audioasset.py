from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AudioAssetEffectEnum(str, Enum):
    FADE_IN = "fadeIn"
    FADE_OUT = "fadeOut"
    FADE_IN_FADE_OUT = "fadeInFadeOut"


@dataclass_json
@dataclass
class AudioAsset:
    effect: Optional[AudioAssetEffectEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effect' }})
    src: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'src' }})
    trim: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trim' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    volume: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volume' }})
    

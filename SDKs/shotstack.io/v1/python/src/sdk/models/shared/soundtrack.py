from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SoundtrackEffectEnum(str, Enum):
    FADE_IN = "fadeIn"
    FADE_OUT = "fadeOut"
    FADE_IN_FADE_OUT = "fadeInFadeOut"


@dataclass_json
@dataclass
class Soundtrack:
    effect: Optional[SoundtrackEffectEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effect' }})
    src: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'src' }})
    volume: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volume' }})
    

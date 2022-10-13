from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class LyricsForSongContractTranslationTypeEnum(str, Enum):
    ORIGINAL = "Original"
    ROMANIZED = "Romanized"
    TRANSLATION = "Translation"


@dataclass_json
@dataclass
class LyricsForSongContract:
    culture_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cultureCode' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    translation_type: Optional[LyricsForSongContractTranslationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'translationType' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

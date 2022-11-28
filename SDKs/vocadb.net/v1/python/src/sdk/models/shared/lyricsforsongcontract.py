from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LyricsForSongContractTranslationTypeEnum(str, Enum):
    ORIGINAL = "Original"
    ROMANIZED = "Romanized"
    TRANSLATION = "Translation"


@dataclass_json
@dataclass
class LyricsForSongContract:
    culture_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cultureCode') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    translation_type: Optional[LyricsForSongContractTranslationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translationType') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LocalizedStringContractLanguageEnum(str, Enum):
    UNSPECIFIED = "Unspecified"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclass_json
@dataclass
class LocalizedStringContract:
    language: Optional[LocalizedStringContractLanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

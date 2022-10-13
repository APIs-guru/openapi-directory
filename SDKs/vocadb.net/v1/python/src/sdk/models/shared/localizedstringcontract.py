from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class LocalizedStringContractLanguageEnum(str, Enum):
    UNSPECIFIED = "Unspecified"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclass_json
@dataclass
class LocalizedStringContract:
    language: Optional[LocalizedStringContractLanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

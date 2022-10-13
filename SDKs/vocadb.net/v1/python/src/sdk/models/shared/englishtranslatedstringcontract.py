from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EnglishTranslatedStringContract:
    english: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'english' }})
    original: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'original' }})
    

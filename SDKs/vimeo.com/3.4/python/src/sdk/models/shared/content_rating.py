from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class ContentRatingCodeEnum(str, Enum):
    DRUGS = "drugs"
    LANGUAGE = "language"
    NUDITY = "nudity"
    SAFE = "safe"
    UNRATED = "unrated"
    VIOLENCE = "violence"


@dataclass_json
@dataclass
class ContentRating:
    code: ContentRatingCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    code: ContentRatingCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

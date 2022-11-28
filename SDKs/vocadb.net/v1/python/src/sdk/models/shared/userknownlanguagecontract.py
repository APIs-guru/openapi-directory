from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UserKnownLanguageContractProficiencyEnum(str, Enum):
    NOTHING = "Nothing"
    BASICS = "Basics"
    INTERMEDIATE = "Intermediate"
    ADVANCED = "Advanced"
    NATIVE = "Native"


@dataclass_json
@dataclass
class UserKnownLanguageContract:
    culture_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cultureCode') }})
    proficiency: Optional[UserKnownLanguageContractProficiencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proficiency') }})
    

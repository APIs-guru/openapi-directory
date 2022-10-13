from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class UserKnownLanguageContractProficiencyEnum(str, Enum):
    NOTHING = "Nothing"
    BASICS = "Basics"
    INTERMEDIATE = "Intermediate"
    ADVANCED = "Advanced"
    NATIVE = "Native"


@dataclass_json
@dataclass
class UserKnownLanguageContract:
    culture_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cultureCode' }})
    proficiency: Optional[UserKnownLanguageContractProficiencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proficiency' }})
    

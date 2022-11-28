from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CreativeCommonsCodeEnum(str, Enum):
    BY = "by"
    BY_NC = "by-nc"
    BY_NC_ND = "by-nc-nd"
    BY_NC_SA = "by-nc-sa"
    BY_ND = "by-nd"
    BY_SA = "by-sa"
    CC0 = "cc0"


@dataclass_json
@dataclass
class CreativeCommons:
    code: CreativeCommonsCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

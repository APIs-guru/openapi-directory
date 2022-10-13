from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

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
    code: CreativeCommonsCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

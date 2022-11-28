from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AlbumDiscPropertiesContractMediaTypeEnum(str, Enum):
    AUDIO = "Audio"
    VIDEO = "Video"


@dataclass_json
@dataclass
class AlbumDiscPropertiesContract:
    disc_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discNumber') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    media_type: Optional[AlbumDiscPropertiesContractMediaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

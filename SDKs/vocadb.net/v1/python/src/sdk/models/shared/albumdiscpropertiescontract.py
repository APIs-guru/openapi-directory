from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AlbumDiscPropertiesContractMediaTypeEnum(str, Enum):
    AUDIO = "Audio"
    VIDEO = "Video"


@dataclass_json
@dataclass
class AlbumDiscPropertiesContract:
    disc_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discNumber' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    media_type: Optional[AlbumDiscPropertiesContractMediaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

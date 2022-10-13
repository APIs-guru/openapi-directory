from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import pvextendedmetadata

class PvContractPvTypeEnum(str, Enum):
    ORIGINAL = "Original"
    REPRINT = "Reprint"
    OTHER = "Other"

class PvContractServiceEnum(str, Enum):
    NICO_NICO_DOUGA = "NicoNicoDouga"
    YOUTUBE = "Youtube"
    SOUND_CLOUD = "SoundCloud"
    VIMEO = "Vimeo"
    PIAPRO = "Piapro"
    BILIBILI = "Bilibili"
    FILE = "File"
    LOCAL_FILE = "LocalFile"
    CREOFUGA = "Creofuga"
    BANDCAMP = "Bandcamp"


@dataclass_json
@dataclass
class PvContract:
    author: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    created_by: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    extended_metadata: Optional[pvextendedmetadata.PvExtendedMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extendedMetadata' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'length' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    publish_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pv_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pvId' }})
    pv_type: Optional[PvContractPvTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pvType' }})
    service: Optional[PvContractServiceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    thumb_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbUrl' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ArtistContractArtistTypeEnum(str, Enum):
    UNKNOWN = "Unknown"
    CIRCLE = "Circle"
    LABEL = "Label"
    PRODUCER = "Producer"
    ANIMATOR = "Animator"
    ILLUSTRATOR = "Illustrator"
    LYRICIST = "Lyricist"
    VOCALOID = "Vocaloid"
    UTAU = "UTAU"
    CE_VIO = "CeVIO"
    OTHER_VOICE_SYNTHESIZER = "OtherVoiceSynthesizer"
    OTHER_VOCALIST = "OtherVocalist"
    OTHER_GROUP = "OtherGroup"
    OTHER_INDIVIDUAL = "OtherIndividual"
    UTAITE = "Utaite"
    BAND = "Band"
    VOCALIST = "Vocalist"
    CHARACTER = "Character"
    SYNTHESIZER_V = "SynthesizerV"

class ArtistContractStatusEnum(str, Enum):
    DRAFT = "Draft"
    FINISHED = "Finished"
    APPROVED = "Approved"
    LOCKED = "Locked"


@dataclass_json
@dataclass
class ArtistContract:
    additional_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalNames' }})
    artist_type: Optional[ArtistContractArtistTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artistType' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    picture_mime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pictureMime' }})
    release_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releaseDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[ArtistContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

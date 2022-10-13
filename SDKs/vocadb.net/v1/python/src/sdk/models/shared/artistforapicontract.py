from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import artistforartistforapicontract
from . import artistforartistforapicontract
from . import artistcontract
from . import entrythumbforapicontract
from . import localizedstringcontract
from . import artistrelationsforapi
from . import tagusageforapicontract
from . import weblinkforapicontract

class ArtistForAPIContractArtistTypeEnum(str, Enum):
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

class ArtistForAPIContractDefaultNameLanguageEnum(str, Enum):
    UNSPECIFIED = "Unspecified"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class ArtistForAPIContractStatusEnum(str, Enum):
    DRAFT = "Draft"
    FINISHED = "Finished"
    APPROVED = "Approved"
    LOCKED = "Locked"


@dataclass_json
@dataclass
class ArtistForAPIContract:
    additional_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalNames' }})
    artist_links: Optional[List[artistforartistforapicontract.ArtistForArtistForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artistLinks' }})
    artist_links_reverse: Optional[List[artistforartistforapicontract.ArtistForArtistForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artistLinksReverse' }})
    artist_type: Optional[ArtistForAPIContractArtistTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artistType' }})
    base_voicebank: Optional[artistcontract.ArtistContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseVoicebank' }})
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultName' }})
    default_name_language: Optional[ArtistForAPIContractDefaultNameLanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultNameLanguage' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    main_picture: Optional[entrythumbforapicontract.EntryThumbForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mainPicture' }})
    merged_to: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergedTo' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    names: Optional[List[localizedstringcontract.LocalizedStringContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'names' }})
    picture_mime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pictureMime' }})
    relations: Optional[artistrelationsforapi.ArtistRelationsForAPI] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relations' }})
    release_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releaseDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[ArtistForAPIContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[tagusageforapicontract.TagUsageForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    web_links: Optional[List[weblinkforapicontract.WebLinkForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webLinks' }})
    

from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    additional_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalNames') }})
    artist_links: Optional[List[ArtistForArtistForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artistLinks') }})
    artist_links_reverse: Optional[List[ArtistForArtistForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artistLinksReverse') }})
    artist_type: Optional[ArtistForAPIContractArtistTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artistType') }})
    base_voicebank: Optional[ArtistContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseVoicebank') }})
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultName') }})
    default_name_language: Optional[ArtistForAPIContractDefaultNameLanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultNameLanguage') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    main_picture: Optional[EntryThumbForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainPicture') }})
    merged_to: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergedTo') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    names: Optional[List[LocalizedStringContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    picture_mime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictureMime') }})
    relations: Optional[ArtistRelationsForAPI] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relations') }})
    release_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[ArtistForAPIContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[TagUsageForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    web_links: Optional[List[WebLinkForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webLinks') }})
    

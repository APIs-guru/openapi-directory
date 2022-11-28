from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ArtistForAlbumForAPIContractCategoriesEnum(str, Enum):
    NOTHING = "Nothing"
    VOCALIST = "Vocalist"
    PRODUCER = "Producer"
    ANIMATOR = "Animator"
    LABEL = "Label"
    CIRCLE = "Circle"
    OTHER = "Other"
    BAND = "Band"
    ILLUSTRATOR = "Illustrator"
    SUBJECT = "Subject"

class ArtistForAlbumForAPIContractEffectiveRolesEnum(str, Enum):
    DEFAULT = "Default"
    ANIMATOR = "Animator"
    ARRANGER = "Arranger"
    COMPOSER = "Composer"
    DISTRIBUTOR = "Distributor"
    ILLUSTRATOR = "Illustrator"
    INSTRUMENTALIST = "Instrumentalist"
    LYRICIST = "Lyricist"
    MASTERING = "Mastering"
    PUBLISHER = "Publisher"
    VOCALIST = "Vocalist"
    VOICE_MANIPULATOR = "VoiceManipulator"
    OTHER = "Other"
    MIXER = "Mixer"
    CHORUS = "Chorus"
    ENCODER = "Encoder"
    VOCAL_DATA_PROVIDER = "VocalDataProvider"

class ArtistForAlbumForAPIContractRolesEnum(str, Enum):
    DEFAULT = "Default"
    ANIMATOR = "Animator"
    ARRANGER = "Arranger"
    COMPOSER = "Composer"
    DISTRIBUTOR = "Distributor"
    ILLUSTRATOR = "Illustrator"
    INSTRUMENTALIST = "Instrumentalist"
    LYRICIST = "Lyricist"
    MASTERING = "Mastering"
    PUBLISHER = "Publisher"
    VOCALIST = "Vocalist"
    VOICE_MANIPULATOR = "VoiceManipulator"
    OTHER = "Other"
    MIXER = "Mixer"
    CHORUS = "Chorus"
    ENCODER = "Encoder"
    VOCAL_DATA_PROVIDER = "VocalDataProvider"


@dataclass_json
@dataclass
class ArtistForAlbumForAPIContract:
    artist: Optional[ArtistContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artist') }})
    categories: Optional[ArtistForAlbumForAPIContractCategoriesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    effective_roles: Optional[ArtistForAlbumForAPIContractEffectiveRolesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveRoles') }})
    is_support: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSupport') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    roles: Optional[ArtistForAlbumForAPIContractRolesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    

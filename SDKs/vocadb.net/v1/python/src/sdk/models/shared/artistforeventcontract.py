from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ArtistForEventContractEffectiveRolesEnum(str, Enum):
    DEFAULT = "Default"
    DANCER = "Dancer"
    DJ = "DJ"
    INSTRUMENTALIST = "Instrumentalist"
    ORGANIZER = "Organizer"
    PROMOTER = "Promoter"
    VJ = "VJ"
    VOCALIST = "Vocalist"
    VOICE_MANIPULATOR = "VoiceManipulator"
    OTHER_PERFORMER = "OtherPerformer"
    OTHER = "Other"

class ArtistForEventContractRolesEnum(str, Enum):
    DEFAULT = "Default"
    DANCER = "Dancer"
    DJ = "DJ"
    INSTRUMENTALIST = "Instrumentalist"
    ORGANIZER = "Organizer"
    PROMOTER = "Promoter"
    VJ = "VJ"
    VOCALIST = "Vocalist"
    VOICE_MANIPULATOR = "VoiceManipulator"
    OTHER_PERFORMER = "OtherPerformer"
    OTHER = "Other"


@dataclass_json
@dataclass
class ArtistForEventContract:
    artist: Optional[ArtistContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artist') }})
    effective_roles: Optional[ArtistForEventContractEffectiveRolesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveRoles') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    roles: Optional[ArtistForEventContractRolesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    

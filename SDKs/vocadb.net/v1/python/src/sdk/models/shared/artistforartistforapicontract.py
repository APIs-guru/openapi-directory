from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ArtistForArtistForAPIContractLinkTypeEnum(str, Enum):
    CHARACTER_DESIGNER = "CharacterDesigner"
    GROUP = "Group"
    ILLUSTRATOR = "Illustrator"
    MANAGER = "Manager"
    VOICE_PROVIDER = "VoiceProvider"


@dataclass_json
@dataclass
class ArtistForArtistForAPIContract:
    artist: Optional[ArtistContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artist') }})
    link_type: Optional[ArtistForArtistForAPIContractLinkTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkType') }})
    

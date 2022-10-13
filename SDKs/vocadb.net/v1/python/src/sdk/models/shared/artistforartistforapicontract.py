from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import artistcontract

class ArtistForArtistForAPIContractLinkTypeEnum(str, Enum):
    CHARACTER_DESIGNER = "CharacterDesigner"
    GROUP = "Group"
    ILLUSTRATOR = "Illustrator"
    MANAGER = "Manager"
    VOICE_PROVIDER = "VoiceProvider"


@dataclass_json
@dataclass
class ArtistForArtistForAPIContract:
    artist: Optional[artistcontract.ArtistContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artist' }})
    link_type: Optional[ArtistForArtistForAPIContractLinkTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkType' }})
    

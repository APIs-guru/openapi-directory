from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import artistforapicontract


@dataclass_json
@dataclass
class ArtistForUserForAPIContract:
    artist: Optional[artistforapicontract.ArtistForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artist' }})
    

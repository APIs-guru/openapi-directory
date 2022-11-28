from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ArtistForUserForAPIContract:
    artist: Optional[ArtistForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artist') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExternalURLObject:
    r"""ExternalURLObject

    https://developer.spotify.com/documentation/web-api/reference/#object-externalurlobject - Find more info on the official Spotify Web API Reference
    """
    
    spotify: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spotify') }})
    

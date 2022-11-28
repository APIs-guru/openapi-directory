from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResumePointObject:
    r"""ResumePointObject

    https://developer.spotify.com/documentation/web-api/reference/#object-resumepointobject - Find more info on the official Spotify Web API Reference
    """
    
    fully_played: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fully_played') }})
    resume_position_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resume_position_ms') }})
    

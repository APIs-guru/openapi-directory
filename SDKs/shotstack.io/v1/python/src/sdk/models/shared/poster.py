from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Poster:
    r"""Poster
    Generate a poster image for the video at a specific point from the timeline. The poster image size will match the size of the output video.
    """
    
    capture: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('capture') }})
    

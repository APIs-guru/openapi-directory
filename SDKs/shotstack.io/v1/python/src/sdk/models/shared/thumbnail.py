from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Thumbnail:
    r"""Thumbnail
    Generate a thumbnail image for the video or image at a specific point from the timeline.
    """
    
    capture: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('capture') }})
    scale: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scale') }})
    

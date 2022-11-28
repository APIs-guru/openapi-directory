from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BoundingBoxNortheast:
    r"""BoundingBoxNortheast
    The point defining the northeast corner of the bounding box.
    """
    
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    

@dataclass_json
@dataclass
class BoundingBoxSouthwest:
    r"""BoundingBoxSouthwest
    The point defining the southwest corner of the bounding box.
    """
    
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    

@dataclass_json
@dataclass
class BoundingBox:
    r"""BoundingBox
    A geographic bounding box defined by its southwest and northeast points.
    """
    
    northeast: Optional[BoundingBoxNortheast] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('northeast') }})
    southwest: Optional[BoundingBoxSouthwest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('southwest') }})
    

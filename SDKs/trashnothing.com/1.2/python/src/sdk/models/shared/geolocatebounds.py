from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GeolocateBounds:
    r"""GeolocateBounds
    Two bounding boxes that make using Google Maps' geocoder easier. <br /><br /> The default bounding box defines the area in which the post is probably located.  This is useful for providing a bounds to Google Maps geocoder. <br /><br /> The limit bounding box is a larger bounding box that contains the default bounding box. This is useful for discarding Google Maps geocoding results that are outside of this bounding box.
    
    """
    
    default: Optional[BoundingBox] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default') }})
    limit: Optional[BoundingBox] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    

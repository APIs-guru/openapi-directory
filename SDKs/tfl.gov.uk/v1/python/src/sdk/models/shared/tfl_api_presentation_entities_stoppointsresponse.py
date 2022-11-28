from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesStopPointsResponse:
    r"""TflAPIPresentationEntitiesStopPointsResponse
    A paged response containing StopPoints
    """
    
    centre_point: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('centrePoint') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    stop_points: Optional[List[TflAPIPresentationEntitiesStopPoint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopPoints') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

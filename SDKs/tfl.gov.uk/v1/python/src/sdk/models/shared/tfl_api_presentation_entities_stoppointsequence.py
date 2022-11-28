from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TflAPIPresentationEntitiesStopPointSequenceServiceTypeEnum(str, Enum):
    REGULAR = "Regular"
    NIGHT = "Night"


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesStopPointSequence:
    branch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branchId') }})
    direction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    line_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineId') }})
    line_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineName') }})
    next_branch_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextBranchIds') }})
    prev_branch_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prevBranchIds') }})
    service_type: Optional[TflAPIPresentationEntitiesStopPointSequenceServiceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceType') }})
    stop_point: Optional[List[TflAPIPresentationEntitiesMatchedStop]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopPoint') }})
    

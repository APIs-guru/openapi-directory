from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_matchedstop

class TflAPIPresentationEntitiesStopPointSequenceServiceTypeEnum(str, Enum):
    REGULAR = "Regular"
    NIGHT = "Night"


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesStopPointSequence:
    branch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branchId' }})
    direction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    line_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineId' }})
    line_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineName' }})
    next_branch_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextBranchIds' }})
    prev_branch_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prevBranchIds' }})
    service_type: Optional[TflAPIPresentationEntitiesStopPointSequenceServiceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceType' }})
    stop_point: Optional[List[tfl_api_presentation_entities_matchedstop.TflAPIPresentationEntitiesMatchedStop]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopPoint' }})
    

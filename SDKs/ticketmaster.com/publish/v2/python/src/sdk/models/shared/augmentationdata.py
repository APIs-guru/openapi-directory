from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AugmentationDataRelatedEntityTypeEnum(str, Enum):
    EVENT = "event"
    ATTRACTION = "attraction"
    VENUE = "venue"


@dataclass_json
@dataclass
class AugmentationData:
    r"""AugmentationData
    This class defines the Augmentation Data on the Publish API
    """
    
    changes: List[Change] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('changes') }})
    related_entity_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedEntityId') }})
    related_entity_type: AugmentationDataRelatedEntityTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedEntityType') }})
    source: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    version_number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionNumber') }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    

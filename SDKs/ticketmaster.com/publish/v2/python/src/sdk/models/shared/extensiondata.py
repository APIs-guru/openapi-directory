from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ExtensionDataRelatedEntityTypeEnum(str, Enum):
    EVENT = "event"
    VENUE = "venue"
    ATTRACTION = "attraction"


@dataclass_json
@dataclass
class ExtensionData:
    r"""ExtensionData
    This class defines an extenstion data on the Publish API
    """
    
    data: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    related_entity_type: ExtensionDataRelatedEntityTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedEntityType') }})
    source: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    related_entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedEntityId') }})
    related_entity_source: Optional[Source] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedEntitySource') }})
    version_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionNumber') }})
    

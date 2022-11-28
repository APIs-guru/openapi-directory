from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EntitlementRelatedEntityTypeEnum(str, Enum):
    EVENT = "event"
    VENUE = "venue"
    ATTRACTION = "attraction"

class EntitlementSourceEnum(str, Enum):
    TICKETMASTER = "ticketmaster"


@dataclass_json
@dataclass
class Entitlement:
    r"""Entitlement
    This class defines an entitlement data on the Publish API
    """
    
    data: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    related_entity_type: EntitlementRelatedEntityTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedEntityType') }})
    source: EntitlementSourceEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    related_entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedEntityId') }})
    related_entity_source: Optional[Source] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedEntitySource') }})
    version_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionNumber') }})
    

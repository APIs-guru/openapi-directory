from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RpSubscriptionProperties:
    account_owner: Optional[SubscriptionAccountOwner] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountOwner') }})
    additional_properties: Optional[SubscriptionAdditionalProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalProperties') }})
    location_placement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationPlacementId') }})
    quota_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaId') }})
    tenant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenantId') }})
    

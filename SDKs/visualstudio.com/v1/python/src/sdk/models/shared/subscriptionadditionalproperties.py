from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SubscriptionAdditionalProperties:
    billing_properties: Optional[BillingProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingProperties') }})
    resource_provider_properties: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceProviderProperties') }})
    

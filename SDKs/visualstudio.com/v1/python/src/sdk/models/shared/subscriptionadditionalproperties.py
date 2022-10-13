from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import billingproperties


@dataclass_json
@dataclass
class SubscriptionAdditionalProperties:
    billing_properties: Optional[billingproperties.BillingProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingProperties' }})
    resource_provider_properties: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceProviderProperties' }})
    

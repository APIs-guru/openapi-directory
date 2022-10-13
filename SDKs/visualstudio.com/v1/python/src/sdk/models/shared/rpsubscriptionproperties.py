from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import subscriptionaccountowner
from . import subscriptionadditionalproperties
from . import stringstringkeyvaluepair
from . import stringstringkeyvaluepair


@dataclass_json
@dataclass
class RpSubscriptionProperties:
    account_owner: Optional[subscriptionaccountowner.SubscriptionAccountOwner] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountOwner' }})
    additional_properties: Optional[subscriptionadditionalproperties.SubscriptionAdditionalProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalProperties' }})
    location_placement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationPlacementId' }})
    managed_by_tenants: Optional[List[stringstringkeyvaluepair.StringStringKeyValuePair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedByTenants' }})
    quota_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotaId' }})
    registered_features: Optional[List[stringstringkeyvaluepair.StringStringKeyValuePair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registeredFeatures' }})
    tenant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenantId' }})
    

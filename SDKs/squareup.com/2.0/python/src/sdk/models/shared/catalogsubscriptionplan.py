from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import subscriptionphase


@dataclass_json
@dataclass
class CatalogSubscriptionPlan:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    phases: List[subscriptionphase.SubscriptionPhase] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phases' }})
    

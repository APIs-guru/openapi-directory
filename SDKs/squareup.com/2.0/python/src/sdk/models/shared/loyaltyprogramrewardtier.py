from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import loyaltyprogramrewarddefinition
from . import catalogobjectreference


@dataclass_json
@dataclass
class LoyaltyProgramRewardTier:
    created_at: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    definition: loyaltyprogramrewarddefinition.LoyaltyProgramRewardDefinition = field(default=None, metadata={'dataclasses_json': { 'field_name': 'definition' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    points: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'points' }})
    pricing_rule_reference: Optional[catalogobjectreference.CatalogObjectReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pricing_rule_reference' }})
    

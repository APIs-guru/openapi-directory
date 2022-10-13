from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import loyaltyaccountexpiringpointdeadline
from . import loyaltyaccountmapping


@dataclass_json
@dataclass
class LoyaltyAccount:
    balance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balance' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_id' }})
    enrolled_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enrolled_at' }})
    expiring_point_deadlines: Optional[List[loyaltyaccountexpiringpointdeadline.LoyaltyAccountExpiringPointDeadline]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiring_point_deadlines' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    lifetime_points: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifetime_points' }})
    mapping: Optional[loyaltyaccountmapping.LoyaltyAccountMapping] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mapping' }})
    program_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'program_id' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    

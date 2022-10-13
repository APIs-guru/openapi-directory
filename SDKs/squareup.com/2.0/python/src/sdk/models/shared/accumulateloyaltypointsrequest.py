from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import loyaltyeventaccumulatepoints


@dataclass_json
@dataclass
class AccumulateLoyaltyPointsRequest:
    accumulate_points: loyaltyeventaccumulatepoints.LoyaltyEventAccumulatePoints = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accumulate_points' }})
    idempotency_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    location_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    

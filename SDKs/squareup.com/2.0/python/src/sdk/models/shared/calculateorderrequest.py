from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import order
from . import orderreward


@dataclass_json
@dataclass
class CalculateOrderRequest:
    order: order.Order = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order' }})
    proposed_rewards: Optional[List[orderreward.OrderReward]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proposed_rewards' }})
    

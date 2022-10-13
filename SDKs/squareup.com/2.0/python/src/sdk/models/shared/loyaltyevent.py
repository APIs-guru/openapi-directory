from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import loyaltyeventaccumulatepoints
from . import loyaltyeventadjustpoints
from . import loyaltyeventcreatereward
from . import loyaltyeventdeletereward
from . import loyaltyeventexpirepoints
from . import loyaltyeventother
from . import loyaltyeventredeemreward


@dataclass_json
@dataclass
class LoyaltyEvent:
    accumulate_points: Optional[loyaltyeventaccumulatepoints.LoyaltyEventAccumulatePoints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accumulate_points' }})
    adjust_points: Optional[loyaltyeventadjustpoints.LoyaltyEventAdjustPoints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adjust_points' }})
    create_reward: Optional[loyaltyeventcreatereward.LoyaltyEventCreateReward] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'create_reward' }})
    created_at: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    delete_reward: Optional[loyaltyeventdeletereward.LoyaltyEventDeleteReward] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete_reward' }})
    expire_points: Optional[loyaltyeventexpirepoints.LoyaltyEventExpirePoints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expire_points' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    loyalty_account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loyalty_account_id' }})
    other_event: Optional[loyaltyeventother.LoyaltyEventOther] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'other_event' }})
    redeem_reward: Optional[loyaltyeventredeemreward.LoyaltyEventRedeemReward] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redeem_reward' }})
    source: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

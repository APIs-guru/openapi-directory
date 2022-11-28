from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SubscriptionData:
    compute_quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeQuota') }})
    compute_usage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeUsage') }})
    subscription_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionId') }})
    subscription_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionState') }})
    

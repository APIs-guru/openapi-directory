from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BillingProperties:
    billing_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingType') }})
    channel_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelType') }})
    payment_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentType') }})
    tier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier') }})
    workload_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloadType') }})
    

from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetPayoutStatistics:
    this_month_failed_payments_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thisMonthFailedPaymentsCount' }})
    this_month_payouts_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thisMonthPayoutsCount' }})
    

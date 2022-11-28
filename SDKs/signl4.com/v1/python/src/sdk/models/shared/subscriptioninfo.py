from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SubscriptionInfo:
    branch_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branchId') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    external_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalAccountId') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    next_billing: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextBilling'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerId') }})
    plan_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('planCode') }})
    plan_state: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('planState') }})
    referral_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referralEnabled') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

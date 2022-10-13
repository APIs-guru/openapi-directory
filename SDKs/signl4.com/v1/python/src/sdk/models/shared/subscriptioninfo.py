from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SubscriptionInfo:
    branch_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branchId' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    external_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalAccountId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    next_billing: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextBilling', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerId' }})
    plan_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planCode' }})
    plan_state: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planState' }})
    referral_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referralEnabled' }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

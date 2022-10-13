from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import autotopupconfig_2
from . import notifications_2

class SourceAccountResponseV3CurrencyEnum(str, Enum):
    USD = "USD"
    EUR = "EUR"
    GBP = "GBP"
    CAD = "CAD"
    HKD = "HKD"


@dataclass_json
@dataclass
class SourceAccountResponseV3:
    auto_top_up_config: Optional[autotopupconfig_2.AutoTopUpConfig2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoTopUpConfig' }})
    balance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balance' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    currency: Optional[SourceAccountResponseV3CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerId' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    deleted_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    funding_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fundingRef' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notifications: Optional[notifications_2.Notifications2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notifications' }})
    payor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorId' }})
    physical_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'physicalAccountId' }})
    physical_account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'physicalAccountName' }})
    pooled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pooled' }})
    rails_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'railsId' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    user_deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userDeleted' }})
    

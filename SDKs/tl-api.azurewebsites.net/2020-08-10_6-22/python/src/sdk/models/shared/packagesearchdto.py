from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PackageSearchDto:
    active_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeStatus' }})
    addon_fee: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addonFee' }})
    apply_for_all_gyms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applyForAllGyms' }})
    binding_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bindingPeriod' }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdUser' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    features: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    free_months: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeMonths' }})
    member_can_remove_add_ons: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberCanRemoveAddOns' }})
    modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    modified_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiedUser' }})
    monthly_fee: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monthlyFee' }})
    number_of_visits: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfVisits' }})
    package_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageId' }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageName' }})
    package_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageNumber' }})
    package_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageType' }})
    registration_fee: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registrationFee' }})
    service_fee: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceFee' }})
    tags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCount' }})
    total_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPrice' }})
    

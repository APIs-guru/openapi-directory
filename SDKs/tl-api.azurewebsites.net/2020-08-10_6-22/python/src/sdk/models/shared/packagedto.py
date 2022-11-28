from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PackageDto:
    r"""PackageDto
    The PackageDTO Class.
    Contains relevant fields of Package DTO by masking actual Package entity's fields in application.
                
    """
    
    package_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    package_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageType') }})
    registration_fee: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrationFee') }})
    service_fee: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceFee') }})
    add_ons: Optional[List[PackageItemDto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addOns') }})
    addon_fee: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addonFee') }})
    apply_for_all_gyms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applyForAllGyms') }})
    available_gyms: Optional[List[GymDto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableGyms') }})
    binding_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bindingPeriod') }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdUser') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expire_in_months: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireInMonths') }})
    features: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    free_months: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeMonths') }})
    instructions_to_gym_users: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instructionsToGymUsers') }})
    instructions_to_web_users: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instructionsToWebUsers') }})
    is_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isActive') }})
    is_atg: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAtg') }})
    is_auto_renew: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAutoRenew') }})
    is_first_month_free: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isFirstMonthFree') }})
    is_registration_fee: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isRegistrationFee') }})
    is_rest_amount: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isRestAmount') }})
    is_shown_in_mobile: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isShownInMobile') }})
    is_sponsor_package: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSponsorPackage') }})
    maximum_give_away_rest_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumGiveAwayRestAmount') }})
    member_can_add_add_ons: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberCanAddAddOns') }})
    member_can_leave_within_free_period: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberCanLeaveWithinFreePeriod') }})
    member_can_remove_add_ons: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberCanRemoveAddOns') }})
    modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    modified_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedUser') }})
    monthly_fee: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthlyFee') }})
    next_package_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPackageNumber') }})
    number_of_installments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfInstallments') }})
    number_of_visits: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfVisits') }})
    package_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageId') }})
    package_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageNumber') }})
    per_visit_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perVisitPrice') }})
    shown_in_web: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shownInWeb') }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    total_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPrice') }})
    

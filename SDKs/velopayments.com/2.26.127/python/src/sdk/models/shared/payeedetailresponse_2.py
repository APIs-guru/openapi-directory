from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PayeeDetailResponse2:
    accept_terms_and_conditions_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceptTermsAndConditionsTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    address: Optional[PayeeAddress2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    cellphone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cellphoneNumber') }})
    challenge: Optional[Challenge2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challenge') }})
    company: Optional[Company2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    disabled_comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabledComment') }})
    disabled_updated_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabledUpdatedTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    enhanced_kyc_completed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enhancedKycCompleted') }})
    grace_period_end_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gracePeriodEndDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    individual: Optional[Individual2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('individual') }})
    kyc_completed_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kycCompletedTimestamp') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    marketing_opt_in_decision: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketingOptInDecision') }})
    marketing_opt_in_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketingOptInTimestamp') }})
    onboarded_status: Optional[OnboardedStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onboardedStatus') }})
    pause_payment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pausePayment') }})
    pause_payment_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pausePaymentTimestamp') }})
    payee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeId') }})
    payee_type: Optional[PayeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeType') }})
    payor_refs: Optional[List[PayeePayorRef]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorRefs') }})
    watchlist_override_comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlistOverrideComment') }})
    watchlist_override_expires_at_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlistOverrideExpiresAtTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    watchlist_status: Optional[WatchlistStatus2Enum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlistStatus') }})
    watchlist_status_updated_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlistStatusUpdatedTimestamp') }})
    

from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import payeeaddress_2
from . import challenge_2
from . import company_2
from . import individual_2
from . import onboardedstatus_enum
from . import payeetype_enum
from . import payeepayorref
from . import watchliststatus_2_enum


@dataclass_json
@dataclass
class PayeeDetailResponse2:
    accept_terms_and_conditions_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acceptTermsAndConditionsTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    address: Optional[payeeaddress_2.PayeeAddress2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    cellphone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cellphoneNumber' }})
    challenge: Optional[challenge_2.Challenge2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'challenge' }})
    company: Optional[company_2.Company2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    disabled_comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabledComment' }})
    disabled_updated_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabledUpdatedTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    enhanced_kyc_completed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enhancedKycCompleted' }})
    grace_period_end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gracePeriodEndDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    individual: Optional[individual_2.Individual2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'individual' }})
    kyc_completed_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kycCompletedTimestamp' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    marketing_opt_in_decision: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketingOptInDecision' }})
    marketing_opt_in_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketingOptInTimestamp' }})
    onboarded_status: Optional[onboardedstatus_enum.OnboardedStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onboardedStatus' }})
    pause_payment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pausePayment' }})
    pause_payment_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pausePaymentTimestamp' }})
    payee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payeeId' }})
    payee_type: Optional[payeetype_enum.PayeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payeeType' }})
    payor_refs: Optional[List[payeepayorref.PayeePayorRef]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorRefs' }})
    watchlist_override_comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchlistOverrideComment' }})
    watchlist_override_expires_at_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchlistOverrideExpiresAtTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    watchlist_status: Optional[watchliststatus_2_enum.WatchlistStatus2Enum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchlistStatus' }})
    watchlist_status_updated_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchlistStatusUpdatedTimestamp' }})
    

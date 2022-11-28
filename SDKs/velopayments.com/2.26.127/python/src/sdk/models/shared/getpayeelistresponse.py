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
class GetPayeeListResponse:
    company: Optional[GetPayeeListResponseCompany] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    disabled_comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabledComment') }})
    disabled_updated_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabledUpdatedTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    individual: Optional[GetPayeeListResponseIndividual] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('individual') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    onboarded_status: Optional[OnboardedStatus2Enum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onboardedStatus') }})
    payee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeId') }})
    payee_type: Optional[PayeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeType') }})
    payor_refs: Optional[List[PayeePayorRefV3]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorRefs') }})
    watchlist_override_comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlistOverrideComment') }})
    watchlist_status: Optional[WatchlistStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlistStatus') }})
    watchlist_status_updated_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlistStatusUpdatedTimestamp') }})
    

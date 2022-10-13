from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import getpayeelistresponsecompany_2
from . import getpayeelistresponseindividual_2
from . import onboardedstatus_enum
from . import payeetype_enum
from . import payeepayorref
from . import watchliststatus_2_enum


@dataclass_json
@dataclass
class GetPayeeListResponse2:
    company: Optional[getpayeelistresponsecompany_2.GetPayeeListResponseCompany2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    disabled_comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabledComment' }})
    disabled_updated_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabledUpdatedTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    individual: Optional[getpayeelistresponseindividual_2.GetPayeeListResponseIndividual2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'individual' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    onboarded_status: Optional[onboardedstatus_enum.OnboardedStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onboardedStatus' }})
    payee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payeeId' }})
    payee_type: Optional[payeetype_enum.PayeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payeeType' }})
    payor_refs: Optional[List[payeepayorref.PayeePayorRef]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorRefs' }})
    watchlist_override_comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchlistOverrideComment' }})
    watchlist_status: Optional[watchliststatus_2_enum.WatchlistStatus2Enum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchlistStatus' }})
    watchlist_status_updated_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchlistStatusUpdatedTimestamp' }})
    

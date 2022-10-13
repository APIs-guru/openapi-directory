from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import getpayeelistresponsecompany
from . import getpayeelistresponseindividual
from . import onboardedstatus_2_enum
from . import payeetype_enum
from . import payeepayorrefv3
from . import watchliststatus_enum


@dataclass_json
@dataclass
class GetPayeeListResponse:
    company: Optional[getpayeelistresponsecompany.GetPayeeListResponseCompany] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    disabled_comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabledComment' }})
    disabled_updated_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabledUpdatedTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    individual: Optional[getpayeelistresponseindividual.GetPayeeListResponseIndividual] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'individual' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    onboarded_status: Optional[onboardedstatus_2_enum.OnboardedStatus2Enum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onboardedStatus' }})
    payee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payeeId' }})
    payee_type: Optional[payeetype_enum.PayeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payeeType' }})
    payor_refs: Optional[List[payeepayorrefv3.PayeePayorRefV3]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorRefs' }})
    watchlist_override_comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchlistOverrideComment' }})
    watchlist_status: Optional[watchliststatus_enum.WatchlistStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchlistStatus' }})
    watchlist_status_updated_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchlistStatusUpdatedTimestamp' }})
    

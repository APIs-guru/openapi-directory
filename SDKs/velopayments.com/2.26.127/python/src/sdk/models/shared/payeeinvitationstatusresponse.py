from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PayeeInvitationStatusResponseInvitationStatusEnum(str, Enum):
    ACCEPTED = "ACCEPTED"
    PENDING = "PENDING"
    DECLINED = "DECLINED"


@dataclass_json
@dataclass
class PayeeInvitationStatusResponse:
    invitation_status: PayeeInvitationStatusResponseInvitationStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invitationStatus') }})
    payee_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeId') }})
    grace_period_end_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gracePeriodEndDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

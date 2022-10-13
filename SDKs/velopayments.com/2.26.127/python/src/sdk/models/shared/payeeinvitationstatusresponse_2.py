from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PayeeInvitationStatusResponse2InvitationStatusEnum(str, Enum):
    ACCEPTED = "ACCEPTED"
    PENDING = "PENDING"
    DECLINED = "DECLINED"


@dataclass_json
@dataclass
class PayeeInvitationStatusResponse2:
    grace_period_end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gracePeriodEndDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    invitation_status: PayeeInvitationStatusResponse2InvitationStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invitationStatus' }})
    payee_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payeeId' }})
    

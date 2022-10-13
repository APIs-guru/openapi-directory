from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import invitationstatus_2_enum
from . import payableissue


@dataclass_json
@dataclass
class PayeePayorRefV3:
    invitation_status: Optional[invitationstatus_2_enum.InvitationStatus2Enum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invitationStatus' }})
    invitation_status_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invitationStatusTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    payable_issues: Optional[List[payableissue.PayableIssue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payableIssues' }})
    payable_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payableStatus' }})
    payment_channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentChannelId' }})
    payor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorId' }})
    remote_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteId' }})
    

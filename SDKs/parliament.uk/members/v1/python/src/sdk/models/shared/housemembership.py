from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import housemembershipstatus


@dataclass_json
@dataclass
class HouseMembership:
    house: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'house' }})
    membership_end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membershipEndDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    membership_end_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membershipEndReason' }})
    membership_end_reason_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membershipEndReasonId' }})
    membership_end_reason_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membershipEndReasonNotes' }})
    membership_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membershipFrom' }})
    membership_from_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membershipFromId' }})
    membership_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membershipStartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    membership_status: Optional[housemembershipstatus.HouseMembershipStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membershipStatus' }})
    

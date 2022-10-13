from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contactaddressinfo
from . import userdutyinfo


@dataclass_json
@dataclass
class UserInfo:
    color_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colorIndex' }})
    contact_addresses: Optional[List[contactaddressinfo.ContactAddressInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactAddresses' }})
    duty_info: Optional[userdutyinfo.UserDutyInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dutyInfo' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_deactivated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDeactivated' }})
    is_invite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isInvite' }})
    mail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mail' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    role_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleId' }})
    subscription_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionId' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    user_image_last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userImageLastModified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserInfo:
    color_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorIndex') }})
    contact_addresses: Optional[List[ContactAddressInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactAddresses') }})
    duty_info: Optional[UserDutyInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dutyInfo') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_deactivated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDeactivated') }})
    is_invite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isInvite') }})
    mail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mail') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    role_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleId') }})
    subscription_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionId') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    user_image_last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userImageLastModified'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

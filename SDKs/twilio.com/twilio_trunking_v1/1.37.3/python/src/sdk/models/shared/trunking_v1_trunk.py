from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TrunkingV1TrunkDisasterRecoveryMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class TrunkingV1Trunk:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    auth_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth_type') }})
    auth_type_set: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth_type_set') }})
    cnam_lookup_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cnam_lookup_enabled') }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    disaster_recovery_method: Optional[TrunkingV1TrunkDisasterRecoveryMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disaster_recovery_method') }})
    disaster_recovery_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disaster_recovery_url') }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain_name') }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friendly_name') }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    recording: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording') }})
    secure: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secure') }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    transfer_caller_id: Optional[TrunkEnumTransferCallerIDEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transfer_caller_id') }})
    transfer_mode: Optional[TrunkEnumTransferSettingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transfer_mode') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

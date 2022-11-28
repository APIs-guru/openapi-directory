from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class MediaV1MediaProcessorStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class MediaV1MediaProcessor:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ended_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ended_reason') }})
    extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension') }})
    extension_context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_context') }})
    max_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_duration') }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    status: Optional[MediaProcessorEnumStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_callback: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_callback') }})
    status_callback_method: Optional[MediaV1MediaProcessorStatusCallbackMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_callback_method') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

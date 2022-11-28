from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VerifyV2VerificationAttempt:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    channel: Optional[VerificationAttemptEnumChannelsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    channel_data: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel_data') }})
    conversion_status: Optional[VerificationAttemptEnumConversionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversion_status') }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    price: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_sid') }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    verification_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verification_sid') }})
    

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
class APIV2010AccountMessage:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_version') }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_created') }})
    date_sent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_sent') }})
    date_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_updated') }})
    direction: Optional[MessageEnumDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    error_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_code') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_message') }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    messaging_service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messaging_service_sid') }})
    num_media: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_media') }})
    num_segments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_segments') }})
    price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    price_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_unit') }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    status: Optional[MessageEnumStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    subresource_uris: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subresource_uris') }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

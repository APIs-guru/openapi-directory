from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class MessagingV1ServiceFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class MessagingV1ServiceInboundMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class MessagingV1Service:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    area_code_geomatch: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('area_code_geomatch') }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    fallback_method: Optional[MessagingV1ServiceFallbackMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fallback_method') }})
    fallback_to_long_code: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fallback_to_long_code') }})
    fallback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fallback_url') }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friendly_name') }})
    inbound_method: Optional[MessagingV1ServiceInboundMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inbound_method') }})
    inbound_request_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inbound_request_url') }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    mms_converter: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mms_converter') }})
    scan_message_content: Optional[ServiceEnumScanMessageContentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scan_message_content') }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    smart_encoding: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smart_encoding') }})
    status_callback: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_callback') }})
    sticky_sender: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sticky_sender') }})
    synchronous_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('synchronous_validation') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    us_app_to_person_registered: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('us_app_to_person_registered') }})
    use_inbound_webhook_on_number: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_inbound_webhook_on_number') }})
    usecase: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usecase') }})
    validity_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validity_period') }})
    

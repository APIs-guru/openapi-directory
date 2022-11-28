from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class APIV2010AccountNotificationInstanceRequestMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class APIV2010AccountNotificationInstance:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_version') }})
    call_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_sid') }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_created') }})
    date_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_updated') }})
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_code') }})
    log: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('log') }})
    message_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_date') }})
    message_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_text') }})
    more_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('more_info') }})
    request_method: Optional[APIV2010AccountNotificationInstanceRequestMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_method') }})
    request_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_url') }})
    request_variables: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_variables') }})
    response_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response_body') }})
    response_headers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response_headers') }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

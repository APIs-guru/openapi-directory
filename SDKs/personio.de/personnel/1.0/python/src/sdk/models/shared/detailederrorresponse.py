from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DetailedErrorResponseErrorDetailedMessage:
    break_: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('break') }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    date_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    employee: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_time') }})
    error_msg: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_msg') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time') }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

@dataclass_json
@dataclass
class DetailedErrorResponseError:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detailed_message: Optional[List[DetailedErrorResponseErrorDetailedMessage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detailed_message') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DetailedErrorResponse:
    error: DetailedErrorResponseError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    success: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

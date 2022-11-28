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
class ContactUploadResponseData:
    contacts: Optional[List[Contact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contacts') }})
    errors: Optional[List[Contact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    inserted: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inserted') }})
    submitted: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submitted') }})
    success: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    updated: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    

@dataclass_json
@dataclass
class ContactUploadResponse:
    data: Optional[ContactUploadResponseData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

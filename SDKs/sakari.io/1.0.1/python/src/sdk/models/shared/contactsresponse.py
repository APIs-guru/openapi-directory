from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContactsResponseError:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class ContactsResponsePagination:
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCount') }})
    

@dataclass_json
@dataclass
class ContactsResponse:
    data: Optional[List[Contact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    error: Optional[ContactsResponseError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    pagination: Optional[ContactsResponsePagination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

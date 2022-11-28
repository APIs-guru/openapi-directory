from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Institution:
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_code') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    

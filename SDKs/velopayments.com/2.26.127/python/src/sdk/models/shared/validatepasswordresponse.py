from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ValidatePasswordResponse:
    score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    suggestions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestions') }})
    valid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valid') }})
    warning: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warning') }})
    

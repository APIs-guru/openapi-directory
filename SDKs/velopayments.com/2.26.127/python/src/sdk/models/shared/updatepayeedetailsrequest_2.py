from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdatePayeeDetailsRequest2Input:
    address: Optional[PayeeAddress2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    challenge: Optional[Challenge2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challenge') }})
    company: Optional[Company2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    individual: Optional[Individual2Input] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('individual') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    payee_type: Optional[PayeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeType') }})
    

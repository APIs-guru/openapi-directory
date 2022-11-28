from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreatePayeeInput:
    address: CreatePayeeAddress = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    remote_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteId') }})
    type: PayeeTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    challenge: Optional[Challenge] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challenge') }})
    company: Optional[Company] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    individual: Optional[CreateIndividual] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('individual') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    payment_channel: Optional[CreatePaymentChannel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentChannel') }})
    

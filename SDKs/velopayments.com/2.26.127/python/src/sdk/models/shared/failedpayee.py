from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FailedPayee:
    address: Optional[CreatePayeeAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    challenge: Optional[Challenge] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challenge') }})
    company: Optional[Company] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    individual: Optional[CreateIndividual] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('individual') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    payee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeId') }})
    payment_channel: Optional[CreatePaymentChannel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentChannel') }})
    payor_refs: Optional[List[PayeePayorRefV3]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorRefs') }})
    remote_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteId') }})
    type: Optional[PayeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

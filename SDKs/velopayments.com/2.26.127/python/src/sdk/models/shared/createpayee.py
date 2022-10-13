from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import createpayeeaddress
from . import challenge
from . import company
from . import createindividual
from . import createpaymentchannel
from . import payeepayorrefv3
from . import payeetype_enum


@dataclass_json
@dataclass
class CreatePayee:
    address: createpayeeaddress.CreatePayeeAddress = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    challenge: Optional[challenge.Challenge] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'challenge' }})
    company: Optional[company.Company] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company' }})
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    individual: Optional[createindividual.CreateIndividual] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'individual' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    payee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payeeId' }})
    payment_channel: Optional[createpaymentchannel.CreatePaymentChannel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentChannel' }})
    payor_refs: Optional[List[payeepayorrefv3.PayeePayorRefV3]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorRefs' }})
    remote_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteId' }})
    type: payeetype_enum.PayeeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

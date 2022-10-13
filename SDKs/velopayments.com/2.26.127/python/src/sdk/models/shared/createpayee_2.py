from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import createpayeeaddress_2
from . import challenge_2
from . import company_2
from . import createindividual_2
from . import createpaymentchannel_2
from . import payeepayorref
from . import payeetype_enum


@dataclass_json
@dataclass
class CreatePayee2:
    address: createpayeeaddress_2.CreatePayeeAddress2 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    challenge: Optional[challenge_2.Challenge2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'challenge' }})
    company: Optional[company_2.Company2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company' }})
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    individual: Optional[createindividual_2.CreateIndividual2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'individual' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    payee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payeeId' }})
    payment_channel: Optional[createpaymentchannel_2.CreatePaymentChannel2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentChannel' }})
    payor_refs: Optional[List[payeepayorref.PayeePayorRef]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorRefs' }})
    remote_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteId' }})
    type: payeetype_enum.PayeeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

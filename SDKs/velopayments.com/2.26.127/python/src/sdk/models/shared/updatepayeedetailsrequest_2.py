from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import payeeaddress_2
from . import challenge_2
from . import company_2
from . import individual_2
from . import payeetype_enum


@dataclass_json
@dataclass
class UpdatePayeeDetailsRequest2:
    address: Optional[payeeaddress_2.PayeeAddress2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    challenge: Optional[challenge_2.Challenge2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'challenge' }})
    company: Optional[company_2.Company2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    individual: Optional[individual_2.Individual2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'individual' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    payee_type: Optional[payeetype_enum.PayeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payeeType' }})
    

from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import payeeaddress
from . import challenge
from . import company
from . import individual
from . import payeetype_enum


@dataclass_json
@dataclass
class UpdatePayeeDetailsRequest:
    address: Optional[payeeaddress.PayeeAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    challenge: Optional[challenge.Challenge] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'challenge' }})
    company: Optional[company.Company] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    individual: Optional[individual.Individual] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'individual' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    payee_type: Optional[payeetype_enum.PayeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payeeType' }})
    

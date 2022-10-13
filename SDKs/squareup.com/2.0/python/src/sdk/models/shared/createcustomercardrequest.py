from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import address


@dataclass_json
@dataclass
class CreateCustomerCardRequest:
    billing_address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing_address' }})
    card_nonce: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card_nonce' }})
    cardholder_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cardholder_name' }})
    verification_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verification_token' }})
    

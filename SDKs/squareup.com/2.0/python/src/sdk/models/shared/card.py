from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import address


@dataclass_json
@dataclass
class Card:
    billing_address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing_address' }})
    bin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bin' }})
    card_brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card_brand' }})
    card_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card_type' }})
    cardholder_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cardholder_name' }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_id' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    exp_month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exp_month' }})
    exp_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exp_year' }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_4' }})
    prepaid_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prepaid_type' }})
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference_id' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

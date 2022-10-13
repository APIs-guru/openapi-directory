from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BankAccount:
    account_number_suffix: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_number_suffix' }})
    account_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_type' }})
    bank_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bank_name' }})
    country: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    creditable: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditable' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    debit_mandate_reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debit_mandate_reference_id' }})
    debitable: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debitable' }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    holder_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'holder_name' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    primary_bank_identification_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_bank_identification_number' }})
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference_id' }})
    secondary_bank_identification_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondary_bank_identification_number' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

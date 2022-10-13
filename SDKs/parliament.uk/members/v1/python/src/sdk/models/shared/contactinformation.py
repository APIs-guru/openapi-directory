from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ContactInformation:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    fax: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fax' }})
    is_preferred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPreferred' }})
    is_web_address: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isWebAddress' }})
    line1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line1' }})
    line2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line2' }})
    line3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line3' }})
    line4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line4' }})
    line5: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line5' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    postcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postcode' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    type_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeDescription' }})
    type_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeId' }})
    

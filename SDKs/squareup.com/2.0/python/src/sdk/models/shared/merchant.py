from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Merchant:
    business_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'business_name' }})
    country: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language_code' }})
    main_location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'main_location_id' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIV2010AccountAddress:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    customer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_name' }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created' }})
    date_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated' }})
    emergency_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emergency_enabled' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    iso_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso_country' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postal_code' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    street: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'street' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    validated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validated' }})
    verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verified' }})
    

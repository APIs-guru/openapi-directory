from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    assigned_add_on_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assigned_add_on_sid' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_name' }})
    resource_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_sid' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    unique_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unique_name' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

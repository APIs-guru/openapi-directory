from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PreviewMarketplaceAvailableAddOnAvailableAddOnExtension:
    available_add_on_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available_add_on_sid' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_name' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    unique_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unique_name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

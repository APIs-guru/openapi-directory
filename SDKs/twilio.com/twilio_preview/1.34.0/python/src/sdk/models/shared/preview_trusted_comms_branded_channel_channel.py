from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PreviewTrustedCommsBrandedChannelChannel:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    brand_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brand_sid' }})
    branded_channel_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branded_channel_sid' }})
    business_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'business_sid' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_number' }})
    phone_number_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_number_sid' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

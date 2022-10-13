from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tipsettings


@dataclass_json
@dataclass
class DeviceCheckoutOptions:
    device_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_id' }})
    skip_receipt_screen: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skip_receipt_screen' }})
    tip_settings: Optional[tipsettings.TipSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tip_settings' }})
    

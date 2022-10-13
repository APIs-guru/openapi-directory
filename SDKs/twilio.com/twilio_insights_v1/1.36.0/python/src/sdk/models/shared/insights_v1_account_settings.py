from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InsightsV1AccountSettings:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    advanced_features: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advanced_features' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    voice_trace: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice_trace' }})
    

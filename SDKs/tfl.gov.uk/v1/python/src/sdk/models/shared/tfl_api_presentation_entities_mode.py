from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesMode:
    is_fare_paying: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isFarePaying' }})
    is_scheduled_service: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isScheduledService' }})
    is_tfl_service: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isTflService' }})
    mode_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modeName' }})
    

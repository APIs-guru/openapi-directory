from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ScreenshotQuerySchema:
    force: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'force' }})
    thumb_size: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumb_size' }})
    window_size: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'window_size' }})
    

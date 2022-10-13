from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ChartCacheScreenshotResponseSchema:
    cache_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cache_key' }})
    chart_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chart_url' }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_url' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RecommendationSeedObject:
    after_filtering_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'afterFilteringSize' }})
    after_relinking_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'afterRelinkingSize' }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    initial_pool_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initialPoolSize' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

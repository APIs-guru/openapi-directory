from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Account:
    remaining_api_calls: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remaining_api_calls' }})
    remaining_concurrency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remaining_concurrency' }})
    resets_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resets_at' }})
    

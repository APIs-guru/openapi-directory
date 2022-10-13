from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tier


@dataclass_json
@dataclass
class TierListResponse:
    results: Optional[List[tier.Tier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

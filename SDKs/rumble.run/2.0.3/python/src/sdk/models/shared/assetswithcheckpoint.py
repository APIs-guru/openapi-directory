from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import asset


@dataclass_json
@dataclass
class AssetsWithCheckpoint:
    assets: List[asset.Asset] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    since: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'since' }})
    

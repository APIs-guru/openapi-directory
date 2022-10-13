from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import songforapicontract


@dataclass_json
@dataclass
class SongInListForAPIContract:
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order' }})
    song: Optional[songforapicontract.SongForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'song' }})
    

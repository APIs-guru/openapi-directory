from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TableMetadataOptionsResponse:
    deferrable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deferrable' }})
    initially: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initially' }})
    match: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'match' }})
    ondelete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ondelete' }})
    onupdate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onupdate' }})
    

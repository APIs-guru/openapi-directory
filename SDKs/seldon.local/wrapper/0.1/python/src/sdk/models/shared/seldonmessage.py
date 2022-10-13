from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import defaultdata
from . import meta
from . import status


@dataclass_json
@dataclass
class SeldonMessage:
    bin_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'binData' }})
    data: Optional[defaultdata.DefaultData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    status: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    str_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'strData' }})
    

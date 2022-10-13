from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import errormessage


@dataclass_json
@dataclass
class OdataError:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[errormessage.ErrorMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

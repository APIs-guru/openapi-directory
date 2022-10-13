from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import renderresponsedata


@dataclass_json
@dataclass
class RenderResponse:
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    response: renderresponsedata.RenderResponseData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    success: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    

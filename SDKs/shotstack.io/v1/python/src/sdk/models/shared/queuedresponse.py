from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import queuedresponsedata


@dataclass_json
@dataclass
class QueuedResponse:
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    response: queuedresponsedata.QueuedResponseData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    success: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    

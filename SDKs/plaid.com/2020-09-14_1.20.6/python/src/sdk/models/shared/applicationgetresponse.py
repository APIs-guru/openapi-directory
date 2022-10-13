from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import application


@dataclass_json
@dataclass
class ApplicationGetResponse:
    application: application.Application = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

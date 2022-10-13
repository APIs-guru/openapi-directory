from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ClientForbiddenProblemReasonEnum(str, Enum):
    OFFICIAL_CLIENT_FORBIDDEN = "official-client-forbidden"
    CLIENT_NOT_ENROLLED = "client-not-enrolled"


@dataclass_json
@dataclass
class ClientForbiddenProblem:
    detail: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    reason: Optional[ClientForbiddenProblemReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    registration_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registration_url' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

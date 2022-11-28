from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ClientForbiddenProblemReasonEnum(str, Enum):
    OFFICIAL_CLIENT_FORBIDDEN = "official-client-forbidden"
    CLIENT_NOT_ENROLLED = "client-not-enrolled"


@dataclass_json
@dataclass
class ClientForbiddenProblem:
    r"""ClientForbiddenProblem
    A problem that indicates your client is forbidden from making this request.
    """
    
    detail: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    reason: Optional[ClientForbiddenProblemReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    registration_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration_url') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DocumentSubmission:
    r"""DocumentSubmission
    The document you want Storecove to send, with some meta-data.
    """
    
    attachments: Optional[List[Attachment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachments') }})
    create_primary_image: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createPrimaryImage') }})
    document: Optional[SendableDocument] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    idempotency_guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idempotencyGuid') }})
    legal_entity_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legalEntityId') }})
    receive_guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receiveGuid') }})
    routing: Optional[Routing] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routing') }})
    

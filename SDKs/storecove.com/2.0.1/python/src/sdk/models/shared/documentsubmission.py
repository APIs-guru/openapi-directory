from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attachment
from . import sendabledocument
from . import routing


@dataclass_json
@dataclass
class DocumentSubmission:
    attachments: Optional[List[attachment.Attachment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachments' }})
    create_primary_image: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createPrimaryImage' }})
    document: Optional[sendabledocument.SendableDocument] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document' }})
    idempotency_guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotencyGuid' }})
    legal_entity_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legalEntityId' }})
    receive_guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receiveGuid' }})
    routing: Optional[routing.Routing] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routing' }})
    

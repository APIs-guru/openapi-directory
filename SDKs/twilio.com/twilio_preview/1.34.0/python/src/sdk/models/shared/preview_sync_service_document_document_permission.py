from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PreviewSyncServiceDocumentDocumentPermission:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    document_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document_sid' }})
    identity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identity' }})
    manage: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manage' }})
    read: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'read' }})
    service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_sid' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    write: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'write' }})
    

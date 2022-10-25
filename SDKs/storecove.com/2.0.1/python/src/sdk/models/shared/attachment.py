from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AttachmentMimeTypeEnum(str, Enum):
    APPLICATION_PDF = "application/pdf"


@dataclass_json
@dataclass
class Attachment:
    document: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document' }})
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filename' }})
    mime_type: AttachmentMimeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    primary_image: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryImage' }})
    

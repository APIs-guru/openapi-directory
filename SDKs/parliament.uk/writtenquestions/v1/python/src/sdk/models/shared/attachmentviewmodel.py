from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AttachmentViewModel:
    file_size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileSizeBytes' }})
    file_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileType' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

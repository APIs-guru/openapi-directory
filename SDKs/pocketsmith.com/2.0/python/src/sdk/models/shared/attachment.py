from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AttachmentContentTypeMeta:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extension' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class AttachmentVariants:
    large_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'large_url' }})
    thumb_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumb_url' }})
    

@dataclass_json
@dataclass
class Attachment:
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_type' }})
    content_type_meta: Optional[AttachmentContentTypeMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_type_meta' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_name' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    original_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'original_url' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    variants: Optional[AttachmentVariants] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variants' }})
    

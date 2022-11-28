from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AttachmentContentTypeMeta:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclass
class AttachmentVariants:
    large_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('large_url') }})
    thumb_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumb_url') }})
    

@dataclass_json
@dataclass
class Attachment:
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_type') }})
    content_type_meta: Optional[AttachmentContentTypeMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_type_meta') }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_name') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    original_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('original_url') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    variants: Optional[AttachmentVariants] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variants') }})
    

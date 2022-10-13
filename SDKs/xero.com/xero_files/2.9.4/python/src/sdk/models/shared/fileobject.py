from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import user


@dataclass_json
@dataclass
class FileObject:
    created_date_utc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedDateUtc' }})
    folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FolderId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MimeType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Size' }})
    updated_date_utc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedDateUtc' }})
    user: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'User' }})
    

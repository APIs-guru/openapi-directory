from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FileObject:
    created_date_utc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedDateUtc') }})
    folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FolderId') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MimeType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Size') }})
    updated_date_utc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedDateUtc') }})
    user: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('User') }})
    

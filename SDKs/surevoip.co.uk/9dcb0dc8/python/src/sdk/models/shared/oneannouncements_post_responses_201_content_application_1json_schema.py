from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncementURL:
    download: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclass
class OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncement:
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creation_date') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    file_internal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_internal') }})
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    src_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('src_ip_address') }})
    url: Optional[OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncementURL] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class OneannouncementsPostResponses201ContentApplication1jsonSchema:
    announcement: Optional[OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncement] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('announcement') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostAnnouncementsRequestBody:
    description: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'description' }})
    file: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class PostAnnouncementsRequest:
    request: PostAnnouncementsRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass_json
@dataclass
class PostAnnouncements201ApplicationJSONAnnouncementURL:
    download: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download' }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class PostAnnouncements201ApplicationJSONAnnouncement:
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creation_date' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    file_internal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_internal' }})
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filename' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    src_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'src_ip_address' }})
    url: Optional[PostAnnouncements201ApplicationJSONAnnouncementURL] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class PostAnnouncements201ApplicationJSON:
    announcement: Optional[PostAnnouncements201ApplicationJSONAnnouncement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'announcement' }})
    

@dataclass_json
@dataclass
class PostAnnouncements400ApplicationJSONErrors:
    field: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    message: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostAnnouncements400ApplicationJSON:
    errors: List[PostAnnouncements400ApplicationJSONErrors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass_json
@dataclass
class PostAnnouncements403ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PostAnnouncementsResponse:
    content_type: str = field(default=None)
    post_announcements_201_application_json_object: Optional[PostAnnouncements201ApplicationJSON] = field(default=None)
    post_announcements_400_application_json_object: Optional[PostAnnouncements400ApplicationJSON] = field(default=None)
    post_announcements_403_application_json_object: Optional[PostAnnouncements403ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    oneannouncements_post_responses_403_content_application_1json_schema: Optional[shared.OneannouncementsPostResponses403ContentApplication1jsonSchema] = field(default=None)
    

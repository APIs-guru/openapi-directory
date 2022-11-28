from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MeterFolderInformationPostRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    meter_folder_information_to_post: Optional[shared.MeterFolderInformationToPost] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    meter_folder_information_to_post1: Optional[shared.MeterFolderInformationToPost] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    meter_folder_information_to_post2: Optional[shared.MeterFolderInformationToPost] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class MeterFolderInformationPostRequest:
    request: MeterFolderInformationPostRequests = field()
    

@dataclass
class MeterFolderInformationPostResponse:
    content_type: str = field()
    status_code: int = field()
    

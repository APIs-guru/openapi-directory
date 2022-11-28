from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FolderSettingsPostPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FolderSettingsPostRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    folder_settings: Optional[shared.FolderSettings] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    folder_settings1: Optional[shared.FolderSettings] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    folder_settings2: Optional[shared.FolderSettings] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class FolderSettingsPostRequest:
    path_params: FolderSettingsPostPathParams = field()
    request: FolderSettingsPostRequests = field()
    

@dataclass
class FolderSettingsPostResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    folder_menu_item: Optional[shared.FolderMenuItem] = field(default=None)
    

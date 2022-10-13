from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FolderSettingsPostPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FolderSettingsPostRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    folder_settings: Optional[shared.FolderSettings] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    folder_settings1: Optional[shared.FolderSettings] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    folder_settings2: Optional[shared.FolderSettings] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class FolderSettingsPostRequest:
    path_params: FolderSettingsPostPathParams = field(default=None)
    request: FolderSettingsPostRequests = field(default=None)
    

@dataclass
class FolderSettingsPostResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    folder_menu_item: Optional[shared.FolderMenuItem] = field(default=None)
    status_code: int = field(default=None)
    

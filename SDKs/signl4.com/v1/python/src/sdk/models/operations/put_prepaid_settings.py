from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutPrepaidSettingsRequests:
    prepaid_settings_info: Optional[shared.PrepaidSettingsInfo] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    prepaid_settings_info1: Optional[shared.PrepaidSettingsInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    prepaid_settings_info2: Optional[shared.PrepaidSettingsInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    prepaid_settings_info3: Optional[shared.PrepaidSettingsInfo] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutPrepaidSettingsRequest:
    request: Optional[PutPrepaidSettingsRequests] = field(default=None)
    

@dataclass
class PutPrepaidSettingsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    prepaid_settings_info: Optional[shared.PrepaidSettingsInfo] = field(default=None)
    status_code: int = field(default=None)
    

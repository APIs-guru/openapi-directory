from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ToolsShareFileMultipartFormDataMedia:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    media: str = field(default=None, metadata={'multipart_form': { 'field_name': 'media' }})
    

@dataclass
class ToolsShareFileMultipartFormData:
    media: Optional[ToolsShareFileMultipartFormDataMedia] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class ToolsShareFileRequests:
    binary_string: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/octet-stream' }})
    object: Optional[ToolsShareFileMultipartFormData] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class ToolsShareFileSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ToolsShareFileRequest:
    request: ToolsShareFileRequests = field(default=None)
    security: ToolsShareFileSecurity = field(default=None)
    

@dataclass
class ToolsShareFileResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    share_file_response: Optional[shared.ShareFileResponse] = field(default=None)
    status_code: int = field(default=None)
    

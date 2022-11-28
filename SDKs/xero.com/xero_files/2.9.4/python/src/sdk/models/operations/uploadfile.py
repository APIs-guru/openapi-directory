from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UploadFileQueryParams:
    folder_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FolderId', 'style': 'form', 'explode': True }})
    

@dataclass
class UploadFileHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UploadFileRequestBody:
    body: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'body' }})
    filename: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'filename' }})
    mime_type: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'mimeType' }})
    name: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    

@dataclass
class UploadFileSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UploadFileRequest:
    headers: UploadFileHeaders = field()
    query_params: UploadFileQueryParams = field()
    security: UploadFileSecurity = field()
    request: Optional[UploadFileRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class UploadFileResponse:
    content_type: str = field()
    status_code: int = field()
    file_object: Optional[shared.FileObject] = field(default=None)
    

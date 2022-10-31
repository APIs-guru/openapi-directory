from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetFileContentPathParams:
    file_id: str = field(default=None, metadata={'path_param': { 'field_name': 'FileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFileContentHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFileContentSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFileContentRequest:
    path_params: GetFileContentPathParams = field(default=None)
    headers: GetFileContentHeaders = field(default=None)
    security: GetFileContentSecurity = field(default=None)
    

@dataclass
class GetFileContentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_file_content_200_application_octet_stream_binary_string: Optional[bytes] = field(default=None)
    

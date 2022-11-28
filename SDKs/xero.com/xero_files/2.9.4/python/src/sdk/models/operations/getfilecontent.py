from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFileContentPathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'FileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFileContentHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFileContentSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFileContentRequest:
    headers: GetFileContentHeaders = field()
    path_params: GetFileContentPathParams = field()
    security: GetFileContentSecurity = field()
    

@dataclass
class GetFileContentResponse:
    content_type: str = field()
    status_code: int = field()
    get_file_content_200_application_octet_stream_binary_string: Optional[bytes] = field(default=None)
    

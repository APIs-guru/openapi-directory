from dataclasses import dataclass, field



@dataclass
class DeleteFilePathParams:
    file_id: str = field(default=None, metadata={'path_param': { 'field_name': 'FileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFileHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFileSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteFileRequest:
    path_params: DeleteFilePathParams = field(default=None)
    headers: DeleteFileHeaders = field(default=None)
    security: DeleteFileSecurity = field(default=None)
    

@dataclass
class DeleteFileResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

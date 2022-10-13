from dataclasses import dataclass, field



@dataclass
class DeleteFileAssociationPathParams:
    file_id: str = field(default=None, metadata={'path_param': { 'field_name': 'FileId', 'style': 'simple', 'explode': False }})
    object_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ObjectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFileAssociationHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'xero-tenant-id' }})
    

@dataclass
class DeleteFileAssociationSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteFileAssociationRequest:
    path_params: DeleteFileAssociationPathParams = field(default=None)
    headers: DeleteFileAssociationHeaders = field(default=None)
    security: DeleteFileAssociationSecurity = field(default=None)
    

@dataclass
class DeleteFileAssociationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

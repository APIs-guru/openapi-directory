from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteFileAssociationPathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'FileId', 'style': 'simple', 'explode': False }})
    object_id: str = field(metadata={'path_param': { 'field_name': 'ObjectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFileAssociationHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFileAssociationSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteFileAssociationRequest:
    headers: DeleteFileAssociationHeaders = field()
    path_params: DeleteFileAssociationPathParams = field()
    security: DeleteFileAssociationSecurity = field()
    

@dataclass
class DeleteFileAssociationResponse:
    content_type: str = field()
    status_code: int = field()
    

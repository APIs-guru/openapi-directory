from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateFileAssociationPathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'FileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateFileAssociationHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateFileAssociationSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateFileAssociationRequest:
    headers: CreateFileAssociationHeaders = field()
    path_params: CreateFileAssociationPathParams = field()
    security: CreateFileAssociationSecurity = field()
    request: Optional[shared.Association] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateFileAssociationResponse:
    content_type: str = field()
    status_code: int = field()
    association: Optional[shared.Association] = field(default=None)
    

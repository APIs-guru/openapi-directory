from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateFileAssociationPathParams:
    file_id: str = field(default=None, metadata={'path_param': { 'field_name': 'FileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateFileAssociationHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateFileAssociationSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateFileAssociationRequest:
    path_params: CreateFileAssociationPathParams = field(default=None)
    headers: CreateFileAssociationHeaders = field(default=None)
    request: Optional[shared.Association] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateFileAssociationSecurity = field(default=None)
    

@dataclass
class CreateFileAssociationResponse:
    association: Optional[shared.Association] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

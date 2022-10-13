from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetFileAssociationsPathParams:
    file_id: str = field(default=None, metadata={'path_param': { 'field_name': 'FileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFileAssociationsHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'xero-tenant-id' }})
    

@dataclass
class GetFileAssociationsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFileAssociationsRequest:
    path_params: GetFileAssociationsPathParams = field(default=None)
    headers: GetFileAssociationsHeaders = field(default=None)
    security: GetFileAssociationsSecurity = field(default=None)
    

@dataclass
class GetFileAssociationsResponse:
    associations: Optional[List[shared.Association]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

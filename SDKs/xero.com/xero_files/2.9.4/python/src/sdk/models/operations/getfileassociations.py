from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetFileAssociationsPathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'FileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFileAssociationsHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFileAssociationsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFileAssociationsRequest:
    headers: GetFileAssociationsHeaders = field()
    path_params: GetFileAssociationsPathParams = field()
    security: GetFileAssociationsSecurity = field()
    

@dataclass
class GetFileAssociationsResponse:
    content_type: str = field()
    status_code: int = field()
    associations: Optional[List[shared.Association]] = field(default=None)
    

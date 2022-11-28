from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAssociationsByObjectPathParams:
    object_id: str = field(metadata={'path_param': { 'field_name': 'ObjectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAssociationsByObjectHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAssociationsByObjectSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAssociationsByObjectRequest:
    headers: GetAssociationsByObjectHeaders = field()
    path_params: GetAssociationsByObjectPathParams = field()
    security: GetAssociationsByObjectSecurity = field()
    

@dataclass
class GetAssociationsByObjectResponse:
    content_type: str = field()
    status_code: int = field()
    associations: Optional[List[shared.Association]] = field(default=None)
    

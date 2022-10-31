from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAssociationsByObjectPathParams:
    object_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ObjectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAssociationsByObjectHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAssociationsByObjectSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAssociationsByObjectRequest:
    path_params: GetAssociationsByObjectPathParams = field(default=None)
    headers: GetAssociationsByObjectHeaders = field(default=None)
    security: GetAssociationsByObjectSecurity = field(default=None)
    

@dataclass
class GetAssociationsByObjectResponse:
    associations: Optional[List[shared.Association]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

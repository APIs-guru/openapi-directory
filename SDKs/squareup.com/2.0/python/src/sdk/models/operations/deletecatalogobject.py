from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteCatalogObjectPathParams:
    object_id: str = field(default=None, metadata={'path_param': { 'field_name': 'object_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCatalogObjectSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteCatalogObjectRequest:
    path_params: DeleteCatalogObjectPathParams = field(default=None)
    security: DeleteCatalogObjectSecurity = field(default=None)
    

@dataclass
class DeleteCatalogObjectResponse:
    content_type: str = field(default=None)
    delete_catalog_object_response: Optional[shared.DeleteCatalogObjectResponse] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveCatalogObjectPathParams:
    object_id: str = field(default=None, metadata={'path_param': { 'field_name': 'object_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveCatalogObjectQueryParams:
    catalog_version: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'catalog_version', 'style': 'form', 'explode': True }})
    include_related_objects: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_related_objects', 'style': 'form', 'explode': True }})
    

@dataclass
class RetrieveCatalogObjectSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveCatalogObjectRequest:
    path_params: RetrieveCatalogObjectPathParams = field(default=None)
    query_params: RetrieveCatalogObjectQueryParams = field(default=None)
    security: RetrieveCatalogObjectSecurity = field(default=None)
    

@dataclass
class RetrieveCatalogObjectResponse:
    content_type: str = field(default=None)
    retrieve_catalog_object_response: Optional[shared.RetrieveCatalogObjectResponse] = field(default=None)
    status_code: int = field(default=None)
    

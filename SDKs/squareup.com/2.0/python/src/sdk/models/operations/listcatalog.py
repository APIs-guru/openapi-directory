from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListCatalogQueryParams:
    catalog_version: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'catalog_version', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    types: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'types', 'style': 'form', 'explode': True }})
    

@dataclass
class ListCatalogSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListCatalogRequest:
    query_params: ListCatalogQueryParams = field(default=None)
    security: ListCatalogSecurity = field(default=None)
    

@dataclass
class ListCatalogResponse:
    content_type: str = field(default=None)
    list_catalog_response: Optional[shared.ListCatalogResponse] = field(default=None)
    status_code: int = field(default=None)
    

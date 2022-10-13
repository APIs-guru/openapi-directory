from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class ListServiceCredentialTypesQueryParams:
    filter: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'deepObject', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'deepObject', 'explode': True }})
    

@dataclass
class ListServiceCredentialTypesRequest:
    query_params: ListServiceCredentialTypesQueryParams = field(default=None)
    

@dataclass
class ListServiceCredentialTypesResponse:
    content_type: str = field(default=None)
    service_credential_types_collection: Optional[shared.ServiceCredentialTypesCollection] = field(default=None)
    status_code: int = field(default=None)
    

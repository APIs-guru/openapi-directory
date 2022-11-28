from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared

class GetFoldersSortEnum(str, Enum):
    NAME = "Name"
    SIZE = "Size"
    CREATED_DATE_UTC = "CreatedDateUTC"


@dataclass
class GetFoldersQueryParams:
    sort: Optional[GetFoldersSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFoldersHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFoldersSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFoldersRequest:
    headers: GetFoldersHeaders = field()
    query_params: GetFoldersQueryParams = field()
    security: GetFoldersSecurity = field()
    

@dataclass
class GetFoldersResponse:
    content_type: str = field()
    status_code: int = field()
    folders: Optional[List[Any]] = field(default=None)
    

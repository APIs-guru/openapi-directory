from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class GetFoldersSortEnum(str, Enum):
    NAME = "Name"
    SIZE = "Size"
    CREATED_DATE_UTC = "CreatedDateUTC"


@dataclass
class GetFoldersQueryParams:
    sort: Optional[GetFoldersSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFoldersHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFoldersSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFoldersRequest:
    query_params: GetFoldersQueryParams = field(default=None)
    headers: GetFoldersHeaders = field(default=None)
    security: GetFoldersSecurity = field(default=None)
    

@dataclass
class GetFoldersResponse:
    content_type: str = field(default=None)
    folders: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    

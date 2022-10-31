from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class GetFilesSortEnum(str, Enum):
    NAME = "Name"
    SIZE = "Size"
    CREATED_DATE_UTC = "CreatedDateUTC"


@dataclass
class GetFilesQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    sort: Optional[GetFilesSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFilesHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFilesSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFilesRequest:
    query_params: GetFilesQueryParams = field(default=None)
    headers: GetFilesHeaders = field(default=None)
    security: GetFilesSecurity = field(default=None)
    

@dataclass
class GetFilesResponse:
    content_type: str = field(default=None)
    files: Optional[shared.Files] = field(default=None)
    status_code: int = field(default=None)
    

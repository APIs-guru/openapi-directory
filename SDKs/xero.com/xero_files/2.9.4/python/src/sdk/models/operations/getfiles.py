from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
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
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFilesSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFilesRequest:
    headers: GetFilesHeaders = field()
    query_params: GetFilesQueryParams = field()
    security: GetFilesSecurity = field()
    

@dataclass
class GetFilesResponse:
    content_type: str = field()
    status_code: int = field()
    files: Optional[shared.Files] = field(default=None)
    

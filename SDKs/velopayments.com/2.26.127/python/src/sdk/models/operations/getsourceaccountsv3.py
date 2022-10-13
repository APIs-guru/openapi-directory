from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class GetSourceAccountsV3QueryParams:
    funding_account_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fundingAccountId', 'style': 'form', 'explode': True }})
    include_user_deleted: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'includeUserDeleted', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    payor_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    physical_account_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'physicalAccountId', 'style': 'form', 'explode': True }})
    physical_account_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'physicalAccountName', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    type: Optional[shared.SourceAccountTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSourceAccountsV3Request:
    query_params: GetSourceAccountsV3QueryParams = field(default=None)
    

@dataclass
class GetSourceAccountsV3Response:
    content_type: str = field(default=None)
    list_source_account_response_v3: Optional[shared.ListSourceAccountResponseV3] = field(default=None)
    status_code: int = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    

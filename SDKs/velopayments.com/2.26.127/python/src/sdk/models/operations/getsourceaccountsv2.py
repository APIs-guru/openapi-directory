from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetSourceAccountsV2QueryParams:
    funding_account_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fundingAccountId', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    payor_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    physical_account_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'physicalAccountId', 'style': 'form', 'explode': True }})
    physical_account_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'physicalAccountName', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSourceAccountsV2Request:
    query_params: GetSourceAccountsV2QueryParams = field(default=None)
    

@dataclass
class GetSourceAccountsV2Response:
    content_type: str = field(default=None)
    list_source_account_response_v2: Optional[shared.ListSourceAccountResponseV2] = field(default=None)
    status_code: int = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    

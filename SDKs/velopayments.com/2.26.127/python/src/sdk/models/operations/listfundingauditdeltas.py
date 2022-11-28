from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ListFundingAuditDeltasQueryParams:
    payor_id: str = field(metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    updated_since: datetime = field(metadata={'query_param': { 'field_name': 'updatedSince', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListFundingAuditDeltasRequest:
    query_params: ListFundingAuditDeltasQueryParams = field()
    

@dataclass
class ListFundingAuditDeltasResponse:
    content_type: str = field()
    status_code: int = field()
    page_resource_funding_payor_status_audit_response_funding_payor_status_audit_response: Optional[shared.PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse] = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    

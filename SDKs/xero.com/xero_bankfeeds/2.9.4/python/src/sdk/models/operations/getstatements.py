from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetStatementsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStatementsHeaders:
    xero_application_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Xero-Application-Id', 'style': 'simple', 'explode': False }})
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    xero_user_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Xero-User-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStatementsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetStatementsRequest:
    query_params: GetStatementsQueryParams = field(default=None)
    headers: GetStatementsHeaders = field(default=None)
    security: GetStatementsSecurity = field(default=None)
    

@dataclass
class GetStatementsResponse:
    content_type: str = field(default=None)
    statements: Optional[shared.Statements] = field(default=None)
    status_code: int = field(default=None)
    

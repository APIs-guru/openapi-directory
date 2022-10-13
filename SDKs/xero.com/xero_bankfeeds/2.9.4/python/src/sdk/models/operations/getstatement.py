from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetStatementPathParams:
    statement_id: str = field(default=None, metadata={'path_param': { 'field_name': 'statementID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStatementQueryParams:
    statement_id: str = field(default=None, metadata={'query_param': { 'field_name': 'statementId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStatementHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id' }})
    

@dataclass
class GetStatementSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetStatementRequest:
    path_params: GetStatementPathParams = field(default=None)
    query_params: GetStatementQueryParams = field(default=None)
    headers: GetStatementHeaders = field(default=None)
    security: GetStatementSecurity = field(default=None)
    

@dataclass
class GetStatementResponse:
    content_type: str = field(default=None)
    statement: Optional[shared.Statement] = field(default=None)
    status_code: int = field(default=None)
    

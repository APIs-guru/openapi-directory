from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetStatementPathParams:
    statement_id: str = field(metadata={'path_param': { 'field_name': 'statementID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStatementQueryParams:
    statement_id: str = field(metadata={'query_param': { 'field_name': 'statementId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStatementHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStatementSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetStatementRequest:
    headers: GetStatementHeaders = field()
    path_params: GetStatementPathParams = field()
    query_params: GetStatementQueryParams = field()
    security: GetStatementSecurity = field()
    

@dataclass
class GetStatementResponse:
    content_type: str = field()
    status_code: int = field()
    statement: Optional[shared.Statement] = field(default=None)
    

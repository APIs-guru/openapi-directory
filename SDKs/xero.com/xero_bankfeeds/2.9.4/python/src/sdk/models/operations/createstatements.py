from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateStatementsHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateStatementsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateStatementsRequest:
    headers: CreateStatementsHeaders = field()
    security: CreateStatementsSecurity = field()
    request: Optional[shared.Statements] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateStatementsResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    statements: Optional[shared.Statements] = field(default=None)
    

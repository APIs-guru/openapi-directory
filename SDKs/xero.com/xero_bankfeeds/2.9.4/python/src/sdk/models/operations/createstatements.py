from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateStatementsHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id' }})
    

@dataclass
class CreateStatementsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateStatementsRequest:
    headers: CreateStatementsHeaders = field(default=None)
    request: Optional[shared.Statements] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateStatementsSecurity = field(default=None)
    

@dataclass
class CreateStatementsResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    statements: Optional[shared.Statements] = field(default=None)
    status_code: int = field(default=None)
    

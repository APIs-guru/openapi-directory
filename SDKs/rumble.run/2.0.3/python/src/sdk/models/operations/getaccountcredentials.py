from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAccountCredentialsQueryParams:
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAccountCredentialsSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAccountCredentialsRequest:
    query_params: GetAccountCredentialsQueryParams = field(default=None)
    security: GetAccountCredentialsSecurity = field(default=None)
    

@dataclass
class GetAccountCredentialsResponse:
    content_type: str = field(default=None)
    credentials: Optional[List[shared.Credential]] = field(default=None)
    status_code: int = field(default=None)
    

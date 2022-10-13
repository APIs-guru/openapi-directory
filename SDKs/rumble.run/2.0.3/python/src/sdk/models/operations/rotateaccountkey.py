from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RotateAccountKeyPathParams:
    key_id: str = field(default=None, metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RotateAccountKeySecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RotateAccountKeyRequest:
    path_params: RotateAccountKeyPathParams = field(default=None)
    security: RotateAccountKeySecurity = field(default=None)
    

@dataclass
class RotateAccountKeyResponse:
    api_key: Optional[shared.APIKey] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

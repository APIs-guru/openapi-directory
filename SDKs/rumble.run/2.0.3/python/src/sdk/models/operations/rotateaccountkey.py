from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RotateAccountKeyPathParams:
    key_id: str = field(metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RotateAccountKeySecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RotateAccountKeyRequest:
    path_params: RotateAccountKeyPathParams = field()
    security: RotateAccountKeySecurity = field()
    

@dataclass
class RotateAccountKeyResponse:
    content_type: str = field()
    status_code: int = field()
    api_key: Optional[shared.APIKey] = field(default=None)
    

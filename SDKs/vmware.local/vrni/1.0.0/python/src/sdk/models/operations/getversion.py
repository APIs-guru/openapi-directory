from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVersionSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetVersionRequest:
    security: GetVersionSecurity = field(default=None)
    

@dataclass
class GetVersionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    version_response: Optional[shared.VersionResponse] = field(default=None)
    

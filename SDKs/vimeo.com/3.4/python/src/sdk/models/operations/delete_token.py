from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteTokenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    auth: Optional[shared.Auth] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    

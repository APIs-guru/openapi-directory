from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteTokenResponse:
    content_type: str = field()
    status_code: int = field()
    auth: Optional[shared.Auth] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TestGetResponse:
    content_type: str = field()
    status_code: int = field()
    test_dto: Optional[shared.TestDto] = field(default=None)
    

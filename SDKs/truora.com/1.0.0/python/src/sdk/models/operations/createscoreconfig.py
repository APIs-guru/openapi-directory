from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CreateScoreConfigRequest:
    request: shared.CreateConfigInput = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class CreateScoreConfigResponse:
    content_type: str = field(default=None)
    error: Optional[Any] = field(default=None)
    score_config_output: Optional[shared.ScoreConfigOutput] = field(default=None)
    status_code: int = field(default=None)
    

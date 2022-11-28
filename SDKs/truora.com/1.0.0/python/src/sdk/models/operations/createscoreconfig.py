from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CreateScoreConfigRequest:
    request: shared.CreateConfigInput = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class CreateScoreConfigResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[Any] = field(default=None)
    score_config_output: Optional[shared.ScoreConfigOutput] = field(default=None)
    

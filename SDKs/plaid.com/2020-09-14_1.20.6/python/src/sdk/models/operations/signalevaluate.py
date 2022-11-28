from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class SignalEvaluateRequest:
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SignalEvaluateResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    signal_evaluate_response: Optional[dict[str, Any]] = field(default=None)
    

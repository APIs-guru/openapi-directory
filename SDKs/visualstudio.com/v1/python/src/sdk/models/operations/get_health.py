from dataclasses import dataclass, field



@dataclass
class GetHealthResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

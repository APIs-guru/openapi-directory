from dataclasses import dataclass, field



@dataclass
class GetHealthResponse:
    content_type: str = field()
    status_code: int = field()
    

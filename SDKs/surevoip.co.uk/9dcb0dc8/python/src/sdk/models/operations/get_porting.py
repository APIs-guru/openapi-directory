from dataclasses import dataclass, field



@dataclass
class GetPortingResponse:
    content_type: str = field()
    status_code: int = field()
    

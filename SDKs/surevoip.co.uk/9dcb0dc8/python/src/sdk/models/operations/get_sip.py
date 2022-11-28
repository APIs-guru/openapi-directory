from dataclasses import dataclass, field



@dataclass
class GetSipResponse:
    content_type: str = field()
    status_code: int = field()
    

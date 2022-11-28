from dataclasses import dataclass, field



@dataclass
class GetTestPageResponse:
    content_type: str = field()
    status_code: int = field()
    

from dataclasses import dataclass, field



@dataclass
class GetServiceStatusResponse:
    content_type: str = field()
    status_code: int = field()
    

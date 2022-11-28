from dataclasses import dataclass, field



@dataclass
class GetSupportServiceStatusResponse:
    content_type: str = field()
    status_code: int = field()
    

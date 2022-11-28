from dataclasses import dataclass, field



@dataclass
class GetMobileResponse:
    content_type: str = field()
    status_code: int = field()
    

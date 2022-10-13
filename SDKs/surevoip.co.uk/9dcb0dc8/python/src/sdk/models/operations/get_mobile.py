from dataclasses import dataclass, field



@dataclass
class GetMobileResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

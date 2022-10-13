from dataclasses import dataclass, field



@dataclass
class GetSupportServiceStatusResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

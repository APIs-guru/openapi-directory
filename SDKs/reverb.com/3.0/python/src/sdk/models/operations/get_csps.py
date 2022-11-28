from dataclasses import dataclass, field



@dataclass
class GetCspsResponse:
    content_type: str = field()
    status_code: int = field()
    

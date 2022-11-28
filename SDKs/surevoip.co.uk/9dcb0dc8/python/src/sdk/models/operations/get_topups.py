from dataclasses import dataclass, field



@dataclass
class GetTopupsResponse:
    content_type: str = field()
    status_code: int = field()
    

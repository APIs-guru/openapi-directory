from dataclasses import dataclass, field



@dataclass
class GetReadinessPageResponse:
    content_type: str = field()
    status_code: int = field()
    

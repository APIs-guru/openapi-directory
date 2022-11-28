from dataclasses import dataclass, field



@dataclass
class GetLivenessPageResponse:
    content_type: str = field()
    status_code: int = field()
    

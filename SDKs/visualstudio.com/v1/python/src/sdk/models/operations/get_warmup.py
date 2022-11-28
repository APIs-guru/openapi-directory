from dataclasses import dataclass, field



@dataclass
class GetWarmupResponse:
    content_type: str = field()
    status_code: int = field()
    

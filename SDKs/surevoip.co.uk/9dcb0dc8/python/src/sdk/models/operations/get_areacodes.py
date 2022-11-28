from dataclasses import dataclass, field



@dataclass
class GetAreacodesResponse:
    content_type: str = field()
    status_code: int = field()
    

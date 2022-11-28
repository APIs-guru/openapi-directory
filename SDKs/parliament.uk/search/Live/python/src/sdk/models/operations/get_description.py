from dataclasses import dataclass, field



@dataclass
class GetDescriptionResponse:
    content_type: str = field()
    status_code: int = field()
    

from dataclasses import dataclass, field



@dataclass
class GetChargesResponse:
    content_type: str = field()
    status_code: int = field()
    

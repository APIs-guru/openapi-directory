from dataclasses import dataclass, field



@dataclass
class GetPartnersResponse:
    content_type: str = field()
    status_code: int = field()
    

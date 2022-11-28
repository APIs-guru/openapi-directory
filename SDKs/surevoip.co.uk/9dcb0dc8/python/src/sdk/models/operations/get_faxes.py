from dataclasses import dataclass, field



@dataclass
class GetFaxesResponse:
    content_type: str = field()
    status_code: int = field()
    

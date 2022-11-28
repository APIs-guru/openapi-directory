from dataclasses import dataclass, field



@dataclass
class GetNumbersResponse:
    content_type: str = field()
    status_code: int = field()
    

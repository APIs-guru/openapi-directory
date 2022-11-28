from dataclasses import dataclass, field



@dataclass
class GetIPAddressResponse:
    content_type: str = field()
    status_code: int = field()
    

from dataclasses import dataclass, field



@dataclass
class GetSupportIPAddressResponse:
    content_type: str = field()
    status_code: int = field()
    

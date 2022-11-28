from dataclasses import dataclass, field



@dataclass
class GetBillingResponse:
    content_type: str = field()
    status_code: int = field()
    

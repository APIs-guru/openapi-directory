from dataclasses import dataclass, field



@dataclass
class GetPaymentMethodsResponse:
    content_type: str = field()
    status_code: int = field()
    

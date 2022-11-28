from dataclasses import dataclass, field



@dataclass
class GetCurrenciesDisplayResponse:
    content_type: str = field()
    status_code: int = field()
    

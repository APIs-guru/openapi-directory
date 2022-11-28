from dataclasses import dataclass, field



@dataclass
class GetHostedResponse:
    content_type: str = field()
    status_code: int = field()
    

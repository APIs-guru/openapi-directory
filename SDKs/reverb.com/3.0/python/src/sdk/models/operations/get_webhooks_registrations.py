from dataclasses import dataclass, field



@dataclass
class GetWebhooksRegistrationsResponse:
    content_type: str = field()
    status_code: int = field()
    

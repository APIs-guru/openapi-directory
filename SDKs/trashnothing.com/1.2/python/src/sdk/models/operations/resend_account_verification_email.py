from dataclasses import dataclass, field



@dataclass
class ResendAccountVerificationEmailResponse:
    content_type: str = field()
    status_code: int = field()
    

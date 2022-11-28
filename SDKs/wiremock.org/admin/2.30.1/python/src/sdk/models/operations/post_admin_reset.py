from dataclasses import dataclass, field



@dataclass
class PostAdminResetResponse:
    content_type: str = field()
    status_code: int = field()
    

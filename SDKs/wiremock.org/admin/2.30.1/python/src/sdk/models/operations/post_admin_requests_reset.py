from dataclasses import dataclass, field



@dataclass
class PostAdminRequestsResetResponse:
    content_type: str = field()
    status_code: int = field()
    

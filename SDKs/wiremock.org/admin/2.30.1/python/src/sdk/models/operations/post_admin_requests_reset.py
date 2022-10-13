from dataclasses import dataclass, field



@dataclass
class PostAdminRequestsResetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

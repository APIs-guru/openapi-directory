from dataclasses import dataclass, field



@dataclass
class PostNotificationsTestResponse:
    content_type: str = field()
    status_code: int = field()
    

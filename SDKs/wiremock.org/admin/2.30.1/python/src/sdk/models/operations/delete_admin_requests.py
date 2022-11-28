from dataclasses import dataclass, field



@dataclass
class DeleteAdminRequestsResponse:
    content_type: str = field()
    status_code: int = field()
    

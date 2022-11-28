from dataclasses import dataclass, field



@dataclass
class DeleteAdminMappingsResponse:
    content_type: str = field()
    status_code: int = field()
    

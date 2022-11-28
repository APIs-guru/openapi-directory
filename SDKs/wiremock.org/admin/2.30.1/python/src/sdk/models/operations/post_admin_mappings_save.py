from dataclasses import dataclass, field



@dataclass
class PostAdminMappingsSaveResponse:
    content_type: str = field()
    status_code: int = field()
    

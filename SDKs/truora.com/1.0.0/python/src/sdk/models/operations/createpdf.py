from dataclasses import dataclass, field



@dataclass
class CreatePdfPathParams:
    check_id: str = field(default=None, metadata={'path_param': { 'field_name': 'check_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePdfRequest:
    path_params: CreatePdfPathParams = field(default=None)
    

@dataclass
class CreatePdfResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

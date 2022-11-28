from dataclasses import dataclass, field



@dataclass
class CreatePdfPathParams:
    check_id: str = field(metadata={'path_param': { 'field_name': 'check_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePdfRequest:
    path_params: CreatePdfPathParams = field()
    

@dataclass
class CreatePdfResponse:
    content_type: str = field()
    status_code: int = field()
    

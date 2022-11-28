from dataclasses import dataclass, field



@dataclass
class DeleteAttributesComputedIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAttributesComputedIDRequest:
    path_params: DeleteAttributesComputedIDPathParams = field()
    

@dataclass
class DeleteAttributesComputedIDResponse:
    content_type: str = field()
    status_code: int = field()
    

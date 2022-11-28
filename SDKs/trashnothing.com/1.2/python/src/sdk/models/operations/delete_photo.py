from dataclasses import dataclass, field



@dataclass
class DeletePhotoPathParams:
    photo_id: str = field(metadata={'path_param': { 'field_name': 'photo_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePhotoRequest:
    path_params: DeletePhotoPathParams = field()
    

@dataclass
class DeletePhotoResponse:
    content_type: str = field()
    status_code: int = field()
    

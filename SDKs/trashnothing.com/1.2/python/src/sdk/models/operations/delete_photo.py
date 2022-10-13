from dataclasses import dataclass, field



@dataclass
class DeletePhotoPathParams:
    photo_id: str = field(default=None, metadata={'path_param': { 'field_name': 'photo_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePhotoRequest:
    path_params: DeletePhotoPathParams = field(default=None)
    

@dataclass
class DeletePhotoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

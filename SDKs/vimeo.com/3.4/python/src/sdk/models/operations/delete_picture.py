from dataclasses import dataclass, field



@dataclass
class DeletePicturePathParams:
    portraitset_id: float = field(default=None, metadata={'path_param': { 'field_name': 'portraitset_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePictureSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeletePictureRequest:
    path_params: DeletePicturePathParams = field(default=None)
    security: DeletePictureSecurity = field(default=None)
    

@dataclass
class DeletePictureResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

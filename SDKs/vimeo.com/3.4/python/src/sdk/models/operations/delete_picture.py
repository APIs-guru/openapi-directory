from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeletePicturePathParams:
    portraitset_id: float = field(metadata={'path_param': { 'field_name': 'portraitset_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePictureSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeletePictureRequest:
    path_params: DeletePicturePathParams = field()
    security: DeletePictureSecurity = field()
    

@dataclass
class DeletePictureResponse:
    content_type: str = field()
    status_code: int = field()
    

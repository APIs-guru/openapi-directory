from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeletePictureAlt1PathParams:
    portraitset_id: float = field(metadata={'path_param': { 'field_name': 'portraitset_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePictureAlt1Security:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeletePictureAlt1Request:
    path_params: DeletePictureAlt1PathParams = field()
    security: DeletePictureAlt1Security = field()
    

@dataclass
class DeletePictureAlt1Response:
    content_type: str = field()
    status_code: int = field()
    

from dataclasses import dataclass, field



@dataclass
class DeletePictureAlt1PathParams:
    portraitset_id: float = field(default=None, metadata={'path_param': { 'field_name': 'portraitset_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePictureAlt1Security:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeletePictureAlt1Request:
    path_params: DeletePictureAlt1PathParams = field(default=None)
    security: DeletePictureAlt1Security = field(default=None)
    

@dataclass
class DeletePictureAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

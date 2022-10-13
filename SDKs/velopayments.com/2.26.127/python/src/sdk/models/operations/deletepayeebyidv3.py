from dataclasses import dataclass, field



@dataclass
class DeletePayeeByIDV3PathParams:
    payee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payeeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePayeeByIDV3Request:
    path_params: DeletePayeeByIDV3PathParams = field(default=None)
    

@dataclass
class DeletePayeeByIDV3Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

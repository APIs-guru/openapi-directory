from dataclasses import dataclass, field



@dataclass
class DeletePayeeByIDV3PathParams:
    payee_id: str = field(metadata={'path_param': { 'field_name': 'payeeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePayeeByIDV3Request:
    path_params: DeletePayeeByIDV3PathParams = field()
    

@dataclass
class DeletePayeeByIDV3Response:
    content_type: str = field()
    status_code: int = field()
    

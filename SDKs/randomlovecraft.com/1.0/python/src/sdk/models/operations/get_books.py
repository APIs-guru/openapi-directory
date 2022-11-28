from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class GetBooks200ApplicationJSON:
    data: Optional[List[shared.Book]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class GetBooksResponse:
    content_type: str = field()
    status_code: int = field()
    get_books_200_application_json_object: Optional[GetBooks200ApplicationJSON] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssetResponse:
    r"""AssetResponse
    The response returned by the Serve API [get asset](#get-asset) request. Includes details of a hosted video, image, audio file, thumbnail or poster image. The response follows the [json:api](https://jsonapi.org/) specification.
    """
    
    data: Optional[AssetResponseData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

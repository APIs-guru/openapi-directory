from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssetRenderResponse:
    r"""AssetRenderResponse
    The response returned by the Serve API [get asset by render id](#get-asset-by-render-id) request. The response  is an array of asset resources, including video, image, audio, thumbnail and poster image. The response follows  the [json:api](https://jsonapi.org/) specification.
    """
    
    data: Optional[List[AssetResponseData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

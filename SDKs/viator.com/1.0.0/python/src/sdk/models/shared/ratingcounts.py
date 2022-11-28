from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RatingCounts:
    r"""RatingCounts
    **dictionary** of rating (stars) to number of reviews with each rating for *this* product\"
    
    users rate products by assigning a star-rating from 1-5; these values show the total number of reviews for each of the star ratings (up to a maximum given in the `reviewCount` field in this response)
    
    - **note**: see response sample for structure
    
    """
    
    one: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('1') }})
    two: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('2') }})
    three: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('3') }})
    four: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('4') }})
    five: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('5') }})
    

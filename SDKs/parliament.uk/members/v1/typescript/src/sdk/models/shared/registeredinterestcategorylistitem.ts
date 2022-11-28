import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { RegisteredInterestCategory } from "./registeredinterestcategory";



export class RegisteredInterestCategoryListItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links", elemType: Link })
  links?: Link[];

  @SpeakeasyMetadata({ data: "json, name=value", elemType: RegisteredInterestCategory })
  value?: RegisteredInterestCategory[];
}

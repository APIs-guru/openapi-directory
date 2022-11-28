import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";



export class CategoryResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: Category;
}


export class CategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: CategoryResponseData;
}

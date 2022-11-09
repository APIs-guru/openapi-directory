import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Category } from "./category";


export class CategoryResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: Category;
}


export class CategoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: CategoryResponseData;
}

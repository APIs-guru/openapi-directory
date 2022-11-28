import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoryGroupWithCategories } from "./categorygroupwithcategories";



export class CategoriesResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category_groups", elemType: CategoryGroupWithCategories })
  categoryGroups: CategoryGroupWithCategories[];

  @SpeakeasyMetadata({ data: "json, name=server_knowledge" })
  serverKnowledge: number;
}


export class CategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: CategoriesResponseData;
}

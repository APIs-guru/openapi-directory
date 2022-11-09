import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CategoryGroupWithCategories } from "./categorygroupwithcategories";


export class CategoriesResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=category_groups", elemType: shared.CategoryGroupWithCategories })
  categoryGroups: CategoryGroupWithCategories[];

  @Metadata({ data: "json, name=server_knowledge" })
  serverKnowledge: number;
}


export class CategoriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: CategoriesResponseData;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Category } from "./category";


export class CategoryGroupWithCategories extends SpeakeasyBase {
  @Metadata({ data: "json, name=categories", elemType: shared.Category })
  categories: Category[];

  @Metadata({ data: "json, name=deleted" })
  deleted: boolean;

  @Metadata({ data: "json, name=hidden" })
  hidden: boolean;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}

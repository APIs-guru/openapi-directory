import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Category } from "./category";


export class SaveCategoryResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: Category;

  @Metadata({ data: "json, name=server_knowledge" })
  serverKnowledge: number;
}


export class SaveCategoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: SaveCategoryResponseData;
}

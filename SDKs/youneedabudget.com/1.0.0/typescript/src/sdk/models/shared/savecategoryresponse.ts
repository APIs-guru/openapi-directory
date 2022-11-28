import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";



export class SaveCategoryResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: Category;

  @SpeakeasyMetadata({ data: "json, name=server_knowledge" })
  serverKnowledge: number;
}


export class SaveCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: SaveCategoryResponseData;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SaveMonthCategory } from "./savemonthcategory";


export class SaveMonthCategoryWrapper extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: SaveMonthCategory;
}

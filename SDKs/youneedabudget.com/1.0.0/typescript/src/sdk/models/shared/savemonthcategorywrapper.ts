import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SaveMonthCategory } from "./savemonthcategory";



export class SaveMonthCategoryWrapper extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: SaveMonthCategory;
}

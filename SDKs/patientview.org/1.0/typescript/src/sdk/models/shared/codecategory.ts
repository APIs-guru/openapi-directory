import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";



export class CodeCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: Category;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}

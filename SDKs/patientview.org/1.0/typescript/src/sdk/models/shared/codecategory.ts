import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Category } from "./category";


export class CodeCategory extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: Category;

  @Metadata({ data: "json, name=id" })
  id?: number;
}

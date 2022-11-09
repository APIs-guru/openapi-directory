import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Category } from "./category";


export class CategoryRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: Category;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=payee_matches" })
  payeeMatches?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}

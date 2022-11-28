import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";



export class CategoryRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: Category;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=payee_matches" })
  payeeMatches?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}

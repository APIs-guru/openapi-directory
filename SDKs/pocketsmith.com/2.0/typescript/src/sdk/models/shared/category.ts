import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Category } from "./category";


export class Category extends SpeakeasyBase {
  @Metadata({ data: "json, name=children", elemType: shared.Category })
  children?: Category[];

  @Metadata({ data: "json, name=colour" })
  colour?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=is_transfer" })
  isTransfer?: boolean;

  @Metadata({ data: "json, name=parent_id" })
  parentId?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Category extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=children", elemType: Category })
  children?: Category[];

  @SpeakeasyMetadata({ data: "json, name=colour" })
  colour?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=is_transfer" })
  isTransfer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=parent_id" })
  parentId?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}

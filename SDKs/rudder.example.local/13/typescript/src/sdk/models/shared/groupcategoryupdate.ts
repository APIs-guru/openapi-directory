import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GroupCategoryUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=parent" })
  parent: string;
}

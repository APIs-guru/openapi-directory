import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CategoryGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=deleted" })
  deleted: boolean;

  @Metadata({ data: "json, name=hidden" })
  hidden: boolean;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}

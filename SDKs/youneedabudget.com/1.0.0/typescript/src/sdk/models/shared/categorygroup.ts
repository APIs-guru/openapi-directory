import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CategoryGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted: boolean;

  @SpeakeasyMetadata({ data: "json, name=hidden" })
  hidden: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}

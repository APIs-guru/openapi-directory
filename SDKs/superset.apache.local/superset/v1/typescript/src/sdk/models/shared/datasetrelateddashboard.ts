import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DatasetRelatedDashboard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=json_metadata" })
  jsonMetadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DatasetRelatedDashboard extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=json_metadata" })
  jsonMetadata?: Map<string, any>;

  @Metadata({ data: "json, name=slug" })
  slug?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}

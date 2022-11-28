import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SnippetModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, string>;
}

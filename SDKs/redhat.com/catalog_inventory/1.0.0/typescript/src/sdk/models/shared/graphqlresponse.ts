import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GraphQlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Map<string, any>[];
}

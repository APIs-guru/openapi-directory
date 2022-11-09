import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GraphQlResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=errors" })
  errors?: Map<string, any>[];
}

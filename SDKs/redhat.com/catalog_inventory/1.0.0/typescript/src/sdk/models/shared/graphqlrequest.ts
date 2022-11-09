import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GraphQlRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=operationName" })
  operationName?: string;

  @Metadata({ data: "json, name=query" })
  query: string;

  @Metadata({ data: "json, name=variables" })
  variables?: Map<string, any>;
}

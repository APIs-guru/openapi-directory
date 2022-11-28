import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemasResponseSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: string[];
}

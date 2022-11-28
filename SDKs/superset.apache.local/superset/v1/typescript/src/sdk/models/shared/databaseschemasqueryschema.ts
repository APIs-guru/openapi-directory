import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DatabaseSchemasQuerySchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=force" })
  force?: boolean;
}

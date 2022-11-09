import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DatabaseSchemasQuerySchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=force" })
  force?: boolean;
}

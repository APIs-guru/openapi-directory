import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EventsV1SchemaSchemaVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=raw" })
  raw?: string;

  @Metadata({ data: "json, name=schema_version" })
  schemaVersion?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

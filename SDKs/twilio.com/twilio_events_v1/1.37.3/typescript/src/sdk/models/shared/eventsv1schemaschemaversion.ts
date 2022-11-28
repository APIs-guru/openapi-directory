import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EventsV1SchemaSchemaVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=raw" })
  raw?: string;

  @SpeakeasyMetadata({ data: "json, name=schema_version" })
  schemaVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

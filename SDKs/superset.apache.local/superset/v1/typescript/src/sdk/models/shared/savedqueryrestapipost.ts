import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SavedQueryRestApiPost extends SpeakeasyBase {
  @Metadata({ data: "json, name=db_id" })
  dbId?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=schema" })
  schema?: string;

  @Metadata({ data: "json, name=sql" })
  sql?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SavedQueryRestApiPut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=db_id" })
  dbId?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;

  @SpeakeasyMetadata({ data: "json, name=sql" })
  sql?: string;
}

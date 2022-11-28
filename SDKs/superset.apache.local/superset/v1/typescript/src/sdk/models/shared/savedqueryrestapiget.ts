import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Meta31 } from "./meta31";
import { Meta32 } from "./meta32";



export class SavedQueryRestApiGet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: Meta31;

  @SpeakeasyMetadata({ data: "json, name=database" })
  database?: Meta32;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;

  @SpeakeasyMetadata({ data: "json, name=sql" })
  sql?: string;

  @SpeakeasyMetadata({ data: "json, name=sql_tables" })
  sqlTables?: any;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Meta31 } from "./meta31";
import { Meta32 } from "./meta32";


export class SavedQueryRestApiGet extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_by" })
  createdBy?: Meta31;

  @Metadata({ data: "json, name=database" })
  database?: Meta32;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=schema" })
  schema?: string;

  @Metadata({ data: "json, name=sql" })
  sql?: string;

  @Metadata({ data: "json, name=sql_tables" })
  sqlTables?: any;
}

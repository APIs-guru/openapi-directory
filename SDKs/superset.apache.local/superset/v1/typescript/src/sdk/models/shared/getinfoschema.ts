import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInfoSchemaAddColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;
}


export class GetInfoSchemaEditColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;
}

export enum GetInfoSchemaKeysEnum {
    AddColumns = "add_columns"
,    EditColumns = "edit_columns"
,    Filters = "filters"
,    Permissions = "permissions"
,    AddTitle = "add_title"
,    EditTitle = "edit_title"
,    None = "none"
}


export class GetInfoSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=add_columns", elemType: shared.GetInfoSchemaAddColumns })
  addColumns?: Map<string, GetInfoSchemaAddColumns>;

  @Metadata({ data: "json, name=edit_columns", elemType: shared.GetInfoSchemaEditColumns })
  editColumns?: Map<string, GetInfoSchemaEditColumns>;

  @Metadata({ data: "json, name=keys" })
  keys?: GetInfoSchemaKeysEnum[];
}

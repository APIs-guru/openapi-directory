import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInfoSchemaAddColumns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;
}


export class GetInfoSchemaEditColumns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;
}

export enum GetInfoSchemaKeysEnum {
    AddColumns = "add_columns",
    EditColumns = "edit_columns",
    Filters = "filters",
    Permissions = "permissions",
    AddTitle = "add_title",
    EditTitle = "edit_title",
    None = "none"
}


export class GetInfoSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add_columns", elemType: GetInfoSchemaAddColumns })
  addColumns?: Map<string, GetInfoSchemaAddColumns>;

  @SpeakeasyMetadata({ data: "json, name=edit_columns", elemType: GetInfoSchemaEditColumns })
  editColumns?: Map<string, GetInfoSchemaEditColumns>;

  @SpeakeasyMetadata({ data: "json, name=keys" })
  keys?: GetInfoSchemaKeysEnum[];
}

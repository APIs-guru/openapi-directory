import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInfoSchemaAddColumns extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetInfoSchemaEditColumns extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare enum GetInfoSchemaKeysEnum {
    AddColumns = "add_columns",
    EditColumns = "edit_columns",
    Filters = "filters",
    Permissions = "permissions",
    AddTitle = "add_title",
    EditTitle = "edit_title",
    None = "none"
}
export declare class GetInfoSchema extends SpeakeasyBase {
    addColumns?: Map<string, GetInfoSchemaAddColumns>;
    editColumns?: Map<string, GetInfoSchemaEditColumns>;
    keys?: GetInfoSchemaKeysEnum[];
}

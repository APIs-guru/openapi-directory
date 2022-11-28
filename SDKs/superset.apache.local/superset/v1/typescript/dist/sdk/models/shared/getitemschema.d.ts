import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetItemSchemaKeysEnum {
    ShowColumns = "show_columns",
    DescriptionColumns = "description_columns",
    LabelColumns = "label_columns",
    ShowTitle = "show_title",
    None = "none"
}
export declare class GetItemSchema extends SpeakeasyBase {
    columns?: string[];
    keys?: GetItemSchemaKeysEnum[];
}

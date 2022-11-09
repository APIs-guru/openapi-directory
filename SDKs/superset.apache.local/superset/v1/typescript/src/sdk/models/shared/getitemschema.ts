import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetItemSchemaKeysEnum {
    ShowColumns = "show_columns"
,    DescriptionColumns = "description_columns"
,    LabelColumns = "label_columns"
,    ShowTitle = "show_title"
,    None = "none"
}


export class GetItemSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=columns" })
  columns?: string[];

  @Metadata({ data: "json, name=keys" })
  keys?: GetItemSchemaKeysEnum[];
}

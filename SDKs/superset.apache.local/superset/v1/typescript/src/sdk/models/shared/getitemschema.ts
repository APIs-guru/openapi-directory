import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetItemSchemaKeysEnum {
    ShowColumns = "show_columns",
    DescriptionColumns = "description_columns",
    LabelColumns = "label_columns",
    ShowTitle = "show_title",
    None = "none"
}


export class GetItemSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columns" })
  columns?: string[];

  @SpeakeasyMetadata({ data: "json, name=keys" })
  keys?: GetItemSchemaKeysEnum[];
}

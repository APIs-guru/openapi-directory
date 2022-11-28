import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CustomFieldDefinitionValues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}


export class CustomFieldDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultValue" })
  defaultValue?: string;

  @SpeakeasyMetadata({ data: "json, name=isRequired" })
  isRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=values", elemType: CustomFieldDefinitionValues })
  values?: CustomFieldDefinitionValues[];
}

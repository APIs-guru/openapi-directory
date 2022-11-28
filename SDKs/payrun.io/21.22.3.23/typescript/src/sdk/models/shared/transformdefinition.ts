import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TransformDefinitionTransformDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ContentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=Definition" })
  definition?: string;

  @SpeakeasyMetadata({ data: "json, name=DefinitionType" })
  definitionType?: string;

  @SpeakeasyMetadata({ data: "json, name=Readonly" })
  readonly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SupportedReports" })
  supportedReports?: string;

  @SpeakeasyMetadata({ data: "json, name=TaxYear" })
  taxYear?: number;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}


export class TransformDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TransformDefinition" })
  transformDefinition?: TransformDefinitionTransformDefinition;
}

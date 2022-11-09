import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TransformDefinitionTransformDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=Active" })
  active?: boolean;

  @Metadata({ data: "json, name=ContentType" })
  contentType?: string;

  @Metadata({ data: "json, name=Definition" })
  definition?: string;

  @Metadata({ data: "json, name=DefinitionType" })
  definitionType?: string;

  @Metadata({ data: "json, name=Readonly" })
  readonly?: boolean;

  @Metadata({ data: "json, name=SupportedReports" })
  supportedReports?: string;

  @Metadata({ data: "json, name=TaxYear" })
  taxYear?: number;

  @Metadata({ data: "json, name=Title" })
  title?: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}


export class TransformDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=TransformDefinition" })
  transformDefinition?: TransformDefinitionTransformDefinition;
}

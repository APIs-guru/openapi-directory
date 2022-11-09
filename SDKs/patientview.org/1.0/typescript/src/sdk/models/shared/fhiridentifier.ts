import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FhirIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}

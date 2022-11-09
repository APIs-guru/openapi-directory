import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FhirContact extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=system" })
  system?: string;

  @Metadata({ data: "json, name=use" })
  use?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}

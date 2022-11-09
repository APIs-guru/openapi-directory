import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FhirProcedure extends SpeakeasyBase {
  @Metadata({ data: "json, name=bodySite" })
  bodySite?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;
}

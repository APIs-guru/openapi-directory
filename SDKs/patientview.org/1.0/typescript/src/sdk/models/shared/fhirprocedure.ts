import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FhirProcedure extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bodySite" })
  bodySite?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

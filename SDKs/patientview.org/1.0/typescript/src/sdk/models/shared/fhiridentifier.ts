import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FhirIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}

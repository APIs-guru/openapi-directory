import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FhirContact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=system" })
  system?: string;

  @SpeakeasyMetadata({ data: "json, name=use" })
  use?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}

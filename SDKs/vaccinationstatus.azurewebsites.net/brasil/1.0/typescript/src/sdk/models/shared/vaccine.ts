import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Vaccine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dose" })
  dose?: string;

  @SpeakeasyMetadata({ data: "json, name=identityType" })
  identityType?: string;

  @SpeakeasyMetadata({ data: "json, name=identityValue" })
  identityValue?: string;

  @SpeakeasyMetadata({ data: "json, name=vaccinatedBy" })
  vaccinatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=vaccinationDate" })
  vaccinationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=vaccinationPlace" })
  vaccinationPlace?: string;

  @SpeakeasyMetadata({ data: "json, name=vaccinationStatus" })
  vaccinationStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=vaccineName" })
  vaccineName?: string;
}

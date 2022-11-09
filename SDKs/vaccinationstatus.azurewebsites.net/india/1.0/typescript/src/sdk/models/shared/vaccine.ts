import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Vaccine extends SpeakeasyBase {
  @Metadata({ data: "json, name=dose" })
  dose?: number;

  @Metadata({ data: "json, name=identityType" })
  identityType?: string;

  @Metadata({ data: "json, name=identityValue" })
  identityValue?: string;

  @Metadata({ data: "json, name=vaccinatedBy" })
  vaccinatedBy?: string;

  @Metadata({ data: "json, name=vaccinationDate" })
  vaccinationDate?: string;

  @Metadata({ data: "json, name=vaccinationPlace" })
  vaccinationPlace?: string;

  @Metadata({ data: "json, name=vaccinationStatus" })
  vaccinationStatus?: string;

  @Metadata({ data: "json, name=vaccineName" })
  vaccineName?: string;
}

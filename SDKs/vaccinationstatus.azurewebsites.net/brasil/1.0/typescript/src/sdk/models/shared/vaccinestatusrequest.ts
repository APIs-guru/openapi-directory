import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VaccineStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=patientId" })
  patientId: string;
}

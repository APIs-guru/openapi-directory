import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VaccineStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=departmentId" })
  departmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=patientId" })
  patientId: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}

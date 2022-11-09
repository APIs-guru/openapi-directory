import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VaccineStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=departmentId" })
  departmentId?: string;

  @Metadata({ data: "json, name=patientId" })
  patientId: string;

  @Metadata({ data: "json, name=token" })
  token?: string;
}

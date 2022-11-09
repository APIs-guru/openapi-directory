import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VaccineStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=uuid" })
  uuid?: string;
}

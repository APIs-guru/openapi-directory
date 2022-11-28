import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VaccineStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=beneficiaryId" })
  beneficiaryId: string;

  @SpeakeasyMetadata({ data: "json, name=mobile" })
  mobile: string;
}

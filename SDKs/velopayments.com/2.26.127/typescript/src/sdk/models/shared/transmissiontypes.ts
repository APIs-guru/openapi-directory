import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TransmissionTypes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ACH" })
  ach: boolean;

  @SpeakeasyMetadata({ data: "json, name=SAME_DAY_ACH" })
  sameDayAch: boolean;

  @SpeakeasyMetadata({ data: "json, name=WIRE" })
  wire: boolean;
}

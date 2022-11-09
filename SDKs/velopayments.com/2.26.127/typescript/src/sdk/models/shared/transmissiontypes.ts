import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TransmissionTypes extends SpeakeasyBase {
  @Metadata({ data: "json, name=ACH" })
  ach: boolean;

  @Metadata({ data: "json, name=SAME_DAY_ACH" })
  sameDayAch: boolean;

  @Metadata({ data: "json, name=WIRE" })
  wire: boolean;
}

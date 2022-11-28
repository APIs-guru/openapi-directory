import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DutySummaryInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dutyEnd" })
  dutyEnd?: Date;

  @SpeakeasyMetadata({ data: "json, name=dutyId" })
  dutyId?: string;

  @SpeakeasyMetadata({ data: "json, name=dutyStart" })
  dutyStart?: Date;
}

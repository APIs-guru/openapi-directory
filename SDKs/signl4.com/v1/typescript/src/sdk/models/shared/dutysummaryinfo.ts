import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DutySummaryInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=dutyEnd" })
  dutyEnd?: Date;

  @Metadata({ data: "json, name=dutyId" })
  dutyId?: string;

  @Metadata({ data: "json, name=dutyStart" })
  dutyStart?: Date;
}

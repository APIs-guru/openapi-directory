import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PaySchedulePaySchedulePayFrequencyEnum {
    Weekly = "Weekly"
,    Monthly = "Monthly"
,    TwoWeekly = "TwoWeekly"
,    FourWeekly = "FourWeekly"
,    Yearly = "Yearly"
}


export class PaySchedulePaySchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=MetaData" })
  metaData?: Map<string, any>;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PayFrequency" })
  payFrequency?: PaySchedulePaySchedulePayFrequencyEnum;
}


export class PaySchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=PaySchedule" })
  paySchedule?: PaySchedulePaySchedule;
}

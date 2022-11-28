import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PaySchedulePaySchedulePayFrequencyEnum {
    Weekly = "Weekly",
    Monthly = "Monthly",
    TwoWeekly = "TwoWeekly",
    FourWeekly = "FourWeekly",
    Yearly = "Yearly"
}


export class PaySchedulePaySchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MetaData" })
  metaData?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PayFrequency" })
  payFrequency?: PaySchedulePaySchedulePayFrequencyEnum;
}


export class PaySchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PaySchedule" })
  paySchedule?: PaySchedulePaySchedule;
}

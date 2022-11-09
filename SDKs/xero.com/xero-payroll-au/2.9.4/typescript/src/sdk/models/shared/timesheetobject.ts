import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Timesheet } from "./timesheet";


export class TimesheetObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=Timesheet" })
  timesheet?: Timesheet;
}

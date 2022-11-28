import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Timesheet } from "./timesheet";



export class TimesheetObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Timesheet" })
  timesheet?: Timesheet;
}

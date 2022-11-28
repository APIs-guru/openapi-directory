import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Timesheet } from "./timesheet";



export class Timesheets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Timesheets", elemType: Timesheet })
  timesheets?: Timesheet[];
}

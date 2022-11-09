import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Timesheet } from "./timesheet";


export class Timesheets extends SpeakeasyBase {
  @Metadata({ data: "json, name=Timesheets", elemType: shared.Timesheet })
  timesheets?: Timesheet[];
}

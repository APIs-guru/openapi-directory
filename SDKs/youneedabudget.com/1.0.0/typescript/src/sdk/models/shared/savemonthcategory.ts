import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SaveMonthCategory extends SpeakeasyBase {
  @Metadata({ data: "json, name=budgeted" })
  budgeted: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SaveMonthCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=budgeted" })
  budgeted: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HouseEnumEnum } from "./houseenumenum";



export class DailyReportViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=fileSizeBytes" })
  fileSizeBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=house" })
  house?: HouseEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

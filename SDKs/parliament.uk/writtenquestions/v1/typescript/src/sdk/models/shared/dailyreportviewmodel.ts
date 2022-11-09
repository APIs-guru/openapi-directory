import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HouseEnumEnum } from "./houseenumenum";


export class DailyReportViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=fileSizeBytes" })
  fileSizeBytes?: number;

  @Metadata({ data: "json, name=house" })
  house?: HouseEnumEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

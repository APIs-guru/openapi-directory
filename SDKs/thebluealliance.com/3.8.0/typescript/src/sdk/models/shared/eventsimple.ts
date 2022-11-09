import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DistrictList } from "./districtlist";


export class EventSimple extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=district" })
  district?: DistrictList;

  @Metadata({ data: "json, name=end_date" })
  endDate: Date;

  @Metadata({ data: "json, name=event_code" })
  eventCode: string;

  @Metadata({ data: "json, name=event_type" })
  eventType: number;

  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=start_date" })
  startDate: Date;

  @Metadata({ data: "json, name=state_prov" })
  stateProv?: string;

  @Metadata({ data: "json, name=year" })
  year: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DistrictList } from "./districtlist";



export class EventSimple extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=district" })
  district?: DistrictList;

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate: Date;

  @SpeakeasyMetadata({ data: "json, name=event_code" })
  eventCode: string;

  @SpeakeasyMetadata({ data: "json, name=event_type" })
  eventType: number;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate: Date;

  @SpeakeasyMetadata({ data: "json, name=state_prov" })
  stateProv?: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year: number;
}

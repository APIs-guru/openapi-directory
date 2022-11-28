import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Geofence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=area" })
  area?: string;

  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=calendarId" })
  calendarId?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

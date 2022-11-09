import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Geofence extends SpeakeasyBase {
  @Metadata({ data: "json, name=area" })
  area?: string;

  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @Metadata({ data: "json, name=calendarId" })
  calendarId?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}

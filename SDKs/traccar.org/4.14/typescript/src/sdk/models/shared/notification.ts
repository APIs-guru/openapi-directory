import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Notification extends SpeakeasyBase {
  @Metadata({ data: "json, name=always" })
  always?: boolean;

  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @Metadata({ data: "json, name=calendarId" })
  calendarId?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=mail" })
  mail?: boolean;

  @Metadata({ data: "json, name=sms" })
  sms?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=web" })
  web?: boolean;
}

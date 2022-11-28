import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Notification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=always" })
  always?: boolean;

  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=calendarId" })
  calendarId?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=mail" })
  mail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sms" })
  sms?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=web" })
  web?: boolean;
}

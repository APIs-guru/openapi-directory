import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EventRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agent" })
  agent: string;

  @SpeakeasyMetadata({ data: "json, name=browsertype" })
  browsertype: string;

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: string;

  @SpeakeasyMetadata({ data: "json, name=click" })
  click: string;

  @SpeakeasyMetadata({ data: "json, name=clicks" })
  clicks: number;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=company" })
  company: string;

  @SpeakeasyMetadata({ data: "json, name=contact" })
  contact: string;

  @SpeakeasyMetadata({ data: "json, name=cost" })
  cost: number;

  @SpeakeasyMetadata({ data: "json, name=costcurrency" })
  costcurrency: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=deal" })
  deal: string;

  @SpeakeasyMetadata({ data: "json, name=deal name" })
  dealName: string;

  @SpeakeasyMetadata({ data: "json, name=delay" })
  delay: number;

  @SpeakeasyMetadata({ data: "json, name=denyreason" })
  denyreason: string;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device: string;

  @SpeakeasyMetadata({ data: "json, name=devicetype" })
  devicetype: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=emailaddrsha256" })
  emailaddrsha256: string;

  @SpeakeasyMetadata({ data: "json, name=flow" })
  flow: string;

  @SpeakeasyMetadata({ data: "json, name=flowstep" })
  flowstep: string;

  @SpeakeasyMetadata({ data: "json, name=flowtype" })
  flowtype: string;

  @SpeakeasyMetadata({ data: "json, name=impression" })
  impression: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude: string;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude: string;

  @SpeakeasyMetadata({ data: "json, name=optin" })
  optin: string;

  @SpeakeasyMetadata({ data: "json, name=os" })
  os: string;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution: string;

  @SpeakeasyMetadata({ data: "json, name=revenue" })
  revenue: number;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role: string;

  @SpeakeasyMetadata({ data: "json, name=session" })
  session: string;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site: string;

  @SpeakeasyMetadata({ data: "json, name=site name" })
  siteName: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: string;

  @SpeakeasyMetadata({ data: "json, name=userlanguage" })
  userlanguage: string;
}

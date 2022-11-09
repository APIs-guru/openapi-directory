import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EventRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=agent" })
  agent: string;

  @Metadata({ data: "json, name=browsertype" })
  browsertype: string;

  @Metadata({ data: "json, name=channel" })
  channel: string;

  @Metadata({ data: "json, name=click" })
  click: string;

  @Metadata({ data: "json, name=clicks" })
  clicks: number;

  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=company" })
  company: string;

  @Metadata({ data: "json, name=contact" })
  contact: string;

  @Metadata({ data: "json, name=cost" })
  cost: number;

  @Metadata({ data: "json, name=costcurrency" })
  costcurrency: string;

  @Metadata({ data: "json, name=currency" })
  currency: string;

  @Metadata({ data: "json, name=deal" })
  deal: string;

  @Metadata({ data: "json, name=deal name" })
  dealName: string;

  @Metadata({ data: "json, name=delay" })
  delay: number;

  @Metadata({ data: "json, name=denyreason" })
  denyreason: string;

  @Metadata({ data: "json, name=device" })
  device: string;

  @Metadata({ data: "json, name=devicetype" })
  devicetype: string;

  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=emailaddrsha256" })
  emailaddrsha256: string;

  @Metadata({ data: "json, name=flow" })
  flow: string;

  @Metadata({ data: "json, name=flowstep" })
  flowstep: string;

  @Metadata({ data: "json, name=flowtype" })
  flowtype: string;

  @Metadata({ data: "json, name=impression" })
  impression: string;

  @Metadata({ data: "json, name=ip" })
  ip: string;

  @Metadata({ data: "json, name=latitude" })
  latitude: string;

  @Metadata({ data: "json, name=longitude" })
  longitude: string;

  @Metadata({ data: "json, name=optin" })
  optin: string;

  @Metadata({ data: "json, name=os" })
  os: string;

  @Metadata({ data: "json, name=resolution" })
  resolution: string;

  @Metadata({ data: "json, name=revenue" })
  revenue: number;

  @Metadata({ data: "json, name=role" })
  role: string;

  @Metadata({ data: "json, name=session" })
  session: string;

  @Metadata({ data: "json, name=site" })
  site: string;

  @Metadata({ data: "json, name=site name" })
  siteName: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=user" })
  user: string;

  @Metadata({ data: "json, name=userlanguage" })
  userlanguage: string;
}

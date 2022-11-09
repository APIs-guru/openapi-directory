import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TemplateRequestTypeEnum {
    Sms = "SMS"
,    Web = "Web"
}


export class TemplateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=template" })
  template?: string;

  @Metadata({ data: "json, name=type" })
  type?: TemplateRequestTypeEnum;
}

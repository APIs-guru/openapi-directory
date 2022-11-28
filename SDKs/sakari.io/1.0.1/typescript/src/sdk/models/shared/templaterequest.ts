import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TemplateRequestTypeEnum {
    Sms = "SMS",
    Web = "Web"
}


export class TemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: TemplateRequestTypeEnum;
}

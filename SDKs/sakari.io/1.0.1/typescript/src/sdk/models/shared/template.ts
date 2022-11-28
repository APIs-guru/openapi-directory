import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TemplateTypeEnum {
    Sms = "SMS",
    Web = "Web"
}


export class Template extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: TemplateTypeEnum;
}

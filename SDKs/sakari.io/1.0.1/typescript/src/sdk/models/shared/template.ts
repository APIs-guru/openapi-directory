import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TemplateTypeEnum {
    Sms = "SMS"
,    Web = "Web"
}


export class Template extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=template" })
  template?: string;

  @Metadata({ data: "json, name=type" })
  type?: TemplateTypeEnum;
}

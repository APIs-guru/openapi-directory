import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Template } from "./template";


export class TemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Template;

  @Metadata({ data: "json, name=success" })
  success?: boolean;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Template } from "./template";



export class TemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Template;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}

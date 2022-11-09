import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ControllersAdvisoryDetailAttributes } from "./controllersadvisorydetailattributes";


export class ControllersAdvisoryDetailItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: ControllersAdvisoryDetailAttributes;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}

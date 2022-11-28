import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ControllersAdvisoryDetailAttributes } from "./controllersadvisorydetailattributes";



export class ControllersAdvisoryDetailItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: ControllersAdvisoryDetailAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

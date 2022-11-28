import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ControllersPackageDetailAttributes } from "./controllerspackagedetailattributes";



export class ControllersPackageDetailItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: ControllersPackageDetailAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ControllersPackageDetailAttributes } from "./controllerspackagedetailattributes";


export class ControllersPackageDetailItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: ControllersPackageDetailAttributes;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}

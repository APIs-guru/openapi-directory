import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VmSpecs extends SpeakeasyBase {
  @Metadata({ data: "json, name=diskType" })
  diskType: number;

  @Metadata({ data: "json, name=imageResourceId" })
  imageResourceId: string;

  @Metadata({ data: "json, name=size" })
  size: string;

  @Metadata({ data: "json, name=subnetResourceId" })
  subnetResourceId: string;
}

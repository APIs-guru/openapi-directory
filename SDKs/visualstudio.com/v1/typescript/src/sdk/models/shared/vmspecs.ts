import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VmSpecs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diskType" })
  diskType: number;

  @SpeakeasyMetadata({ data: "json, name=imageResourceId" })
  imageResourceId: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: string;

  @SpeakeasyMetadata({ data: "json, name=subnetResourceId" })
  subnetResourceId: string;
}

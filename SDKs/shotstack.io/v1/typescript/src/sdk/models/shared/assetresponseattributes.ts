import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AssetResponseAttributesStatusEnum {
    Importing = "importing",
    Ready = "ready",
    Failed = "failed",
    Deleted = "deleted"
}


// AssetResponseAttributes
/** 
 * The list of asset attributes and their values.
**/
export class AssetResponseAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=renderId" })
  renderId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AssetResponseAttributesStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

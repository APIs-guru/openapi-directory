import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AssetResponseAttributesStatusEnum {
    Importing = "importing"
,    Ready = "ready"
,    Failed = "failed"
,    Deleted = "deleted"
}


// AssetResponseAttributes
/** 
 * The list of asset attributes and their values.
**/
export class AssetResponseAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: string;

  @Metadata({ data: "json, name=filename" })
  filename?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=renderId" })
  renderId?: string;

  @Metadata({ data: "json, name=status" })
  status?: AssetResponseAttributesStatusEnum;

  @Metadata({ data: "json, name=updated" })
  updated?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

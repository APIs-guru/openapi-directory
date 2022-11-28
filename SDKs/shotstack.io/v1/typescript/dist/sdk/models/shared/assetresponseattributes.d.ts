import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AssetResponseAttributesStatusEnum {
    Importing = "importing",
    Ready = "ready",
    Failed = "failed",
    Deleted = "deleted"
}
/**
 * The list of asset attributes and their values.
**/
export declare class AssetResponseAttributes extends SpeakeasyBase {
    created?: string;
    filename?: string;
    id?: string;
    owner?: string;
    region?: string;
    renderId?: string;
    status?: AssetResponseAttributesStatusEnum;
    updated?: string;
    url?: string;
}

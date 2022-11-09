import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Asset } from "./asset";
export declare class AssetsWithCheckpoint extends SpeakeasyBase {
    assets: Asset[];
    since: number;
}

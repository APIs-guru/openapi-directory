import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Platform } from "./platform";
export declare class PlatformParentSingle extends SpeakeasyBase {
    id?: number;
    name: string;
    platforms: Platform[];
    slug?: string;
}

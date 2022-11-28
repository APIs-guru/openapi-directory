import { SpeakeasyBase } from "../../../internal/utils";
export declare class NetworkFollowEmbedded extends SpeakeasyBase {
    network?: Map<string, any>;
}
export declare class NetworkFollow extends SpeakeasyBase {
    embedded?: NetworkFollowEmbedded;
    networkId?: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ZebraTeam } from "./zebrateam";
export declare class ZebraAlliances extends SpeakeasyBase {
    blue?: ZebraTeam[];
    red?: ZebraTeam[];
}
export declare class Zebra extends SpeakeasyBase {
    alliances: ZebraAlliances;
    key: string;
    times: number[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { Nearby } from "./nearby";
import { Meta } from "./meta";
export declare class NearbyResponse extends SpeakeasyBase {
    data: Nearby[];
    meta?: Meta;
}
